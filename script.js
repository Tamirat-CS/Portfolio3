/* ============================================================
   TAMIRAT ALEMU — PORTFOLIO 2025
   Interaction layer · Vanilla JS · Zero dependencies
   ============================================================ */
(function () {
  'use strict';

  /* ============================================================
     HELPERS
     ============================================================ */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  const escapeHtml = str =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  /* ============================================================
     1. PRELOADER
     ============================================================ */
  function initPreloader() {
    const preloader = $('#preloader');
    const bar = $('#preloaderBar');
    const pct = $('#preloaderPct');

    if (!preloader || !bar || !pct) {
      document.body.classList.remove('no-scroll');
      return;
    }

    let progress = 0;
    let finished = false;

    const setProgress = value => {
      progress = clamp(value, 0, 100);
      bar.style.width = progress + '%';
      pct.textContent = Math.floor(progress);
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      setTimeout(() => {
        preloader.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
        // Force-reveal any hero reveals in case IO missed them
        setTimeout(() => {
          $$('.hero .reveal').forEach(el => el.classList.add('is-in'));
        }, 100);
      }, 320);
    };

    const tick = () => {
      if (finished) return;

      const remaining = 100 - progress;
      const step = Math.max(0.7, remaining * 0.06 + Math.random() * 1.6);
      setProgress(progress + step);

      if (progress >= 99.5) {
        finish();
        return;
      }

      const delay = progress < 40 ? 60 : progress < 80 ? 90 : 130;
      setTimeout(tick, delay);
    };

    setTimeout(tick, 200);
    setTimeout(finish, 4000);

    if (document.readyState === 'complete') {
      setTimeout(finish, 500);
    } else {
      window.addEventListener('load', () => setTimeout(finish, 400), { once: true });
    }
  }

  /* ============================================================
     2. REVEAL ON SCROLL (with hard fallback)
     ============================================================ */
  function initReveal() {
    const els = $$('.reveal');
    if (!els.length) return;

    const showAll = () => els.forEach(el => el.classList.add('is-in'));

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );
      els.forEach(el => io.observe(el));
    } else {
      showAll();
    }

    // Hard fallback — everything becomes visible after 1.6s no matter what
    setTimeout(showAll, 1600);
  }

  /* ============================================================
     3. SKILL BARS
     ============================================================ */
  function initSkillBars() {
    const groups = $$('.skills__group');
    if (!groups.length) return;

    const fill = group => group.classList.add('is-in');

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              fill(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      groups.forEach(g => io.observe(g));
    } else {
      groups.forEach(fill);
    }

    // Hard fallback
    setTimeout(() => groups.forEach(fill), 1800);
  }

  /* ============================================================
     4. TOASTS
     ============================================================ */
  const toastWrap = $('#toastWrap');

  function toast(message, type = 'info') {
    if (!toastWrap) return;

    const el = document.createElement('div');
    el.className = `toast toast--${type}`;

    const icon = type === 'ok' ? 'fa-circle-check' : 'fa-circle-info';

    el.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${escapeHtml(message)}</span>
    `;

    toastWrap.appendChild(el);

    setTimeout(() => {
      el.classList.add('is-out');
      setTimeout(() => el.remove(), 320);
    }, 2800);
  }

  /* ============================================================
     5. YEAR · LIVE CLOCK
     ============================================================ */
  function initYear() {
    const el = $('#year');
    if (el) el.textContent = new Date().getFullYear();
  }

  function initClock() {
    const el = $('#liveClock');
    if (!el) return;

    const pad = n => String(n).padStart(2, '0');

    const update = () => {
      const d = new Date();
      el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };

    update();
    setInterval(update, 1000);
  }

  /* ============================================================
     6. SCROLL PROGRESS · BACK-TO-TOP RING
     ============================================================ */
  function initScrollProgress() {
    const progress = $('#scrollProgress');
    const ringFg = $('#ringFg');
    const backToTop = $('#backToTop');

    const RING_LEN = 2 * Math.PI * 21;

    if (ringFg) {
      ringFg.style.strokeDasharray = RING_LEN;
      ringFg.style.strokeDashoffset = RING_LEN;
    }

    const update = () => {
      const doc = document.documentElement;
      const h = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY || doc.scrollTop;
      const pct = h > 0 ? clamp(y / h, 0, 1) : 0;

      if (progress) progress.style.width = (pct * 100) + '%';

      if (backToTop) backToTop.classList.toggle('is-visible', y > 500);

      if (ringFg) ringFg.style.strokeDashoffset = RING_LEN * (1 - pct);
    };

    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        update();
        scheduled = false;
      });
    };

    on(window, 'scroll', schedule, { passive: true });
    on(window, 'resize', schedule, { passive: true });

    update();

    on(backToTop, 'click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ============================================================
     7. MOBILE DRAWER
     ============================================================ */
  function initDrawer() {
    const toggle = $('#menuToggle');
    const sidebar = $('#sidebar');
    const mask = $('#drawerMask');

    if (!toggle || !sidebar || !mask) return;

    const open = () => {
      sidebar.classList.add('is-open');
      mask.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
    };

    const close = () => {
      sidebar.classList.remove('is-open');
      mask.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    };

    on(toggle, 'click', () => {
      sidebar.classList.contains('is-open') ? close() : open();
    });

    on(mask, 'click', close);

    on(document, 'keydown', e => {
      if (e.key === 'Escape' && sidebar.classList.contains('is-open')) close();
    });

    window.__closeDrawer = close;
  }

  /* ============================================================
     8. SMOOTH SCROLL
     ============================================================ */
  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 24;

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    if (typeof window.__closeDrawer === 'function') window.__closeDrawer();
  }

  function initSmoothScroll() {
    $$('[data-section]').forEach(link => {
      on(link, 'click', e => {
        const id = link.getAttribute('data-section');
        if (!id) return;
        e.preventDefault();
        scrollToSection(id);
      });
    });
  }

  /* ============================================================
     9. ACTIVE NAV
     ============================================================ */
  function initActiveNav() {
    const ids = ['home', 'about', 'services', 'work', 'skills', 'testimonials', 'contact'];
    const items = $$('.nav__item');
    if (!items.length) return;

    const update = () => {
      const pos = window.scrollY + window.innerHeight * 0.32;

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }

      items.forEach(item => {
        item.classList.toggle('is-active', item.getAttribute('data-section') === current);
      });
    };

    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        update();
        scheduled = false;
      });
    };

    on(window, 'scroll', schedule, { passive: true });
    on(window, 'resize', schedule, { passive: true });

    update();
  }

  /* ============================================================
     10. TYPEWRITER ROLE
     ============================================================ */
  function initTypewriter() {
    const el = $('#rotatingRole');
    if (!el) return;

    const roles = [
      'Full-Stack Developer',
      'Video Editor',
      'Data Entry Specialist',
      'Amharic ⇄ English Translator',
      'Web Developer'
    ];

    if (prefersReducedMotion) {
      el.textContent = roles[0];
      return;
    }

    let rIdx = 0;
    let cIdx = 0;
    let deleting = false;

    const tick = () => {
      const word = roles[rIdx];

      if (!deleting) {
        cIdx++;
        el.textContent = word.slice(0, cIdx);

        if (cIdx === word.length) {
          deleting = true;
          return setTimeout(tick, 1600);
        }
        setTimeout(tick, 68);
      } else {
        cIdx--;
        el.textContent = word.slice(0, cIdx);

        if (cIdx === 0) {
          deleting = false;
          rIdx = (rIdx + 1) % roles.length;
          return setTimeout(tick, 340);
        }
        setTimeout(tick, 32);
      }
    };

    setTimeout(tick, 900);
  }

  /* ============================================================
     11. ANIMATED COUNTERS
     ============================================================ */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count || '0', 10);
    if (isNaN(target)) return;

    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }

    const duration = 1500;
    const start = performance.now();

    const step = now => {
      const t = clamp((now - start) / duration, 0, 1);
      const eased = easeOutCubic(t);
      el.textContent = Math.round(target * eased);

      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };

    requestAnimationFrame(step);
  }

  function initCounters() {
    const els = $$('[data-count]');
    if (!els.length) return;

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      els.forEach(el => io.observe(el));
    } else {
      els.forEach(animateCounter);
    }

    // Hard fallback
    setTimeout(() => {
      els.forEach(el => {
        const target = parseInt(el.dataset.count || '0', 10);
        if (!isNaN(target) && el.textContent !== String(target)) {
          el.textContent = target;
        }
      });
    }, 2500);
  }

  /* ============================================================
     12. THEME TOGGLE
     ============================================================ */
  function applyTheme(light) {
    document.body.classList.toggle('light', light);

    $$('#themeToggle i, #themeToggleMobile i').forEach(icon => {
      if (!icon) return;
      icon.classList.toggle('fa-moon', !light);
      icon.classList.toggle('fa-sun', light);
    });
  }

  function initTheme() {
    const desktop = $('#themeToggle');
    const mobile = $('#themeToggleMobile');

    const stored = localStorage.getItem('theme');
    if (stored === 'light') applyTheme(true);

    const toggle = () => {
      const isLight = !document.body.classList.contains('light');
      applyTheme(isLight);
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      toast(isLight ? 'Light theme enabled' : 'Dark theme enabled', 'info');
    };

    on(desktop, 'click', toggle);
    on(mobile, 'click', toggle);

    window.__toggleTheme = toggle;
  }

  /* ============================================================
     13. SPOTLIGHT CARD EFFECT
     ============================================================ */
  function initSpotlight() {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const cards = $$('.service, .value, .quote');

    cards.forEach(card => {
      on(card, 'mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ============================================================
     14. FILTERS (Work section)
     ============================================================ */
  function initFilters() {
    const chips = $$('.chip');
    const items = $$('.work');
    const featured = $('.featured');
    if (!chips.length) return;

    chips.forEach(chip => {
      on(chip, 'click', () => {
        chips.forEach(c => {
          c.classList.remove('is-active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('is-active');
        chip.setAttribute('aria-selected', 'true');

        const filter = chip.dataset.filter || 'all';

        if (featured) {
          const show = filter === 'all' || featured.dataset.cat === filter;
          featured.style.display = show ? '' : 'none';
        }

        items.forEach(item => {
          const show = filter === 'all' || item.dataset.cat === filter;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ============================================================
     15. COPY TO CLIPBOARD
     ============================================================ */
  function fallbackCopy(text, done, fail) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      ok ? done() : fail();
    } catch (err) {
      fail();
    }
  }

  function initCopy() {
    on(document, 'click', e => {
      const el = e.target.closest('[data-copy]');
      if (!el) return;

      const text = el.dataset.copy;
      if (!text) return;

      const done = () => toast(`Copied: ${text}`, 'ok');
      const fail = () => toast('Copy failed — please copy manually', 'info');

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done, fail));
      } else {
        fallbackCopy(text, done, fail);
      }
    });
  }

  /* ============================================================
     16. CONTACT FORM
     ============================================================ */
  function initForm() {
    const form = $('#contactForm');
    const status = $('#formStatus');
    const submit = $('#submitBtn');

    if (!form || !status || !submit) return;

    const setStatus = (msg, type) => {
      status.textContent = msg;
      status.className = 'form__status' + (type ? ` is-${type}` : '');
    };

    on(form, 'submit', async e => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (location.protocol === 'file:') {
        setStatus('✗ Please run this site through a PHP server to enable sending.', 'err');
        toast('Use a PHP server to send messages', 'info');
        return;
      }

      const data = new FormData(form);

      submit.classList.add('is-loading');
      submit.disabled = true;
      setStatus('Sending your message…', '');

      try {
        const res = await fetch('contact.php', {
          method: 'POST',
          body: data,
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });

        if (!res.ok) throw new Error('HTTP ' + res.status);

        const json = await res.json();

        if (json && json.success) {
          setStatus('✓ ' + (json.message || 'Message sent successfully!'), 'ok');
          form.reset();
          toast('Message sent — thank you!', 'ok');
          fireConfetti();
        } else {
          setStatus('✗ ' + (json.message || 'Something went wrong. Please try again.'), 'err');
          toast('Send failed', 'info');
        }
      } catch (err) {
        setStatus('✗ Network error. Please try again in a moment.', 'err');
        toast('Network error', 'info');
      } finally {
        submit.classList.remove('is-loading');
        submit.disabled = false;
        setTimeout(() => setStatus('', ''), 8000);
      }
    });
  }

  /* ============================================================
     17. VISITOR COUNTER
     ============================================================ */
  async function initVisitorCounter() {
    const el = $('#visitCounter');
    if (!el) return;

    try {
      const res = await fetch('counter.php', { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const count = data && typeof data.count !== 'undefined' ? data.count : '1.2k';
      el.textContent = '👁 ' + count + ' visits';
    } catch (err) {
      el.textContent = '👁 1.2k visits';
    }
  }

  /* ============================================================
     18. CONFETTI
     ============================================================ */
  const confettiState = {
    canvas: null,
    ctx: null,
    pieces: [],
    raf: null,
    colors: ['#8b5cf6', '#22d3ee', '#f472b6', '#34d399', '#fbbf24', '#ffffff']
  };

  function initConfetti() {
    const canvas = $('#confetti');
    if (!canvas) return;

    confettiState.canvas = canvas;
    confettiState.ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      confettiState.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    on(window, 'resize', resize, { passive: true });
  }

  function fireConfetti() {
    if (prefersReducedMotion) return;

    const { ctx, pieces, colors } = confettiState;
    if (!ctx) return;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight * 0.35;

    for (let i = 0; i < 150; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 6 + Math.random() * 13;

      pieces.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: 5 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.32,
        life: 1
      });
    }

    if (!confettiState.raf) {
      confettiState.raf = requestAnimationFrame(loopConfetti);
    }
  }

  function loopConfetti() {
    const { ctx, pieces } = confettiState;
    if (!ctx) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    ctx.clearRect(0, 0, w, h);

    for (let i = pieces.length - 1; i >= 0; i--) {
      const p = pieces[i];

      p.vy += 0.42;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life -= 0.008;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();

      if (p.life <= 0 || p.y > h + 60) pieces.splice(i, 1);
    }

    if (pieces.length) {
      confettiState.raf = requestAnimationFrame(loopConfetti);
    } else {
      cancelAnimationFrame(confettiState.raf);
      confettiState.raf = null;
      ctx.clearRect(0, 0, w, h);
    }
  }

  function initCvButtons() {
    $$('#cvBtn, [data-action="cv"]').forEach(btn => {
      on(btn, 'click', () => {
        if (btn.id === 'cvBtn') {
          fireConfetti();
          toast('Downloading résumé… 🎉', 'ok');
        }
      });
    });
  }

  /* ============================================================
     19. COMMAND PALETTE
     ============================================================ */
  const paletteState = {
    el: null,
    input: null,
    list: null,
    isOpen: false
  };

  function handlePaletteAction(li) {
    const action = li.dataset.action;

    if (action === 'goto') {
      const target = li.dataset.target;
      if (target) scrollToSection(target);
    } else if (action === 'cv') {
      window.location.href = 'documents/cv.pdf';
      toast('Downloading résumé… 🎉', 'ok');
      fireConfetti();
    } else if (action === 'copy') {
      const text = li.dataset.copy;
      if (text) {
        navigator.clipboard?.writeText(text)
          .then(() => toast(`Copied: ${text}`, 'ok'))
          .catch(() => toast('Copy failed', 'info'));
      }
    } else if (action === 'theme') {
      if (typeof window.__toggleTheme === 'function') window.__toggleTheme();
    } else if (action === 'top') {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  }

  function initPalette() {
    const palette = $('#palette');
    const input = $('#paletteInput');
    const list = $('#paletteList');
    const openBtn = $('#openPalette');

    if (!palette || !input || !list) return;

    paletteState.el = palette;
    paletteState.input = input;
    paletteState.list = list;

    const open = () => {
      palette.hidden = false;
      paletteState.isOpen = true;
      requestAnimationFrame(() => input.focus());
    };

    const close = () => {
      palette.hidden = true;
      paletteState.isOpen = false;
      input.value = '';
      $$('#paletteList li').forEach(li => {
        li.classList.remove('is-hidden', 'is-selected');
      });
    };

    const toggle = () => (paletteState.isOpen ? close() : open());

    window.__openPalette = open;
    window.__closePalette = close;
    window.__togglePalette = toggle;

    on(openBtn, 'click', open);

    on(palette, 'click', e => {
      if (e.target.matches('[data-close]') || e.target === palette) close();
    });

    on(input, 'input', () => {
      const q = input.value.toLowerCase().trim();
      $$('#paletteList li').forEach(li => {
        const match = !q || li.textContent.toLowerCase().includes(q);
        li.classList.toggle('is-hidden', !match);
      });
      $$('#paletteList li').forEach(li => li.classList.remove('is-selected'));
    });

    on(list, 'click', e => {
      const li = e.target.closest('li');
      if (!li) return;
      handlePaletteAction(li);
      close();
    });
  }

  function initPaletteKeyboard() {
    on(document, 'keydown', e => {
      // Ctrl/Cmd + K → toggle palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (typeof window.__togglePalette === 'function') window.__togglePalette();
        return;
      }

      // Handle palette internals only when open
      if (paletteState.isOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          if (typeof window.__closePalette === 'function') window.__closePalette();
          return;
        }

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          const items = $$('#paletteList li:not(.is-hidden)');
          if (!items.length) return;

          const cur = items.findIndex(li => li.classList.contains('is-selected'));
          items.forEach(li => li.classList.remove('is-selected'));

          const dir = e.key === 'ArrowDown' ? 1 : -1;
          const idx = (cur + dir + items.length) % items.length;

          items[idx].classList.add('is-selected');
          items[idx].scrollIntoView({ block: 'nearest' });
          return;
        }

        if (e.key === 'Enter') {
          e.preventDefault();
          const sel = $('#paletteList li.is-selected') ||
                      $('#paletteList li:not(.is-hidden)');
          if (sel) {
            handlePaletteAction(sel);
            if (typeof window.__closePalette === 'function') window.__closePalette();
          }
          return;
        }

        return;
      }

      // Ignore typing in inputs / textareas
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;

      // Number keys → sections
      const map = {
        '1': 'home',
        '2': 'about',
        '3': 'services',
        '4': 'work',
        '5': 'skills',
        '6': 'testimonials',
        '7': 'contact'
      };

      if (map[e.key]) {
        e.preventDefault();
        scrollToSection(map[e.key]);
      } else if (e.key.toLowerCase() === 't') {
        if (typeof window.__toggleTheme === 'function') window.__toggleTheme();
      } else if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  }

  /* ============================================================
     20. MARQUEE PAUSE ON HOVER (CSS handles this too, JS is a fallback)
     ============================================================ */
  function initMarquee() {
    const track = $('.marquee__track');
    const wrapper = $('.marquee');
    if (!track || !wrapper) return;

    on(wrapper, 'mouseenter', () => { track.style.animationPlayState = 'paused'; });
    on(wrapper, 'mouseleave', () => { track.style.animationPlayState = 'running'; });
  }

  /* ============================================================
     21. BOOT
     ============================================================ */
  function boot() {
    document.body.classList.add('no-scroll');

    initYear();
    initClock();
    initPreloader();
    initReveal();
    initSkillBars();
    initScrollProgress();
    initDrawer();
    initSmoothScroll();
    initActiveNav();
    initTypewriter();
    initCounters();
    initTheme();
    initSpotlight();
    initFilters();
    initCopy();
    initForm();
    initVisitorCounter();
    initConfetti();
    initCvButtons();
    initPalette();
    initPaletteKeyboard();
    initMarquee();

    // Welcome toast after preloader finishes
    setTimeout(() => {
      toast('Welcome — press ⌘K for quick actions', 'info');
    }, 3200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  /* ============================================================
     22. EXPOSE GLOBALS
     ============================================================ */
  window.__portfolio = {
    toast,
    scrollToSection,
    fireConfetti,
    openPalette: () => window.__openPalette && window.__openPalette(),
    closePalette: () => window.__closePalette && window.__closePalette(),
    toggleTheme: () => window.__toggleTheme && window.__toggleTheme()
  };
})();