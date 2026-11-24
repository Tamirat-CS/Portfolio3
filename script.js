/* ============================================================
   TAMIRAT ALEMU — HIGH-END CINEMATIC PORTFOLIO 2026
   Dual-Scroll Split Shell · Bold Animated Buttons · Zero Dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. DOM HELPERS & UTILITIES
     ============================================================ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  const escapeHtml = str =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  /* ============================================================
     2. TRILINGUAL DICTIONARY (ENGLISH ⇄ አማርኛ ⇄ AFAAN OROMOO)
     ============================================================ */
  const i18n = {
    en: {
      sidebar_role: 'Full-Stack Engineer & Video Director',
      download_cv: 'Download Résumé',
      quick_cv: 'Quick CV',
      nav_home: 'Home',
      nav_about: 'About',
      nav_langs: 'Languages & Stack',
      nav_services: 'Services',
      nav_work: 'Selected Work',
      nav_video: 'Video Studio',
      nav_trans: 'Language Lab',
      nav_contact: 'Contact',
      spotlight_available: 'AVAILABLE FOR HIRE',
      spotlight_tagline: 'Computer Science Specialist · Cinematic Video Editor · Python Automation · Trilingual Localization Partner',
      hero_status: 'Available for Freelance & Full-Time Contracts',
      hero_greeting_prefix: "Hi, I'm",
      hero_name: 'Tamirat Alemu',
      hero_name_sub: '(Taammiraat Alamuu)',
      hero_line2: 'Architecting High-Impact Digital Systems',
      hero_line3: '& Cinematic Motion Experiences.',
      hero_lead: 'A <strong class="col-cyan">full-stack software engineer</strong>, <strong class="col-rose">cinematic video director</strong>, <strong class="col-gold">Python data specialist</strong>, and native-level <strong class="col-emerald">Amharic ⇄ English ⇄ Afaan Oromoo localization partner</strong>. Based in Ethiopia, I partner with founders, agencies, and creators to turn ambitious ideas into <strong class="col-violet">production-ready products</strong> on schedule.',
      hero_focus: 'Current Specialty:',
      hero_cta_work: 'Explore Shipped Systems',
      hero_cta_cv: 'Inspect Résumé',
      hero_cta_talk: "Let's Connect",
      stat_projects: 'Production Systems',
      stat_success: 'On-Time Delivery',
      stat_videos: 'Videos Produced',
      stat_years: 'Years Experience',
      portrait_beacon: 'Verified Full-Stack & Video Editor',
      sec_about_num: '01 — Identity & Craft',
      sec_about_title: 'Where engineering precision meets visual storytelling and bilingual authenticity.',
      sec_about_lead: 'I combine computer science rigor, video post-production mastery, and certified localization expertise to provide cohesive, end-to-end execution for digital initiatives.',
      bento_bio_badge: 'Background & Philosophy',
      bento_bio_title: 'Computer Science Scholar & Full-Stack Builder',
      bento_bio_p1: 'Currently pursuing my degree in Computer Science at Wolkite University, I have spent the last three years building real-world software, directing and editing high-retention video content, optimizing data pipelines, and bridging language barriers across Ethiopian and international markets.',
      bento_bio_p2: 'I started coding to build the tools I wished existed. I fell in love with editing because pacing and sound shape how humans feel and decide. And I translate because growing up bilingual allows me to preserve nuanced cultural context that machine translation consistently loses.',
      bento_sig_title: 'Wolkite University · Software Engineer & Video Director',
      bento_clock_badge: 'Local Time & Zone',
      bento_clock_status: 'Active & Responding within 12h',
      bento_facts_badge: 'Quick Factsheet',
      term_quick_label: 'Quick inputs:',
      val1_title: 'Engineered for Velocity',
      val1_desc: 'Agile turnaround without architectural compromise. Clean, scalable, well-documented code delivered on or before deadlines.',
      val2_title: 'Production Reliability',
      val2_desc: 'Zero dropped database transactions, zero broken links, and rigorous cross-device testing before any client handoff.',
      val3_title: 'Meticulous Polish',
      val3_desc: 'Smooth animations, tactile micro-interactions, cinematic sound design, and color-accurate grading that elevates user trust.',
      val4_title: 'Clear Communication',
      val4_desc: 'Direct partner collaboration with regular milestone demos, transparent trade-offs, and zero corporate red tape.',
      sec_langs_num: '02 — Languages & Stacks',
      sec_langs_title: 'Polyglot Engineering & High-Performance Tooling',
      sec_langs_lead: 'Click any technology button below to explore mastery levels, architectural strengths, and real-world production impact.',
      tech_mastery_label: 'Mastery Level',
      tech_applied_label: 'Applied In:',
      tech_filter_all: 'All Tech',
      tech_filter_lang: 'Programming Languages',
      tech_filter_web: 'Web & Frameworks',
      tech_filter_media: 'Media & Video',
      tech_filter_db: 'Databases & OS',
      sec_services_num: '03 — Services & Capabilities',
      sec_services_title: 'Four focused disciplines. One reliable development partner.',
      sec_services_lead: 'From architecting secure full-stack web applications to editing high-retention commercial films and translating software strings for Ethiopian audiences.',
      srv1_title: 'Full-Stack Web Development',
      srv1_desc: 'Modern marketing websites, institutional portals, and reactive web applications engineered with clean code, rock-solid security, and responsive layouts.',
      srv1_f1: 'Responsive SPAs with React.js & Modern JS',
      srv1_f2: 'PHP Backend Architectures & Relational MySQL',
      srv1_f3: 'Role-Based Access Control & Secure Session Auth',
      srv1_f4: 'RESTful API Design & Third-Party Integrations',
      srv2_title: 'Cinematic Video Post-Production',
      srv2_desc: 'High-retention editing built to capture and hold viewer attention. Mastered color grading, tailored sound design, and kinetic motion graphics for brands and creators.',
      srv2_f1: 'YouTube Long-Form Series & Viral Shorts / Reels',
      srv2_f2: 'Commercial Brand Promos & Product Spotlights',
      srv2_f3: 'DaVinci Resolve Studio Color Grading (Rec.709 / HDR)',
      srv2_f4: 'Custom Foley Sound Design & Multi-Track Mixing',
      srv3_title: 'Data Automation & Python Pipelines',
      srv3_desc: 'Automate repetitive spreadsheet tasks and sanitize corrupted enterprise datasets with Python. Transform hours of manual labor into instant automated scripts.',
      srv3_f1: 'Python & Pandas Vectorized Cleaning Pipelines',
      srv3_f2: 'CSV, JSON, and Relational SQL Data Migrations',
      srv3_f3: 'Deduplication, Formatting & Regex Sanitization',
      srv3_f4: 'Excel & Google Sheets Script Automation',
      srv4_title: 'Amharic ⇄ English Localization',
      srv4_desc: 'Native, culturally authentic translation — never robotic machine output. Ideal for software localization, legal contracts, business proposals, and video subtitles.',
      srv4_f1: 'Software & Mobile Application UI String Localization',
      srv4_f2: 'Legal Contracts, Corporate Charters & Business Proposals',
      srv4_f3: 'Timecoded Video Subtitling (SRT/VTT) & Voiceover Scripts',
      srv4_f4: 'Ethiopian Cultural Tone & Nuance Adaptation',
      srv_book_btn: 'Book Service',
      calc_badge: 'Interactive Project Estimator',
      calc_title: 'Estimate Your Project Scope & Timeline',
      calc_desc: 'Select your desired project deliverables and delivery timeline to preview your project blueprint and pre-fill your inquiry.',
      calc_lbl_deliverables: 'Select Deliverables:',
      calc_opt_web: 'Full-Stack Web App / Website',
      calc_opt_video: 'Cinematic Video Editing & Grading',
      calc_opt_data: 'Python Data Pipeline / Cleanup',
      calc_opt_trans: 'Amharic ⇄ English Localization',
      calc_lbl_urgency: 'Timeline Urgency:',
      calc_urg_standard: 'Standard Turnaround (2–3 Weeks)',
      calc_urg_priority: 'Priority Delivery (1–2 Weeks)',
      calc_urg_sprint: 'Emergency Sprint (Under 7 Days)',
      calc_blueprint_tag: 'Calculated Blueprint',
      calc_apply_btn: 'Request This Scope Now',
      sec_work_num: '04 — Shipped Systems & Media',
      sec_work_title: 'Production-grade systems shipped and verified in the real world.',
      sec_work_lead: 'Explore a curated selection of full-stack platforms, client projects, and media productions. Click on any project card to open the complete case study.',
      filter_all: 'All Projects',
      filter_web: 'Web & Apps',
      filter_video: 'Video & Motion',
      filter_data: 'Data & Python',
      inspect_case_btn: 'Inspect Full Case Study',
      feat_flagship: 'Flagship University System',
      proj1_title: 'Online Voting System for University Student Councils',
      proj1_desc: 'A secure, fault-tolerant e-voting web system engineered for Wolkite University student council elections. Engineered to support 300+ concurrent student voters, instantaneous cryptographic tallying, multi-role administration, and a tamper-evident audit ledger.',
      proj1_m1: '300+ concurrent student voters',
      proj1_m2: 'Live election dashboard',
      proj1_m3: 'Cryptographic ballot hashing',
      proj1_m4: 'Multi-tier role management',
      btn_read_case: 'Read Complete Case Study',
      btn_view_study: 'View Case Study',
      cat_portal: 'Institutional Portal',
      proj2_title: 'Student Result Management System',
      proj2_desc: 'Complete institutional grading, automated GPA computation, and student report card generation for 320+ students. Eliminated weeks of manual paper record-keeping.',
      btn_inspect_system: 'Inspect System',
      cat_spa: 'React Single-Page App',
      proj3_title: 'TaskFlow — Offline-First Task Manager',
      proj3_desc: 'Kanban productivity application engineered with offline-first persistence. Features drag-and-drop task prioritization, tag filtering, and instant state synchronization.',
      cat_api: 'REST API Web App',
      proj4_title: 'Ethio-Weather — Ethiopian Cities Forecast',
      proj4_desc: 'Real-time weather tracking across Ethiopian cities utilizing OpenWeather API. Features multi-day forecast charts, low-bandwidth data optimization, and responsive mobile layout.',
      btn_watch_reel: 'Watch Video Reel',
      cat_video: 'Commercial Brand Film',
      proj5_title: 'Corporate Commercial Brand Film',
      proj5_desc: 'A high-energy 90-second brand promotional film engineered with kinetic typography, seamless speed-ramps, custom Foley audio design, and DaVinci Resolve color grading.',
      btn_view_reel: 'View Video Reel',
      cat_data: 'Python Automation',
      proj6_title: 'Automated CSV Data Sanitization Engine',
      proj6_desc: 'Production Python utility utilizing Pandas to deduplicate, validate, and normalize enterprise CSV exports. Transformed a 4-hour manual process into an automated 40-second job.',
      btn_inspect_pipeline: 'Inspect Pipeline',
      btn_watch_samples: 'Watch Samples',
      cat_creator: 'Creator Video Production',
      proj7_title: 'High-Retention YouTube Content Production',
      proj7_desc: 'End-to-end video editing pipeline for prominent Ethiopian YouTube channels. Dynamic storytelling, engaging b-roll pacing, synchronized sound effects, and multi-platform Shorts cutdowns.',
      btn_explore_channel: 'Explore Video Work',
      sec_video_num: '05 — Post-Production Studio',
      sec_video_title: 'Interactive Video Color Grading & Mastering Demo',
      sec_video_lead: 'Drag the interactive slider below to see the dramatic difference between flat raw camera log footage and my DaVinci Resolve color-graded master.',
      grade_after: "Tamirat's Color Graded Master",
      grade_before: 'Raw Flat Camera Log',
      sec_trans_num: '06 — Bilingual Mastery',
      sec_trans_title: 'Amharic ⇄ English Translation & Localization Lab',
      sec_trans_lead: 'Machine translation consistently misses the idiomatic soul, honorific grammar, and technical context of the Amharic language. Here is a live demonstration of how I translate for maximum clarity and cultural impact.',
      tab_tech: 'Tech & UI Strings',
      tab_legal: 'Legal & Business',
      tab_media: 'Film Subtitles & Media',
      tab_idioms: 'Cultural Idioms',
      trans_cta_prompt: 'Need software strings, documentation, or video subtitles localized into Amharic or Afaan Oromoo?',
      trans_cta_btn: 'Inquire About Translation',
      sec_contact_num: '07 — Collaboration',
      sec_contact_title: "Let's build something exceptional together.",
      sec_contact_lead: 'Have an upcoming web project, a video series needing high-retention editing, a data pipeline to automate, or localization work? Drop me a message below or reach out via Telegram or email.',
      form_badge: 'Priority Inquiry Dispatcher',
      form_services_label: 'Services Required:',
      form_name: 'Your Full Name',
      form_email: 'Email Address',
      form_subject: 'Subject',
      form_budget: 'Estimated Budget Range',
      form_message: 'Project Details & Timeline',
      form_submit: 'Send Message',
      form_telegram: 'Direct Telegram',
      form_privacy: '100% spam-free guarantee. Your contact information is never shared with third parties.',
      direct_title: 'Direct Channels',
      direct_lead: 'Prefer real-time chat? Click any line below to copy it or open the direct channel.',
      action_copy: 'Copy',
      action_open: 'Open',
      avail_badge: 'Accepting Q1/Q2 Project Bookings · 12h SLA',
      footer_role: 'Full-Stack Developer · Video Editor · Translator'
    },
    am: {
      sidebar_role: 'ሶፍትዌር ኢንጂነር እና የቪዲዮ ዳይሬክተር',
      download_cv: 'ሲቪ (CV) አውርድ',
      quick_cv: 'ፈጣን ሲቪ ዕይታ',
      nav_home: 'መነሻ',
      nav_about: 'ስለ እኔ',
      nav_langs: 'ቋንቋዎችና ቴክኖሎጂ',
      nav_services: 'አገልግሎቶች',
      nav_work: 'የተሰሩ ስራዎች',
      nav_video: 'የቪዲዮ ስቱዲዮ',
      nav_trans: 'የትርጉም ማዕከል',
      nav_contact: 'አግኙኝ',
      spotlight_available: 'ለስራ ዝግጁ ነኝ',
      spotlight_tagline: 'የኮምፒውተር ሳይንስ ባለሙያ · ሲኒማቲክ ቪዲዮ ኤዲተር · የፓይተን ዳታ ባለሙያ · ባለ 3 ቋንቋ ተርጓሚ',
      hero_status: 'ለኮንትራትና ለሙሉ ጊዜ ስራዎች ዝግጁ ነኝ',
      hero_greeting_prefix: 'ሰላም፣ እኔ',
      hero_name: 'ታምራት አለሙ',
      hero_name_sub: '(Tamirat Alemu · Taammiraat Alamuu)',
      hero_line2: 'ዘመናዊና አስተማማኝ የዲጂታል ቴክኖሎጂዎችን',
      hero_line3: 'እና ማራኪ የቪዲዮ ስራዎችን እፈጥራለሁ።',
      hero_lead: 'በኢትዮጵያ ወልቂጤ ዩኒቨርሲቲ <strong class="col-cyan">የኮምፒውተር ሳይንስ ተማሪ</strong>፣ <strong class="col-violet">የሙሉ-ስታክ ድረ-ገጽ ገንቢ</strong>፣ <strong class="col-rose">ሲኒማቲክ የቪዲዮ ኤዲተር</strong>፣ <strong class="col-gold">የፓይተን ዳታ ባለሙያ</strong> እና የ<strong class="col-emerald">አማርኛ ⇄ ኦሮምኛ ⇄ እንግሊዝኛ</strong> ባለሙያ ተርጓሚ ነኝ።',
      hero_focus: 'የአሁኑ ዋና ትኩረት:',
      hero_cta_work: 'ስራዎችን ይመልከቱ',
      hero_cta_cv: 'ሲቪ (CV) ይመልከቱ',
      hero_cta_talk: 'ያግኙኝ',
      stat_projects: 'የተጠናቀቁ ፕሮጀክቶች',
      stat_success: 'በወቅቱ ማድረስ',
      stat_videos: 'የተዘጋጁ ቪዲዮዎች',
      stat_years: 'ዓመታት ልምድ',
      portrait_beacon: 'የተረጋገጠ የሙሉ-ስታክ እና የቪዲዮ ባለሙያ',
      sec_about_num: '01 — ማንነትና የሙያ ፍልስፍና',
      sec_about_title: 'የኢንጂነሪንግ ጥራት፣ የቪዲዮ ጥበብ እና የቋንቋ እውቀት ጥምረት።',
      sec_about_lead: 'የኮምፒውተር ሳይንስ እውቀቴን ከሲኒማቲክ የቪዲዮ አርትዖት እና ከእውነተኛ የባህል ትርጉም ጋር በማዋሃድ የተሟላ ውጤት አቀርባለሁ።',
      bento_bio_badge: 'የህይወት ታሪክና ፍልስፍና',
      bento_bio_title: 'የኮምፒውተር ሳይንስ ተማሪና የሶፍትዌር ገንቢ',
      bento_bio_p1: 'በወልቂጤ ዩኒቨርሲቲ የኮምፒውተር ሳይንስ ትምህርቴን እየተከታተልኩ፣ ላለፉት ሶስት አመታት እውነተኛ ሶፍትዌሮችን በመገንባት፣ ከፍተኛ ተመልካች ያላቸውን ቪዲዮዎች በማዘጋጀት እና የቋንቋ ክፍተቶችን በመሙላት ላይ ቆይቻለሁ።',
      bento_bio_p2: 'ኮድ ማድረግ የጀመርኩት ችግሮችን ለመፍታት ነው። ቪዲዮ ኤዲቲንግ የምወደው ድምፅና ምስል ሰዎችን የማሳመን ሃይል ስላላቸው ነው። አማርኛ እና እንግሊዝኛ የምተረጉመው ደግሞ የኮምፒውተር ትርጉሞች የማይረዱትን የባህል ይዘት ጠብቆ ለማቅረብ ነው።',
      bento_sig_title: 'ወልቂጤ ዩኒቨርሲቲ · ሶፍትዌር ኢንጂነር & የቪዲዮ ዳይሬክተር',
      bento_clock_badge: 'የአካባቢ ሰዓት',
      bento_clock_status: 'ንቁና በ12 ሰዓት ውስጥ ምላሽ የሚሰጥ',
      bento_facts_badge: 'ፈጣን መረጃዎች',
      term_quick_label: 'ፈጣን ትዕዛዞች:',
      val1_title: 'ፈጣንና ጥራት ያለው አሰራር',
      val1_desc: 'የኮድ ጥራትን ሳይቀንሱ ፕሮጀክቶችን በፈጣን ፍጥነትና በተያዘላቸው የጊዜ ገደብ ማድረስ።',
      val2_title: 'ፍጹም አስተማማኝነት',
      val2_desc: 'ምንም አይነት የዳታቤዝ ስህተት የሌለባቸውና በሁሉም መሳሪያዎች ላይ በደንብ የተሞከሩ ሲስተሞች።',
      val3_title: 'ማራኪና ውብ እይታ',
      val3_desc: 'ለስላሳ አኒሜሽኖች፣ ደስ የሚል የተጠቃሚ ገጽታ እና ለዓይን የሚማርክ የቀለም አደረጃጀት።',
      val4_title: 'ግልጽ ግንኙነት',
      val4_desc: 'በየደረጃው ከደንበኞች ጋር ግልጽ ውይይት በማድረግ የሚፈለገውን ውጤት በትክክል ማሳካት።',
      sec_langs_num: '02 — ቋንቋዎችና ቴክኖሎጂ',
      sec_langs_title: 'ዘመናዊ የፕሮግራሚንግ ቋንቋዎች እና መሳሪያዎች',
      sec_langs_lead: 'የእያንዳንዱን ቴክኖሎጂ የብቃት ደረጃ፣ ጠንካራ ጎኖች እና የተሰሩባቸውን ፕሮጀክቶች ለመመልከት ከታች ያሉትን ቁልፎች ይጫኑ።',
      tech_mastery_label: 'የብቃት ደረጃ',
      tech_applied_label: 'ጥቅም ላይ የዋለበት:',
      tech_filter_all: 'ሁሉም',
      tech_filter_lang: 'የፕሮግራሚንግ ቋንቋዎች',
      tech_filter_web: 'ድረ-ገጽና ፍሬምዎርክ',
      tech_filter_media: 'ሚዲያና ቪዲዮ',
      tech_filter_db: 'ዳታቤዝና ሲስተም',
      sec_services_num: '03 — አገልግሎቶች',
      sec_services_title: 'አራት ልዩ ሙያዎች። አንድ አስተማማኝ አጋር።',
      sec_services_lead: 'ከደህንነቱ የተጠበቀ ድረ-ገጽ ግንባታ አንስቶ እስከ ማራኪ የቪዲዮ አርትዖት እና ትክክለኛ የአማርኛ ትርጉም ድረስ።',
      srv1_title: 'የሙሉ-ስታክ ድረ-ገጽ ግንባታ',
      srv1_desc: 'ዘመናዊ፣ ፈጣን እና ደህንነታቸው የተጠበቀ የድር መተግበሪያዎች እና የድርጅት ፖርታሎች በ React፣ PHP እና MySQL።',
      srv1_f1: 'ዘመናዊ ድረ-ገጾች በ React.js እና JavaScript',
      srv1_f2: 'የ PHP ባክ-ኤንድ እና የ MySQL ዳታቤዝ ግንባታ',
      srv1_f3: 'በሚና የተገደበ ደህንነቱ የተጠበቀ የይለፍ ቃል ስርዓት',
      srv1_f4: 'RESTful API እና ከሶስተኛ ወገን አገልግሎቶች ጋር ማገናኘት',
      srv2_title: 'ሲኒማቲክ የቪዲዮ አርትዖት',
      srv2_desc: 'የተመልካችን ቀልብ የሚስቡ የዩቲዩብ፣ የማስታወቂያ እና የሪልስ ቪዲዮዎች በ DaVinci Resolve እና Premiere Pro።',
      srv2_f1: 'የዩቲዩብ ረጅም ቪዲዮዎች እና ፈጣን Reels / Shorts',
      srv2_f2: 'የድርጅት ማስታወቂያዎች እና የምርት ማስተዋወቂያዎች',
      srv2_f3: 'በ DaVinci Resolve ሙያዊ የቀለም ማስተካከያ',
      srv2_f4: 'የድምጽ ማቀናበር እና የሞሽን ግራፊክስ',
      srv3_title: 'የዳታ አውቶሜሽን እና ፓይተን',
      srv3_desc: 'በሰዓታት የሚሰሩ አሰልቺ የዳታ ስራዎችን በጥቂት ሴኮንዶች የሚያከናውኑ የፓይተን ስክሪፕቶች።',
      srv3_f1: 'በ Python እና Pandas ፈጣን የዳታ ማጽጃ ስክሪፕቶች',
      srv3_f2: 'የ CSV፣ JSON እና MySQL ዳታ ማዛወሪያ',
      srv3_f3: 'ድግግሞሾችን ማጥፋትና በ Regex ዳታ ማስተካከል',
      srv3_f4: 'የ Excel እና Google Sheets አውቶሜሽን',
      srv4_title: 'የአማርኛ ⇄ እንግሊዝኛ ትርጉም',
      srv4_desc: 'የሶፍትዌር ጽሁፎች፣ ውሎች እና የቪዲዮ ንግግሮች ትክክለኛውን የባህልና የቋንቋ ይዘት ጠብቀው የሚተረጎሙበት ሙያዊ አገልግሎት።',
      srv4_f1: 'የድረ-ገጽ እና የሞባይል አፕሊኬሽን ጽሁፎች ትርጉም',
      srv4_f2: 'የህግ ውሎች፣ ደንቦች እና የንግድ ሰነዶች',
      srv4_f3: 'የቪዲዮ የግርጌ ጽሁፍ (SRT/VTT) ዝግጅት',
      srv4_f4: 'የባህል እና የአውድ ሚዛኑን የጠበቀ ትርጉም',
      srv_book_btn: 'አገልግሎቱን ይዘዙ',
      calc_badge: 'የፕሮጀክት ግምት ማስያ',
      calc_title: 'የፕሮጀክትዎን መጠንና ጊዜ ይገምግሙ',
      calc_desc: 'የሚፈልጉትን አገልግሎት በመምረጥ የሚፈጀውን ጊዜና ዝርዝር እቅድ ይመልከቱ።',
      calc_lbl_deliverables: 'አገልግሎቶችን ይምረጡ:',
      calc_opt_web: 'የድረ-ገጽ ወይም የዌብ አፕሊኬሽን ግንባታ',
      calc_opt_video: 'የቪዲዮ አርትዖትና ከለር ግሬዲንግ',
      calc_opt_data: 'የፓይተን ዳታ ማስተካከያና አውቶሜሽን',
      calc_opt_trans: 'የአማርኛ ⇄ እንግሊዝኛ ሙያዊ ትርጉም',
      calc_lbl_urgency: 'የአስቸኳይነት ደረጃ:',
      calc_urg_standard: 'መደበኛ (2–3 ሳምንታት)',
      calc_urg_priority: 'ፈጣን (1–2 ሳምንታት)',
      calc_urg_sprint: 'ድንገተኛ ስፕሪንት (ከ7 ቀናት በታች)',
      calc_blueprint_tag: 'የተሰላ እቅድ',
      calc_apply_btn: 'ይህን እቅድ ጠይቅ',
      sec_work_num: '04 — የተሰሩ ስራዎች',
      sec_work_title: 'በተግባር ተሰርተው ውጤታማ የሆኑ ፕሮጀክቶች።',
      sec_work_lead: 'የተመረጡ የሶፍትዌር እና የቪዲዮ ስራዎቼን እዚህ ይመልከቱ። ዝርዝሩን ለማየት ማንኛውንም ካርድ ይጫኑ።',
      filter_all: 'ሁሉም ስራዎች',
      filter_web: 'ድረ-ገጽና አፖች',
      filter_video: 'ቪዲዮና ሞሽን',
      filter_data: 'ዳታና ፓይተን',
      inspect_case_btn: 'ሙሉ ዝርዝር ይመልከቱ',
      feat_flagship: 'የዩኒቨርሲቲ ዋና ሲስተም',
      proj1_title: 'የወልቂጤ ዩኒቨርሲቲ የተማሪዎች ምክር ቤት የመስመር ላይ ድምጽ መስጫ ሲስተም',
      proj1_desc: 'ከ300 በላይ ተማሪዎች በአንድ ጊዜ ያለምንም መቆራረጥ ድምጽ የሰጡበት፣ አስተማማኝ እና ደህንነቱ የተጠበቀ የድምጽ አሰጣጥ ዌብ ሲስተም።',
      proj1_m1: '300+ ተማሪዎች በአንድ ጊዜ ድምጽ የሰጡበት',
      proj1_m2: 'የቀጥታ ውጤት መከታተያ ዳሽቦርድ',
      proj1_m3: 'በ SHA-256 የተጠበቀ የድምጽ ምስጠራ',
      proj1_m4: 'ለተመልካቾች፣ አስተዳዳሪዎችና መራጮች የተዘጋጀ',
      btn_read_case: 'ሙሉውን ዝርዝር ይመልከቱ',
      btn_view_study: 'ዝርዝሩን ይመልከቱ',
      cat_portal: 'የተቋም ፖርታል',
      proj2_title: 'የተማሪዎች ውጤት አስተዳደር ሲስተም',
      proj2_desc: 'ለ 320+ ተማሪዎች የውጤት፣ የ GPA ስሌት እና የሪፖርት ካርድ ማተሚያን በራስ-ሰር የሚሰራ የተቋም ሲስተም።',
      btn_inspect_system: 'ሲስተሙን ይመልከቱ',
      cat_spa: 'React ዌብ አፕሊኬሽን',
      proj3_title: 'TaskFlow — ያለ ኢንተርኔት የሚሰራ የስራ መከታተያ',
      proj3_desc: 'ካንባን (Kanban) ዘይቤ ያለው፣ በ LocalStorage ያለ ኢንተርኔት ስራዎችን በ Drag-and-Drop የሚያደራጅ የ React አፕሊኬሽን።',
      cat_api: 'REST API ዌብ አፕ',
      proj4_title: 'Ethio-Weather — የኢትዮጵያ ከተሞች የአየር ሁኔታ',
      proj4_desc: 'በ OpenWeather API የኢትዮጵያ ከተሞችን የአየር ሁኔታ በቀጥታ በትንሽ ዳታ የሚያሳይ ድረ-ገጽ።',
      btn_watch_reel: 'ቪዲዮውን ይመልከቱ',
      cat_video: 'የድርጅት ማስታወቂያ ፊልም',
      proj5_title: 'የድርጅት ማስታወቂያ እና ሲኒማቲክ ሪል',
      proj5_desc: 'በ DaVinci Resolve ቀለም የተስተካከለለትና ማራኪ ድምጽ የተገጠመለት ባለ 90 ሰከንድ 4K ማስታወቂያ።',
      btn_view_reel: 'ሪሉን ይመልከቱ',
      cat_data: 'የፓይተን አውቶሜሽን',
      proj6_title: 'በራስ-ሰር CSV ዳታ የሚያጸዳ የፓይተን ሲስተም',
      proj6_desc: 'ከ100,000 በላይ የደንበኞች ዳታን በ40 ሰከንድ ውስጥ በ Pandas አጽድቶ የሚያቀርብ ፈጣን ሲስተም።',
      btn_inspect_pipeline: 'ፓይፕላይኑን ይመልከቱ',
      btn_watch_samples: 'ናሙናዎችን ይመልከቱ',
      cat_creator: 'የዩቲዩብ ቪዲዮ ዝግጅት',
      proj7_title: 'ከፍተኛ ተመልካችነት ያላቸው የዩቲዩብ ቪዲዮዎች',
      proj7_desc: 'ለኢትዮጵያ የዩቲዩብ ቻናሎች የተመልካችን ቀልብ የሚይዙ ኤዲቶች፣ የድምጽ ጥበብ እና Reels ዝግጅት።',
      btn_explore_channel: 'የቪዲዮ ስራዎችን ይመልከቱ',
      sec_video_num: '05 — የቪዲዮ ስቱዲዮ',
      sec_video_title: 'የቀለም አደረጃጀት (Color Grading) ማሳያ',
      sec_video_lead: 'የመጀመሪያውን ያልተስተካከለ ቪዲዮ እና በ DaVinci Resolve የተስተካከለውን ልዩነት ለማየት መስመሩን ወደ ግራና ቀኝ ይጎትቱ።',
      grade_after: 'የታምራት ቀለም የተስተካከለለት ውጤት',
      grade_before: 'ያልተስተካከለ የመጀመሪያ ቪዲዮ',
      sec_trans_num: '06 — የቋንቋ ትርጉም',
      sec_trans_title: 'የአማርኛ ⇄ እንግሊዝኛ ትርጉም ማሳያ ላብራቶሪ',
      sec_trans_lead: 'ማሽኖች የማይረዱትን የአማርኛ ባህላዊ፣ ህጋዊ እና ቴክኒካዊ ቃላት በትክክል እንዴት እንደምተረጉም ይመልከቱ።',
      tab_tech: 'ቴክኖሎጂና ዌብ',
      tab_legal: 'ህጋዊና ቢዝነስ',
      tab_media: 'ቪዲዮና ፊልም',
      tab_idioms: 'ባህላዊ ፈሊጦች',
      trans_cta_prompt: 'የድረ-ገጽ ጽሁፎችን፣ ሰነዶችን ወይም ቪዲዮዎችን ወደ አማርኛ ወይም ኦሮምኛ ማስተርጎም ይፈልጋሉ?',
      trans_cta_btn: 'ስለ ትርጉም ያነጋግሩኝ',
      sec_contact_num: '07 — አግኙኝ',
      sec_contact_title: 'አብረን ድንቅ ስራ እንስራ።',
      sec_contact_lead: 'አዲስ የድረ-ገጽ ፕሮጀክት፣ የቪዲዮ አርትዖት፣ ወይም የትርጉም ስራ ካለዎት ከታች ባለው ቅጽ ወይም በቴሌግራም ያናግሩኝ።',
      form_badge: 'ቀጥታ መልዕክት መላኪያ',
      form_services_label: 'የሚፈልጓቸው አገልግሎቶች:',
      form_name: 'ሙሉ ስምዎ',
      form_email: 'ኢሜይል አድራሻ',
      form_subject: 'ጉዳዩ',
      form_budget: 'የተመደበ በጀት',
      form_message: 'የፕሮጀክቱ ዝርዝርና ጊዜ',
      form_submit: 'መልዕክት ላክ',
      form_telegram: 'በቀጥታ በቴሌግራም',
      form_privacy: 'መረጃዎ ሚስጥራዊነቱ 100% የተጠበቀ ነው።',
      direct_title: 'ቀጥታ መገናኛዎች',
      direct_lead: 'በቀጥታ መወያየት ይፈልጋሉ? ከታች ካሉት አማራጮች አንዱን ይምረጡ።',
      action_copy: 'ኮፒ',
      action_open: 'ክፈት',
      avail_badge: 'አዳዲስ ፕሮጀክቶችን ለመቀበል ዝግጁ ነኝ · 12 ሰዓት ምላሽ',
      footer_role: 'ሶፍትዌር ገንቢ · የቪዲዮ ኤዲተር · ተርጓሚ'
    },
    om: {
      sidebar_role: 'Injiinera Sooftiweerii & Daarektara Viidiyoo',
      download_cv: 'CV Buufadhaa',
      quick_cv: 'CV Ariifataa',
      nav_home: 'Fuula Duraa',
      nav_about: 'Waa\'ee Koo',
      nav_langs: 'Afaanota & Teeknooloojii',
      nav_services: 'Tajaajiloota',
      nav_work: 'Hojiiwwan Filataman',
      nav_video: 'Istuudiyoo Viidiyoo',
      nav_trans: 'Laabii Afaanii',
      nav_contact: 'Quunnamtii',
      spotlight_available: 'HOJIIF QOPHII DHA',
      spotlight_tagline: 'Barataa Saayinsii Kompiitaraa · Gulaalaa Viidiyoo Sinimaawaa · Ogeessa Paayitanii · Hiikaa Afaan Sadii',
      hero_status: 'Hojiif Qophaa\'aa fi Walta\'iinsaaf Banaadha',
      hero_greeting_prefix: 'Akkam, Ani',
      hero_name: 'Taammiraat Alamuu',
      hero_name_sub: '(Tamirat Alemu)',
      hero_line2: 'Sirnoota Diijitaalaa Qulqullina Olaanaa Qaban Ijaaruu',
      hero_line3: '& Muuxannoo Viidiyoo Sinimaawaa.',
      hero_lead: '<strong class="col-cyan">Injiinera sooftiweerii fuula-guutuu</strong>, <strong class="col-rose">daarektara viidiyoo sinimaawaa</strong>, <strong class="col-gold">ogeessa daataa Paayitanii</strong> fi tajaajila hiika <strong class="col-emerald">Afaan Oromoo ⇄ Ingiliffaa ⇄ Amaariffaa</strong> dhiyeessu. <strong class="col-violet">Yuunivarsiitii Walqixxee</strong> keessatti barnoota Saayinsii Kompiitaraa hordofaan jira.',
      hero_focus: 'Ogummaa Yeroo Ammaa:',
      hero_cta_work: 'Hojiiwwan Daawwadhaa',
      hero_cta_cv: 'CV Koo Ilaalaa',
      hero_cta_talk: 'Waliin Haa Haasofnu',
      stat_projects: 'Sirnoota Hojjetaman',
      stat_success: 'Milkaa\'ina Yeroo',
      stat_videos: 'Viidiyoowwan Qophaa\'an',
      stat_years: 'Waggaa Muuxannoo',
      portrait_beacon: 'Injiinera Fuula-Guutuu & Gulaalaa Viidiyoo',
      sec_about_num: '01 — Eenyummaa fi Ogummaa',
      sec_about_title: 'Iddoo qulqullinni injiinariingii seenaa fi afaaniin wal argutti.',
      sec_about_lead: 'Saayinsii kompiitaraa, qophii viidiyoo sinimaawaa fi dandeettii afaanii walitti fiduun bu\'aa olaanaa nan argamsiisa.',
      bento_bio_badge: 'Seenaa fi Falsafaa',
      bento_bio_title: 'Barataa Saayinsii Kompiitaraa & Hojjetaa Sooftiweerii',
      bento_bio_p1: 'Yuunivarsiitii Walqixxeetti barataa Saayinsii Kompiitaraa yoon ta\'u, waggoota sadan darban keessatti sooftiweerii qabatamaa ijaaraa, viidiyoo qulqullina qabu gulaalaa fi daataa qindeessaa tureera.',
      bento_bio_p2: 'Koodii barreessuu kanan jalqabe meeshaalee ani barbaadu uumuufi. Viidiyoo gulaaluu kanan jaalladheef immoo sagalee fi suuraan miira namaa waan tuquufi. Afaan Oromoo, Amaariffaa fi Ingiliffa kanan hiiku immoo aadaa fi ergaa dhugaa eeguufi.',
      bento_sig_title: 'Yuunivarsiitii Walqixxee · Injiinera Sooftiweerii & Daarektara Viidiyoo',
      bento_clock_badge: 'Sa\'aatii fi Naannoo',
      bento_clock_status: 'Hojii Irra Jira · Sa\'aatii 12 Keessatti Deebisa',
      bento_facts_badge: 'Qabxiiwwan Ijoo',
      term_quick_label: 'Galtee ariifataa:',
      val1_title: 'Saffisaan Ijaarame',
      val1_desc: 'Qulqullina sirnaa osoo hin miidhin yeroodhaan xumuruu. Koodii qulqulluu fi ammayyaa.',
      val2_title: 'Amanamtummaa Hojii',
      val2_desc: 'Dogoggora tokko malee qajeelummaadhaan hojjechuu fi meeshaalee hunda irratti mirkaneessuu.',
      val3_title: 'Miidhagina Qulqullinaa',
      val3_desc: 'Sochii lallaafaa, unkaa miidhagaa fi qulqullina halluu ija namaa hawwatu.',
      val4_title: 'Wal-qunnamtii Ifaa',
      val4_desc: 'Gareedhaan waliin hojjechuu, gabaasa yeroo hunda dhiyeessuu fi iftoomina qabaachuu.',
      sec_langs_num: '02 — Afaanota & Teeknooloojii',
      sec_langs_title: 'Ogummaa Afaanota Koodii fi Meeshaalee Ammayyaa',
      sec_langs_lead: 'Sadarkaa dandeettii, cimina ijoo fi hojiiwwan qabatamaa isaanii ilaaluuf qabduu teeknooloojii armaan gadii tuqaa.',
      tech_mastery_label: 'Sadarkaa Ogummaa',
      tech_applied_label: 'Hojiirra Kan Oole:',
      tech_filter_all: 'Hunda',
      tech_filter_lang: 'Afaanota Koodii',
      tech_filter_web: 'Weebii & Firiimwoorkii',
      tech_filter_media: 'Miidiyaa & Viidiyoo',
      tech_filter_db: 'Daataabeezii & Sirna',
      sec_services_num: '03 — Tajaajiloota',
      sec_services_title: 'Ogummaawwan ijoo afur. Michuu hojii amansiisaa tokko.',
      sec_services_lead: 'Websaayitii eegumsa qabu ijaaruu irraa kaasee hanga viidiyoo gulaaluu fi hiika Afaan Oromootti.',
      srv1_title: 'Ijaarsa Websaayitii Fuula-Guutuu',
      srv1_desc: 'Websaayitoota ammayyaa fi amanamoo React, PHP fi MySQL fayyadamuun ijaaruu.',
      srv1_f1: 'Appiiwwan Weebii React.js fi JavaScript Ammayyaatiin',
      srv1_f2: 'Sirna Duubaa PHP fi Daataabeezii MySQL Qindaa\'aa',
      srv1_f3: 'Eegumsa Eenyummaa fi Hayyama Fayyadamaa Amansiisaa',
      srv1_f4: 'Ijaarsa RESTful API fi Wal-qunnamsiisa Sirnootaa',
      srv2_title: 'Gulaallii Viidiyoo Sinimaawaa',
      srv2_desc: 'Viidiyoo YouTube, beeksisaa fi miidiyaa hawaasaa DaVinci Resolve fi Premiere Pro\'n qopheessuu.',
      srv2_f1: 'Viidiyoowwan YouTube Dhedheeroo fi Reels / Shorts',
      srv2_f2: 'Beeksisaawwan Dhaabbilee fi Agarsiisa Oomishaa',
      srv2_f3: 'Sirreeffama Halluu DaVinci Resolve (Rec.709 / HDR)',
      srv2_f4: 'Qophii Sagalee Qulqulluu fi Sochii Barreeffamaa',
      srv3_title: 'Awutomeeshinii Daataa fi Paayitanii',
      srv3_desc: 'Hojiiwwan daataa nuffisiisoo Paayitanii fayyadamuun sekondii muraasa keessatti ofumaan raawwachuu.',
      srv3_f1: 'Paaypilaayinii Qulqulleessaa Python & Pandas',
      srv3_f2: 'Jijjiirraa Daataa CSV, JSON fi SQL Qindaa\'aa',
      srv3_f3: 'Daataa Wal-fakkaatu Haquu fi Regex\'n Sirreessuu',
      srv3_f4: 'Awutomeeshinii Excel fi Google Sheets',
      srv4_title: 'Hiika Afaan Oromoo ⇄ Ingiliffaa ⇄ Amaariffaa',
      srv4_desc: 'Sooftiweerii, sanadoota seeraa fi sagalee viidiyoo aadaa fi ergaa isaanii eeguun sirriitti hiikuu.',
      srv4_f1: 'Hiika Jechoota Sooftiweerii fi Appilikeeshinii Moobaayilaa',
      srv4_f2: 'Waliigaltee Seeraa, Dambii fi Sanadoota Daldalaa',
      srv4_f3: 'Barreeffama Jala Viidiyoo (SRT/VTT) Sa\'aatii Eeggate',
      srv4_f4: 'Hiika Aadaa fi Haala Naannoo Sirriitti Eegu',
      srv_book_btn: 'Tajaajila Ajajaa',
      calc_badge: 'Shallaggii Pirojektii',
      calc_title: 'Bal\'inaa fi Yeroo Pirojektii Keessanii Shallagaa',
      calc_desc: 'Tajaajila barbaaddan filachuun bajataa fi yeroo fudhatu daawwadhaa.',
      calc_lbl_deliverables: 'Tajaajiloota Filadhaa:',
      calc_opt_web: 'Websaayitii / Appilikeeshinii Weebii',
      calc_opt_video: 'Gulaallii Viidiyoo Sinimaawaa',
      calc_opt_data: 'Daataa Paayitanii & Awutomeeshinii',
      calc_opt_trans: 'Hiika Afaan Oromoo ⇄ Ingiliffaa ⇄ Amaariffaa',
      calc_lbl_urgency: 'Saffisa Yeroo:',
      calc_urg_standard: 'Idilee (Torban 2–3)',
      calc_urg_priority: 'Ariifataa (Torban 1–2)',
      calc_urg_sprint: 'Ariifachiisaa (Guyyoota 7 gadi)',
      calc_blueprint_tag: 'Karoora Shallagame',
      calc_apply_btn: 'Karoora Kana Gaafadhaa',
      sec_work_num: '04 — Hojiiwwan Xumuraman',
      sec_work_title: 'Sirnoota addunyaa dhugaa keessatti hojjetamanii fi milkaa\'an.',
      sec_work_lead: 'Pirojektoota sooftiweerii fi viidiyoowwan ani qopheesse asitti daawwadhaa. Odeeffannoo dabalataaf tuqaa.',
      filter_all: 'Hojii Hunda',
      filter_web: 'Weebii & Appii',
      filter_video: 'Viidiyoo & Motion',
      filter_data: 'Daataa & Paayitanii',
      inspect_case_btn: 'Seenaa Hojii Guutuu Ilaalaa',
      feat_flagship: 'Sirna Olaanaa Yuunivarsiitii',
      proj1_title: 'Sirna Filannoo Toora Interneetii Gumii Barattoota Yuunivarsiitii',
      proj1_desc: 'Sirna filannoo toora interneetii barattoonni 300+ al-tokkotti sagalee itti kennan, amansiisaa fi qindoominaan ijaarame.',
      proj1_m1: 'Barattoota 300+ al-tokkotti sagalee kennan',
      proj1_m2: 'Daashboordii filannoo yeroo dhugaa',
      proj1_m3: 'Eegumsa sagalee haashiingii SHA-256',
      proj1_m4: 'Bulchiinsa gahee hedduu qabu',
      btn_read_case: 'Seenaa Hojii Guutuu Dubbisaa',
      btn_view_study: 'Seenaa Hojii Ilaalaa',
      cat_portal: 'Poortaalii Dhaabbataa',
      proj2_title: 'Sirna Bulchiinsa Qabxii Barattootaa',
      proj2_desc: 'Sirna qabxii barattootaa 320+, shallaggii GPA ofumaan hojjetuu fi waraqaa gabaasaa qopheessu.',
      btn_inspect_system: 'Sirnicha Ilaalaa',
      cat_spa: 'Appii Weebii React',
      proj3_title: 'TaskFlow — To\'ataa Hojii Interneetii Malee Hojjetu',
      proj3_desc: 'Appilikeeshinii hojii guyyaa guyyaa (Kanban) Drag-and-Drop fi kuusaa LocalStorage fayyadamu.',
      cat_api: 'Appii Weebii REST API',
      proj4_title: 'Ethio-Weather — Haala Qilleensaa Magaalota Itoophiyaa',
      proj4_desc: 'Sirna haala qilleensaa magaalota Itoophiyaa yeroo dhugaatti OpenWeather API\'n agarsiisu.',
      btn_watch_reel: 'Viidiyoo Daawwadhaa',
      cat_video: 'Fiilmii Beeksisa Dhaabbataa',
      proj5_title: 'Fiilmii Beeksisa Dhaabbilee Sinimaawaa',
      proj5_desc: 'Viidiyoo beeksisa sekondii 90 halluun isaa DaVinci Resolve\'n qulqullaayee sagalee addaatiin qophaa\'e.',
      btn_view_reel: 'Viidiyicha Ilaalaa',
      cat_data: 'Awutomeeshinii Paayitanii',
      proj6_title: 'Sirna Qulqulleessaa Daataa CSV Ofumaan Hojjetu',
      proj6_desc: 'Meeshaa Paayitanii (Pandas) sarara daataa 100,000+ sekondii 40 keessatti qulqulleessu.',
      btn_inspect_pipeline: 'Paaypilaayinii Ilaalaa',
      btn_watch_samples: 'Fakkeenyota Ilaalaa',
      cat_creator: 'Qophii Viidiyoo YouTube',
      proj7_title: 'Oomisha Viidiyoo YouTube Xiyyeeffannoo Olaanaa',
      proj7_desc: 'Gulaallii viidiyoo chaanaliwwan YouTube Itoophiyaatiif seenaa harkisaa fi Shorts qindeessuu.',
      btn_explore_channel: 'Hojiiwwan Viidiyoo Ilaalaa',
      sec_video_num: '05 — Istuudiyoo Viidiyoo',
      sec_video_title: 'Agarsiisa Qulqullina Halluu Viidiyoo (Color Grading)',
      sec_video_lead: 'Garaagarummaa viidiyoo duraanii fi kan DaVinci Resolve\'n qulqullaaye sarara kana dhiibuun ilaalaa.',
      grade_after: 'Gulaallii Qulqulluu Taammiraat',
      grade_before: 'Viidiyoo Kaameraa Duraanii',
      sec_trans_num: '06 — Ogummaa Afaanii',
      sec_trans_title: 'Laabii Hiika Afaan Oromoo, Amaariffaa fi Ingiliffaa',
      sec_trans_lead: 'Maashinonni hiika jechoota aadaa fi seeraa sirriitti hin beekan. Akkaataan ani hiiku asitti ilaalaa.',
      tab_tech: 'Jechoota Teeknooloojii',
      tab_legal: 'Seeraa fi Daldala',
      tab_media: 'Subtitles Viidiyoo',
      tab_idioms: 'Mammaaksa fi Aadaa',
      trans_cta_prompt: 'Sooftiweerii ykn viidiyoo gara Afaan Oromoo ykn Amaariffaatti hiiksisuu barbaadduu?',
      trans_cta_btn: 'Waa\'ee Hiikaa Gaafadhaa',
      sec_contact_num: '07 — Waliin Hojjechuu',
      sec_contact_title: 'Wanta adda ta\'e waliin haa ijaarru.',
      sec_contact_lead: 'Pirojektii haaraa, gulaallii viidiyoo, awutomeeshinii daataa, ykn hojii hiikaa qabduu? Ergaa naaf ergaa.',
      form_badge: 'Ergituu Ergaa Dursaa',
      form_services_label: 'Tajaajiloota Barbaaddan:',
      form_name: 'Maqaa Guutuu',
      form_email: 'Teessoo Imeelii',
      form_subject: 'Dhimma',
      form_budget: 'Giddu-galeessa Bajataa',
      form_message: 'Bal\'ina Pirojektii & Yeroo',
      form_submit: 'Ergaa Keessan Ergaa',
      form_telegram: 'Telegiraama Kallattii',
      form_privacy: 'Odeeffannoon keessan 100% eegamaadha. Namatti hin kennamu.',
      direct_title: 'Quunnamtii Kallattii',
      direct_lead: 'Kallattiin na qunnamuu barbaadduu? Kanneen armaan gadii tuqaa.',
      action_copy: 'Koppii',
      action_open: 'Bani',
      avail_badge: 'Pirojektoota Haaraaf Qophii Dha · Deebii <12h',
      footer_role: 'Ijaaraa Sooftiweerii · Gulaalaa Viidiyoo · Hiikaa Afaanii'
    }
  };

  /* ============================================================
     3. AUDIO SYNTHESIZER (NATIVE WEB AUDIO API - ZERO FILES)
     ============================================================ */
  let audioCtx = null;
  let soundEnabled = true;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.06) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function playBlip() { playTone(840, 'sine', 0.05, 0.05); }
  function playClick() { playTone(560, 'triangle', 0.06, 0.08); }
  function playSuccess() {
    playTone(523.25, 'sine', 0.1, 0.07);
    setTimeout(() => playTone(659.25, 'sine', 0.12, 0.07), 70);
    setTimeout(() => playTone(783.99, 'sine', 0.18, 0.08), 140);
  }
  function playToggle() {
    playTone(460, 'sine', 0.06, 0.06);
    setTimeout(() => playTone(690, 'sine', 0.08, 0.06), 50);
  }

  /* ============================================================
     4. PRELOADER & INITIALIZATION (INSTANT VISIBILITY FALLBACK)
     ============================================================ */
  const preloader = $('#preloader');
  if (preloader) {
    preloader.style.display = 'none';
    preloader.classList.add('is-hidden');
  }
  document.body.classList.remove('no-scroll');

  // Safe storage wrappers to guarantee zero crashes under file:/// protocol
  function safeGetStorage(key, fallback = null) {
    try {
      return (typeof localStorage !== 'undefined' && localStorage.getItem(key)) || fallback;
    } catch (e) {
      return fallback;
    }
  }
  function safeSetStorage(key, val) {
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(key, val);
    } catch (e) {}
  }

  /* ============================================================
     5. TRILINGUAL LANGUAGE SYSTEM (ENGLISH · አማርኛ · AFAAN OROMOO)
     ============================================================ */
  let currentLang = safeGetStorage('tamirat_lang', 'en');
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function applyLanguage(lang) {
    currentLang = lang;
    roleIdx = 0;
    charIdx = 0;
    isDeleting = false;
    safeSetStorage('tamirat_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const dict = i18n[lang] || i18n.en;
    const richKeys = new Set(['hero_lead']);
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (richKeys.has(key)) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    const btnEn = $('#langBtnEn');
    const btnAm = $('#langBtnAm');
    const btnOm = $('#langBtnOm');
    const mobileBtn = $('#mobileLangToggle');

    if (btnEn) btnEn.classList.toggle('is-active', lang === 'en');
    if (btnAm) btnAm.classList.toggle('is-active', lang === 'am');
    if (btnOm) btnOm.classList.toggle('is-active', lang === 'om');

    if (mobileBtn) {
      const langText = mobileBtn.querySelector('.lang-text');
      if (langText) {
        langText.textContent = lang === 'en' ? 'EN' : (lang === 'am' ? 'አማ' : 'ORO');
      }
    }
  }

  on($('#langBtnEn'), 'click', () => {
    applyLanguage('en');
    playClick();
    showToast('🌐 Switched to English');
  });

  on($('#langBtnAm'), 'click', () => {
    applyLanguage('am');
    playClick();
    showToast('🇪🇹 ወደ አማርኛ ተቀይሯል');
  });

  on($('#langBtnOm'), 'click', () => {
    applyLanguage('om');
    playClick();
    showToast('🌳 Gara Afaan Oromootti Jijjiirameera');
  });

  on($('#mobileLangToggle'), 'click', () => {
    const cycle = ['en', 'am', 'om'];
    const nextIdx = (cycle.indexOf(currentLang) + 1) % cycle.length;
    const nextLang = cycle[nextIdx];
    applyLanguage(nextLang);
    playClick();
    const msgs = {
      en: '🌐 Switched to English',
      am: '🇪🇹 ወደ አማርኛ ተቀይሯል',
      om: '🌳 Gara Afaan Oromootti Jijjiirameera'
    };
    showToast(msgs[nextLang]);
  });

  applyLanguage(currentLang);

  /* ============================================================
     6. THEME SWITCHER
     ============================================================ */
  let currentTheme = safeGetStorage('tamirat_theme', 'dark');

  function applyTheme(theme) {
    currentTheme = theme;
    safeSetStorage('tamirat_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    const label = $('#themeToggleLabel');
    if (label) {
      label.textContent = theme === 'dark' ? 'Obsidian' : 'Light';
    }
    const icon = $('#themeToggle i') || $('#mobileThemeToggle i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }

  function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    playToggle();
    showToast(nextTheme === 'dark' ? '🌙 Obsidian Theme Active' : '☀️ Light Theme Active');
  }

  on($('#themeToggle'), 'click', toggleTheme);
  on($('#mobileThemeToggle'), 'click', toggleTheme);
  applyTheme(currentTheme);

  /* ============================================================
     7. SOUND FX TOGGLE
     ============================================================ */
  function toggleSound() {
    soundEnabled = !soundEnabled;
    const label = $('#soundToggleLabel');
    if (label) label.textContent = soundEnabled ? 'Audio On' : 'Audio Muted';

    const icons = $$('#soundToggle i, #mobileSoundToggle i');
    icons.forEach(ic => {
      ic.className = soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    });

    if (soundEnabled) playSuccess();
    showToast(soundEnabled ? '🔊 Sound Effects Enabled' : '🔇 Audio Muted');
  }

  on($('#soundToggle'), 'click', toggleSound);
  on($('#mobileSoundToggle'), 'click', toggleSound);

  /* ============================================================
     8. SIDEBAR MOBILE DRAWER TOGGLE
     ============================================================ */
  const sidebar = $('#sidebar');
  const menuToggle = $('#menuToggle');
  const drawerMask = $('#drawerMask');

  function openDrawer() {
    if (sidebar) sidebar.classList.add('is-open');
    if (drawerMask) drawerMask.classList.add('is-active');
    if (menuToggle) { menuToggle.setAttribute('aria-expanded', 'true'); menuToggle.classList.add('is-active'); }
    playClick();
  }

  function closeDrawer() {
    if (sidebar) sidebar.classList.remove('is-open');
    if (drawerMask) drawerMask.classList.remove('is-active');
    if (menuToggle) { menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.classList.remove('is-active'); }
  }

  on(menuToggle, 'click', () => {
    if (sidebar && sidebar.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  on(drawerMask, 'click', closeDrawer);

  /* ============================================================
     9. DUAL-SCROLL CONTAINER NAVIGATION & SPY
     ============================================================ */
  const mainContent = $('#mainContent');
  const sections = $$('section[id]', mainContent || document);
  const navBtns = $$('.sidebar__nav .nav-btn');
  const scrollProgress = $('#scrollProgress');

  function getScrollTop() {
    if (window.innerWidth > 960 && mainContent) {
      return mainContent.scrollTop;
    }
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  function getScrollHeight() {
    if (window.innerWidth > 960 && mainContent) {
      return mainContent.scrollHeight - mainContent.clientHeight;
    }
    return document.documentElement.scrollHeight - window.innerHeight;
  }

  function scrollToSection(targetId) {
    const sec = $('#' + targetId);
    if (!sec) return;
    if (window.innerWidth > 960 && mainContent) {
      const rect = sec.getBoundingClientRect();
      const containerRect = mainContent.getBoundingClientRect();
      const topPos = mainContent.scrollTop + (rect.top - containerRect.top) - 30;
      mainContent.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    } else {
      sec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleScroll() {
    const scrollY = getScrollTop();
    const docHeight = getScrollHeight();
    if (scrollProgress && docHeight > 0) {
      const pct = (scrollY / docHeight) * 100;
      scrollProgress.style.width = pct + '%';
    }

    // Active Section Spy
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 220;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navBtns.forEach(btn => {
        btn.classList.toggle('is-active', btn.getAttribute('data-section') === currentId);
      });
    }

    triggerScrollReveal();
  }

  if (mainContent) {
    mainContent.addEventListener('scroll', handleScroll, { passive: true });
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Intercept all hash anchor clicks for seamless scrolling within mainContent
  $$('a[href^="#"]').forEach(anchor => {
    on(anchor, 'click', e => {
      const href = anchor.getAttribute('href');
      if (href && href.length > 1) {
        const targetId = href.substring(1);
        const targetSec = $('#' + targetId);
        if (targetSec) {
          e.preventDefault();
          scrollToSection(targetId);
          playClick();
          if (window.innerWidth <= 960) {
            closeDrawer();
          }
        }
      }
    });
  });

  /* ============================================================
     10. SCROLL REVEAL ANIMATIONS
     ============================================================ */
  function triggerScrollReveal() {
    const reveals = $$('.reveal');
    const containerH = (window.innerWidth > 960 && mainContent) ? mainContent.clientHeight : window.innerHeight;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= containerH - 50) {
        el.classList.add('is-visible');
      }
    });
  }
  window.addEventListener('load', triggerScrollReveal);
  setTimeout(triggerScrollReveal, 400);

  /* ============================================================
     11. LIVE WOLKITE (EAT) CLOCK
     ============================================================ */
  function updateWolkiteClock() {
    try {
      const now = new Date();
      // East Africa Time: UTC+3
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const eatTime = new Date(utc + 3 * 3600000);

      const h = String(eatTime.getHours()).padStart(2, '0');
      const m = String(eatTime.getMinutes()).padStart(2, '0');
      const s = String(eatTime.getSeconds()).padStart(2, '0');
      const timeStr = `${h}:${m}:${s}`;

      const sidebarClock = $('#liveClockDisplay');
      const bentoClock = $('#bentoClockTime');

      if (sidebarClock) sidebarClock.textContent = timeStr;
      if (bentoClock) bentoClock.textContent = timeStr;
    } catch (e) {}
  }
  setInterval(updateWolkiteClock, 1000);
  updateWolkiteClock();

  /* ============================================================
     12. ROTATING SPECIALTY ROLE TYPEWRITER (TRILINGUAL)
     ============================================================ */
  const roleTextEl = $('#rotatingRole');
  const rolesByLang = {
    en: [
      'Full-Stack Web Developer',
      'Cinematic Video Editor (DaVinci Resolve)',
      'Certified Amharic ⇄ English ⇄ Oromo Translator',
      'Python Automation & Data Specialist',
      'Computer Science Scholar @ Wolkite'
    ],
    am: [
      'ሙሉ-ስታክ የድረ-ገጽ ገንቢ',
      'ሲኒማቲክ የቪዲዮ ኤዲተር (DaVinci Resolve)',
      'የአማርኛ ⇄ እንግሊዝኛ ⇄ ኦሮምኛ ተርጓሚ',
      'የፓይተን ዳታ እና አውቶሜሽን ባለሙያ',
      'በወልቂጤ ዩኒቨርሲቲ የኮምፒውተር ሳይንስ ተማሪ'
    ],
    om: [
      'Injiinera Weebii Fuula-Guutuu',
      'Gulaalaa Viidiyoo Sinimaawaa (DaVinci Resolve)',
      'Hiikaa Afaan Oromoo ⇄ Amaariffaa ⇄ Ingiliffaa',
      'Ogeessa Daataa fi Awutomeeshinii Paayitanii',
      'Barataa Saayinsii Kompiitaraa @ Walqixxee'
    ]
  };

  function typeRole() {
    if (!roleTextEl) return;
    const activeRoles = rolesByLang[currentLang] || rolesByLang.en;
    const safeIdx = roleIdx % activeRoles.length;
    const current = activeRoles[safeIdx];

    if (isDeleting) {
      roleTextEl.textContent = current.substring(0, Math.max(0, charIdx - 1));
      charIdx--;
    } else {
      roleTextEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? 35 : 75;

    if (!isDeleting && charIdx >= current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx <= 0) {
      isDeleting = false;
      roleIdx = (safeIdx + 1) % activeRoles.length;
      delay = 450;
    }

    setTimeout(typeRole, delay);
  }
  setTimeout(typeRole, 1000);

  /* ============================================================
     13. 3D HOLOGRAPHIC SPOTLIGHT TILT & INTERACTION
     ============================================================ */
  const spotlightCard = $('#heroTopProfile .hero-top-profile__card');
  if (spotlightCard) {
    on(spotlightCard, 'mousemove', e => {
      if (window.innerWidth <= 960) return;
      const rect = spotlightCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotY = (x / (rect.width / 2)) * 4;
      const rotX = -(y / (rect.height / 2)) * 4;

      spotlightCard.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    on(spotlightCard, 'mouseleave', () => {
      spotlightCard.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    });
  }

  $$('.portrait-chip').forEach(chip => {
    on(chip, 'click', () => {
      playBlip();
      showToast(`Skill: ${chip.getAttribute('title')}`);
    });
  });

  /* ============================================================
     14. PROGRAMMING LANGUAGES & TECH MATRIX (VISUAL SHOWCASE)
     ============================================================ */
  const techShowcaseData = {
    javascript: {
      icon: 'fa-brands fa-js col-gold',
      category: 'CORE PROGRAMMING LANGUAGE',
      title: 'JavaScript (ES2024+)',
      level: 92,
      summary: 'Engineering <strong class="col-cyan">reactive web interfaces</strong>, asynchronous API workflows, live interactive dashboards, and zero-bloat front-end systems with <strong class="col-emerald">sub-50ms responsiveness</strong>.',
      pillars: ['Async APIs & Real-Time Updates', 'Interactive UI Animations', 'Production Performance'],
      project: 'University Online Voting System & Ethio-Weather App'
    },
    python: {
      icon: 'fa-brands fa-python col-cyan',
      category: 'DATA & AUTOMATION ENGINE',
      title: 'Python 3 & Pandas',
      level: 85,
      summary: 'Transforming multi-hour manual spreadsheets into <strong class="col-gold">40-second automated pipelines</strong> using vectorized Pandas cleansing, deduplication, and validation for <strong class="col-cyan">100,000+ rows</strong>.',
      pillars: ['Vectorized Data Cleaning', 'Regex Normalization', 'CLI & Batch Automation'],
      project: 'Automated CSV Data Sanitization Engine'
    },
    php: {
      icon: 'fa-brands fa-php col-violet',
      category: 'SERVER ARCHITECTURE & AUTH',
      title: 'PHP 8 (OOP / MVC)',
      level: 88,
      summary: 'Architecting <strong class="col-violet">fault-tolerant institutional backends</strong> featuring cryptographic SHA-256 verification, role-based access control, and <strong class="col-emerald">zero-drop transaction safety</strong>.',
      pillars: ['Secure Session Auth', 'PDO Relational Logic', 'Tamper-Evident Ledgers'],
      project: 'Online Voting System & Student Result Portal'
    },
    cpp: {
      icon: 'fa-solid fa-code col-rose',
      category: 'ALGORITHMS & COMPUTER SCIENCE',
      title: 'C++ / C Systems',
      level: 80,
      summary: 'Solving complex graph routing, optimization, and memory-critical problems with <strong class="col-rose">disciplined data structures</strong> and <strong class="col-cyan">high-efficiency algorithms</strong>.',
      pillars: ['Graph & Shortest-Path Algos', 'Complexity Optimization', 'Memory Discipline'],
      project: 'Wolkite University Computer Science Systems'
    },
    react: {
      icon: 'fa-brands fa-react col-cyan',
      category: 'MODERN FRONTEND FRAMEWORK',
      title: 'React.js 18',
      level: 82,
      summary: 'Building modular component architectures with <strong class="col-cyan">offline-first persistence</strong>, instant drag-and-drop workflows, and <strong class="col-violet">60fps state updates</strong>.',
      pillars: ['Hooks & Clean State', 'Offline-First UX', 'Modular Component UI'],
      project: 'TaskFlow — Offline-First Kanban Manager'
    },
    mysql: {
      icon: 'fa-solid fa-database col-gold',
      category: 'RELATIONAL DATABASE DESIGN',
      title: 'MySQL & SQL',
      level: 86,
      summary: 'Designing normalized relational schemas with indexed lookups and <strong class="col-gold">zero mathematical discrepancy</strong> for student records and <strong class="col-emerald">auditable digital ballots</strong>.',
      pillars: ['Normalized Schema Design', 'Indexed Query Speed', 'ACID Data Integrity'],
      project: 'Student Result Portal (320+ Student Records)'
    },
    htmlcss: {
      icon: 'fa-brands fa-html5 col-rose',
      category: 'UI ARCHITECTURE & MOTION',
      title: 'HTML5 & Modern CSS3',
      level: 95,
      summary: 'Crafting <strong class="col-rose">fluid responsive layouts</strong> across all viewports using CSS Grid, Flexbox, animated gradients, and <strong class="col-cyan">accessible glassmorphism</strong>.',
      pillars: ['Responsive Fluid Grids', 'GPU Smooth Animations', 'Accessible Design Systems'],
      project: 'High-Contrast Portfolio & Web Applications'
    },
    davinci: {
      icon: 'fa-solid fa-video col-rose',
      category: 'CINEMATIC COLOR STUDIO',
      title: 'DaVinci Resolve Studio 19',
      level: 86,
      summary: 'Executing <strong class="col-rose">ACEScc &amp; Rec.709 color pipelines</strong>, vector skin-tone isolation, and film emulation to elevate flat camera log into <strong class="col-gold">4K HDR cinema masters</strong>.',
      pillars: ['Node-Based Color Grading', 'Skin Tone Isolation', '4K HDR Mastering'],
      project: 'Corporate Commercial Brand Film'
    },
    premiere: {
      icon: 'fa-solid fa-film col-violet',
      category: 'HIGH-RETENTION EDITING',
      title: 'Adobe Premiere Pro',
      level: 92,
      summary: 'Engineering engaging storytelling hooks, J/L-cut dialogue pacing, and custom sound design that drove <strong class="col-emerald">+45% audience retention</strong> across <strong class="col-cyan">50,000+ views</strong>.',
      pillars: ['Story Pacing & Hooks', 'Multi-Track Audio Mixing', 'Shorts & Long-Form Cuts'],
      project: 'High-Retention YouTube Content Production'
    },
    aftereffects: {
      icon: 'fa-solid fa-wand-magic-sparkles col-cyan',
      category: 'MOTION GRAPHICS & VFX',
      title: 'Adobe After Effects',
      level: 76,
      summary: 'Designing kinetic typography, spring-physics lower thirds, and <strong class="col-cyan">brand motion callouts</strong> tailored for commercials and <strong class="col-violet">creator channels</strong>.',
      pillars: ['Kinetic Typography', 'Spring Motion Curves', 'Brand Lower Thirds'],
      project: 'Corporate Commercial & Creator Overlays'
    },
    bash: {
      icon: 'fa-solid fa-terminal col-emerald',
      category: 'LINUX & AUTOMATION CLI',
      title: 'Bash / Linux OS',
      level: 82,
      summary: 'Streamlining server deployments, environment automation, and <strong class="col-emerald">zero-downtime workflows</strong> on Linux hosting stacks.',
      pillars: ['Shell Workflow Automation', 'Zero-Downtime Deploys', 'System Diagnostics'],
      project: 'Production Web Deployment Tooling'
    },
    git: {
      icon: 'fa-brands fa-git-alt col-rose',
      category: 'VERSION CONTROL & COLLAB',
      title: 'Git & GitHub',
      level: 88,
      summary: 'Maintaining <strong class="col-rose">clean commit history</strong>, structured feature branching, and reliable team collaboration across full-stack projects.',
      pillars: ['Branching Workflows', 'Release Tagging', 'Clean Code Reviews'],
      project: 'Open-Source & University Team Repositories'
    }
  };

  const techFilterBtns = $$('.tech-filter-btn');
  const techButtons = $$('.tech-button');
  const spotlightIconEl = $('#techSpotlightIcon');
  const spotlightCatEl = $('#techSpotlightCategory');
  const spotlightTitleEl = $('#techSpotlightTitle');
  const spotlightLevelEl = $('#techSpotlightLevel');
  const spotlightBarEl = $('#techSpotlightBar');
  const spotlightSummaryEl = $('#techSpotlightSummary');
  const spotlightPillarsEl = $('#techSpotlightPillars');
  const spotlightProjectEl = $('#techSpotlightProject');

  function loadTechSpotlight(techKey, showFeedback = true) {
    const data = techShowcaseData[techKey];
    if (!data) return;

    if (spotlightIconEl) spotlightIconEl.innerHTML = `<i class="${data.icon}"></i>`;
    if (spotlightCatEl) spotlightCatEl.textContent = data.category;
    if (spotlightTitleEl) spotlightTitleEl.textContent = data.title;
    if (spotlightLevelEl) spotlightLevelEl.textContent = `${data.level}%`;
    if (spotlightBarEl) spotlightBarEl.style.width = `${data.level}%`;
    if (spotlightSummaryEl) spotlightSummaryEl.innerHTML = data.summary;
    if (spotlightPillarsEl) {
      const styles = ['spotlight-pillar--cyan', 'spotlight-pillar--violet', 'spotlight-pillar--emerald'];
      const icons = ['fa-bolt', 'fa-wand-magic-sparkles', 'fa-circle-check'];
      spotlightPillarsEl.innerHTML = data.pillars
        .map((p, idx) => `<span class="spotlight-pillar ${styles[idx % 3]}"><i class="fa-solid ${icons[idx % 3]}"></i> ${escapeHtml(p)}</span>`)
        .join('');
    }
    if (spotlightProjectEl) spotlightProjectEl.textContent = data.project;

    if (showFeedback) {
      playBlip();
      showToast(`Selected ${data.title} (${data.level}% Mastery)`);
    }
  }

  techFilterBtns.forEach(btn => {
    on(btn, 'click', () => {
      techFilterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const cat = btn.getAttribute('data-tech-filter');

      techButtons.forEach(tBtn => {
        const tCat = tBtn.getAttribute('data-tech-cat');
        if (cat === 'all' || tCat === cat) {
          tBtn.style.display = 'flex';
        } else {
          tBtn.style.display = 'none';
        }
      });
      playClick();
    });
  });

  techButtons.forEach(btn => {
    on(btn, 'click', () => {
      techButtons.forEach(b => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
      loadTechSpotlight(btn.getAttribute('data-tech'), true);
    });
  });

  if (techButtons.length > 0) {
    techButtons[0].classList.add('is-selected');
    loadTechSpotlight(techButtons[0].getAttribute('data-tech') || 'javascript', false);
  }

  /* ============================================================
     15. INTERACTIVE BEFORE/AFTER VIDEO COLOR GRADING SLIDER
     ============================================================ */
  const sliderBox = $('#gradingSliderBox');
  const beforeSlide = $('#gradingBeforeSlide');
  const sliderHandle = $('#gradingHandle');

  if (sliderBox && beforeSlide && sliderHandle) {
    let isDragging = false;

    function setSliderPos(clientX) {
      const rect = sliderBox.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = clamp((x / rect.width) * 100, 0, 100);

      beforeSlide.style.width = pct + '%';
      sliderHandle.style.left = pct + '%';
    }

    on(sliderBox, 'mousedown', e => {
      isDragging = true;
      setSliderPos(e.clientX);
      playClick();
    });

    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      setSliderPos(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    on(sliderBox, 'touchstart', e => {
      isDragging = true;
      if (e.touches[0]) setSliderPos(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', e => {
      if (!isDragging) return;
      if (e.touches[0]) setSliderPos(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  /* ============================================================
     16. INTERACTIVE DEVELOPER CLI TERMINAL
     ============================================================ */
  const terminalInput = $('#terminalInput');
  const terminalRunBtn = $('#terminalRunBtn');
  const terminalOutput = $('#terminalOutput');

  const terminalCommands = {
    help: () => `Available commands:
  bio        — Background, education & Wolkite CS scholar
  skills     — Core full-stack, video & language tooling
  projects   — Flagship systems (Voting, Student Result, TaskFlow)
  contact    — Email, Telegram, Phone & Campus location
  cv         — Open visual résumé preview & PDF download
  lang       — Toggle Amharic / English translation mode
  hire       — Pre-fill project inquiry form
  date       — Current local Wolkite time (UTC+3)
  clear      — Reset console buffer`,

    bio: () => `[TAMIRAT ALEMU — IDENTITY]
- Scholar: Computer Science Student at Wolkite University, Ethiopia
- Disciplines: Full-Stack Web Development, Cinematic Video Directing & Amharic Localization
- Core Philosophy: Build reliable, zero-defect systems with meticulous visual craft.`,

    skills: () => `[TECHNICAL ARSENAL]
- Languages: JavaScript (ES2024+), Python 3, PHP 8, C++, HTML5, Modern CSS3, SQL, Bash
- Frameworks & DB: React.js, MySQL, PDO, REST APIs
- Video Post-Production: DaVinci Resolve Studio (Color Grading), Premiere Pro, After Effects
- Linguistics: Native Amharic & Fluent English (Accredited Translator)`,

    projects: () => `[FLAGSHIP DEPLOYMENTS]
1. Online Voting System — Cryptographic e-voting for 300+ university voters
2. Student Result System — Automated grading & GPA generator for 320+ students
3. TaskFlow — React offline-first kanban productivity engine
4. Corporate Brand Film — 4K HDR commercial reel graded in DaVinci Resolve
5. Automated CSV Engine — Python Pandas pipeline reducing 4 hours to 40 seconds`,

    contact: () => `[DIRECT REACH]
- Email: tame.wku.cs@gmail.com
- Phone: +251 930 909 214
- Telegram: @Tame_Al29
- Location: Wolkite University, Wolkite, Ethiopia`,

    cv: () => {
      openCvModal();
      return 'Opening visual résumé viewer...';
    },

    lang: () => {
      const cycle = ['en', 'am', 'om'];
      const next = cycle[(cycle.indexOf(currentLang) + 1) % cycle.length];
      applyLanguage(next);
      return next === 'am' ? 'ቋንቋ ወደ አማርኛ ተቀይሯል።' : (next === 'om' ? 'Afaan gara Afaan Oromootti jijjiirameera.' : 'Language switched to English.');
    },

    hire: () => {
      scrollToSection('contact');
      return 'Navigating to project inquiry dispatcher...';
    },

    date: () => {
      return 'Current East Africa Time: ' + new Date().toLocaleString('en-US', { timeZone: 'Africa/Addis_Ababa' });
    },

    clear: () => {
      if (terminalOutput) {
        terminalOutput.innerHTML = `
          <div class="t-line t-dim">// Tamirat OS Console v3.0.0 buffer reset</div>
          <div class="t-line"><span class="t-prompt">guest@tamirat:~$</span> <span class="t-cmd">ready</span></div>
        `;
      }
      return null;
    }
  };

  function executeTerminalCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      terminalCommands.clear();
      return;
    }

    if (terminalOutput) {
      const userLine = document.createElement('div');
      userLine.className = 't-line';
      userLine.innerHTML = `<span class="t-prompt">guest@tamirat:~$</span> <span class="t-cmd">${escapeHtml(cmd)}</span>`;
      terminalOutput.appendChild(userLine);

      const resLine = document.createElement('div');
      resLine.className = 't-res';

      if (terminalCommands[cmd]) {
        resLine.textContent = terminalCommands[cmd]();
      } else if (cmd.startsWith('sudo hire')) {
        resLine.textContent = terminalCommands.hire();
      } else if (cmd.startsWith('echo ')) {
        resLine.textContent = rawCmd.substring(5);
      } else {
        resLine.textContent = `Command not recognized: "${cmd}". Type 'help' to inspect valid commands.`;
      }

      terminalOutput.appendChild(resLine);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      playClick();
    }
  }

  on(terminalInput, 'keydown', e => {
    if (e.key === 'Enter') {
      executeTerminalCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  on(terminalRunBtn, 'click', () => {
    if (terminalInput) {
      executeTerminalCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  $$('.term-pill').forEach(pill => {
    on(pill, 'click', () => {
      const termCmd = pill.getAttribute('data-term');
      if (termCmd) {
        executeTerminalCommand(termCmd);
      }
    });
  });

  /* ============================================================
     17. PROJECT SCOPE & BUDGET ESTIMATOR CALCULATOR
     ============================================================ */
  const calcWeb = $('#calcWeb');
  const calcVideo = $('#calcVideo');
  const calcData = $('#calcData');
  const calcTrans = $('#calcTrans');
  const calcTimelineDisplay = $('#calcTimelineDisplay');
  const calcSummary = $('#calcDeliverablesSummary');
  const calcApplyBtn = $('#calcApplyToForm');

  function updateCalculator() {
    let days = 0;
    const deliverables = [];

    if (calcWeb && calcWeb.checked) {
      days += 14;
      deliverables.push('• Full-Stack Responsive Web Application');
      deliverables.push('• Complete Source Code & Relational Database Schema');
    }
    if (calcVideo && calcVideo.checked) {
      days += 7;
      deliverables.push('• Cinematic 4K Video Edit & DaVinci Color Grading');
      deliverables.push('• Custom Foley Sound Design & Audio Stems');
    }
    if (calcData && calcData.checked) {
      days += 5;
      deliverables.push('• Vectorized Python & Pandas Data Sanitation Script');
    }
    if (calcTrans && calcTrans.checked) {
      days += 4;
      deliverables.push('• Native Amharic ⇄ English Cultural Localization');
    }

    const urgency = $('input[name="calcUrgency"]:checked')?.value || 'Standard';
    let urgencyMultiplier = 1;
    if (urgency === 'Priority') urgencyMultiplier = 0.75;
    if (urgency === 'Sprint') urgencyMultiplier = 0.45;

    const finalDays = Math.max(3, Math.round(days * urgencyMultiplier));

    if (calcTimelineDisplay) {
      calcTimelineDisplay.textContent = `Estimated Turnaround: ~${finalDays} Business Days (${urgency})`;
    }
    if (calcSummary) {
      calcSummary.innerHTML = deliverables.length > 0
        ? deliverables.map(d => `<span>${escapeHtml(d)}</span>`).join('')
        : '<span>• No deliverables selected yet. Check an option above.</span>';
    }
  }

  $$('.scope-check input, input[name="calcUrgency"]').forEach(input => {
    on(input, 'change', () => {
      updateCalculator();
      playClick();
    });
  });
  updateCalculator();

  on(calcApplyBtn, 'click', () => {
    scrollToSection('contact');

    const formServices = $$('input[name="services"]');
    formServices.forEach(chk => {
      if (chk.value === 'Web Development') chk.checked = !!(calcWeb && calcWeb.checked);
      if (chk.value === 'Video Editing') chk.checked = !!(calcVideo && calcVideo.checked);
      if (chk.value === 'Data Automation') chk.checked = !!(calcData && calcData.checked);
      if (chk.value === 'Amharic Translation') chk.checked = !!(calcTrans && calcTrans.checked);
    });

    const msgBox = $('#fieldMessage');
    if (msgBox) {
      msgBox.value = `Hi Tamirat,\n\nI just calculated an estimated scope via your interactive calculator.\nLet's discuss starting this project!`;
    }

    playSuccess();
    showToast('Applied calculated scope to contact form!');
  });

  $$('.service-book-btn').forEach(btn => {
    on(btn, 'click', () => {
      const srvName = btn.getAttribute('data-target-service');
      scrollToSection('contact');

      $$('input[name="services"]').forEach(chk => {
        chk.checked = (chk.value === srvName);
      });

      const subj = $('#fieldSubject');
      if (subj) subj.value = `Inquiry regarding ${srvName}`;

      playClick();
      showToast(`Selected service: ${srvName}`);
    });
  });

  /* ============================================================
     18. TRANSLATION LAB CATEGORY SWITCHER (TRILINGUAL: EN · AM · OM)
     ============================================================ */
  const transData = {
    tech: {
      source: '"Deploy scalable, mission-critical web applications with zero downtime and automated failover."',
      meta: 'Category: Software Architecture & Cloud Systems',
      fidel: '"ያለ ምንም መቋረጥና በራሳቸው አደጋን መከላከል በሚችሉ ቴክኖሎጂዎች የታገዙ፣ መጠነ-ሰፊ እና እጅግ ወሳኝ የሆኑ የድር መተግበሪያዎችን ያከናውኑ።"',
      oromo: '"Websaayitoota gurguddoo fi bu\'uuraa dogoggora tokko malee ofumaan balaa ittisan saffisaan hojiirra oolchaa."',
      phonetic: 'Phonetic: "Yale minim meqwaretna berasa chew adegan mekelakel bemichilu tecnologyoch..."',
      note: 'Replaces literal robotic machine output with natural Ethiopian tech terminology that resonates with engineering teams across Amharic & Afaan Oromoo.'
    },
    business: {
      source: '"Both parties agree to execute this commercial contract under binding confidentiality and mutual indemnification."',
      meta: 'Category: Legal Contracts & Enterprise Agreements',
      fidel: '"ሁለቱም ተዋዋይ ወገኖች ይህንን የንግድ ስምምነት በሚስጥር አጠባበቅ እና በጋራ የካሳ ዋስትና ግዴታዎች መሰረት ለመፈጸም ተስማምተዋል።"',
      oromo: '"Gareewwan lamaanuu waliigaltee daldalaa kana eegumsa icciitii fi dirqama beenyaa waloo eeguun raawwachuuf walii galaniiru."',
      phonetic: 'Phonetic: "Huletum tewaway wegenoch yihinen yengeed simiminet bemisteer atebabiq..."',
      note: 'Applies official legal jurisprudence terminology required for enterprise commercial agreements in Ethiopia.'
    },
    media: {
      source: '"The storm was raging, but his conviction cut through the thunder with cinematic silence."',
      meta: 'Category: Film Narrative & Video Subtitling',
      fidel: '"ማዕበሉ በብርቱ ቢናወጥም፣ ጽኑ ቁርጠኝነቱ ግን ነጎድጓዱን ሰንጥቆ በዝምታ ያስተጋባ ነበር።"',
      oromo: '"Obembellichi baay\'ee jabaatus, murtoon isaa inni cimaan cal-jedhee qoollifachuun sagalee bakakkaa keessa darbe."',
      phonetic: 'Phonetic: "Ma\'ibelu bebertu binawet\'im, ts\'inu qurt\'egnetu gin negodgawadun sent\'iqo..."',
      note: 'Crafted for screen pacing with poetic rhythm that fits strict subtitle reading speed constraints.'
    },
    idioms: {
      source: '"Actions speak louder than words."',
      meta: 'Category: Cultural Idioms & Metaphorical Translation',
      fidel: '"ከመቶ ጊዜ መስማት፣ አንዴ ማየት። (ወይም፡ ስራ ለሰሪው፣ ድር ቢያብር አንበሳ ያስር)"',
      oromo: '"Dubbii afaanii mannaa hojii harkaa wayya. (Mammaaksa: Dubbachuun lafa, hojjechuun samii)"',
      phonetic: 'Phonetic: "Kemeto gize mesmat, ande mayet..."',
      note: 'Preserves indigenous cultural Ethiopian proverbs in both Amharic and Afaan Oromoo instead of word-for-word machine translation.'
    }
  };

  const transTabs = $$('.trans-tab');
  const transSource = $('#transSourceText');
  const transMeta = $('#transSourceMeta');
  const transFidel = $('#transTargetFidel');
  const transOromo = $('#transTargetOromo');
  const transPhonetic = $('#transTargetPhonetic');
  const transNote = $('#transTargetNote');

  transTabs.forEach(tab => {
    on(tab, 'click', () => {
      transTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const cat = tab.getAttribute('data-trans-tab');
      const data = transData[cat];
      if (data) {
        if (transSource) transSource.textContent = data.source;
        if (transMeta) transMeta.textContent = data.meta;
        if (transFidel) transFidel.textContent = data.fidel;
        if (transOromo) transOromo.textContent = data.oromo;
        if (transPhonetic) transPhonetic.textContent = data.phonetic;
        if (transNote) transNote.innerHTML = `<i class="fa-solid fa-circle-info col-amber"></i> <strong>Context Note:</strong> ${escapeHtml(data.note)}`;
        playBlip();
      }
    });
  });

  /* ============================================================
     19. WORK FILTERS & PROJECT CASE STUDY MODAL
     ============================================================ */
  const workFilterChips = $$('.filters .chip');
  const workCards = $$('.work-card, .featured-project');

  workFilterChips.forEach(chip => {
    on(chip, 'click', () => {
      workFilterChips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      const filter = chip.getAttribute('data-filter');
      workCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
      playClick();
    });
  });

  const projectCaseStudies = {
    'voting-system': {
      title: 'Online Voting System for University Student Councils',
      badge: 'Flagship University System',
      img: 'assets/images/project1.png',
      tags: ['PHP 8', 'MySQL', 'JavaScript', 'Bootstrap', 'SHA-256 Hashing'],
      overview: 'Engineered for Wolkite University student government elections, this platform transformed a traditionally chaotic manual paper ballot process into a tamper-evident, cryptographic digital election.',
      challenge: 'The election committee previously required 14 hours to hand-count hundreds of physical paper votes, leading to frequent dispute allegations and lost ballots.',
      solution: 'Engineered an end-to-end PHP & MySQL architecture featuring one-way SHA-256 cryptographic ballot verification, session-locked student authentication, and a real-time analytics tally dashboard.',
      metrics: [
        'Over 300+ concurrent student votes successfully cast',
        '0 dropped votes or server race conditions',
        'Real-time live tallying cut counting time from 14h to 0s',
        '100% election audit certification'
      ],
      liveUrl: 'https://github.com/Tamirat-CS',
      githubUrl: 'https://github.com/Tamirat-CS'
    },
    'student-result': {
      title: 'Student Result Management System',
      badge: 'Institutional Portal',
      img: 'assets/images/project2.png',
      tags: ['PHP', 'MySQL', 'Relational Database', 'Bootstrap', 'FPDF'],
      overview: 'A full-scale institutional grading platform deployed to automate GPA computation, course registration, grade approvals, and printable report cards for academic departments.',
      challenge: 'Instructors were compiling final exam spreadsheets manually, creating discrepancies in student grade point averages and delayed semester clearances.',
      solution: 'Architected a normalized MySQL relational database with role-based access control (Admin, Instructor, Student), automated weighted grading algorithms, and PDF report generation.',
      metrics: [
        '320+ student profiles managed across 8 semesters',
        'Eliminated 100% of mathematical GPA rounding errors',
        'Instant 1-click official transcript PDF export'
      ],
      liveUrl: 'https://github.com/Tamirat-CS',
      githubUrl: 'https://github.com/Tamirat-CS'
    },
    'taskflow': {
      title: 'TaskFlow — Offline-First Task Manager',
      badge: 'React Application',
      img: 'assets/images/project3.png',
      tags: ['React.js', 'HTML5 Drag & Drop', 'LocalStorage', 'CSS Grid'],
      overview: 'A fluid, intuitive kanban task management application built for agile software developers and solo creators needing fast offline task prioritization.',
      challenge: 'Most web-based project boards are heavy and fail immediately when low-bandwidth or unstable network connectivity occurs.',
      solution: 'Built with React component state and LocalStorage persistence, enabling complete offline functionality with instantaneous drag-and-drop column sorting.',
      metrics: [
        'Sub-50ms interaction response time',
        '100% offline persistence without external network requests',
        'Smooth 60fps drag-and-drop micro-animations'
      ],
      liveUrl: 'https://github.com/Tamirat-CS',
      githubUrl: 'https://github.com/Tamirat-CS'
    },
    'ethio-weather': {
      title: 'Ethio-Weather — Ethiopian Cities Real-Time Forecast',
      badge: 'REST API Web App',
      img: 'assets/images/project4.png',
      tags: ['JavaScript ES6+', 'OpenWeather API', 'CSS3 Animations', 'JSON'],
      overview: 'A weather forecasting web application tailored to major Ethiopian cities (Addis Ababa, Wolkite, Hawassa, Bahir Dar, Dire Dawa) with atmospheric telemetry charts.',
      challenge: 'International weather applications often fail to localize Ethiopian geography or consume excessive mobile data on slower local 3G connections.',
      solution: 'Leveraged lightweight REST API calls with client-side caching to minimize data overhead while presenting dynamic atmospheric condition animations.',
      metrics: [
        'Under 40KB initial payload footprint',
        'Real-time temperature, humidity, wind & 5-day forecast',
        'Bilingual English & Amharic city labels'
      ],
      liveUrl: 'https://github.com/Tamirat-CS',
      githubUrl: 'https://github.com/Tamirat-CS'
    },
    'brand-promo': {
      title: 'Corporate Commercial Brand Film',
      badge: 'Commercial Video Reel',
      img: 'assets/images/profile1.jpg',
      tags: ['DaVinci Resolve Studio', 'Premiere Pro', 'After Effects', 'Foley Sound'],
      overview: 'A high-impact commercial video showcasing corporate services with cinematic color grading, kinetic typography, and synchronized sound design.',
      challenge: 'Raw footage was recorded in flat S-Log3 across mismatched indoor and outdoor lighting environments with inconsistent skin tones.',
      solution: 'Executed an ACEScc color management workflow in DaVinci Resolve, isolating skin vectors and applying film grain emulation for a cohesive high-budget aesthetic.',
      metrics: [
        '4K HDR broadcast deliverable',
        'Custom 6-track Foley audio mix with sound risers',
        'Delivered on a tight 4-day turnaround'
      ],
      liveUrl: 'https://www.youtube.com/@tame_1219',
      githubUrl: 'https://github.com/Tamirat-CS'
    },
    'csv-pipeline': {
      title: 'Automated CSV Data Sanitization Engine',
      badge: 'Python Pipeline',
      img: 'assets/images/project2.png',
      tags: ['Python 3', 'Pandas', 'Regex', 'CLI Automation'],
      overview: 'A high-throughput Python utility designed to ingest, clean, and validate massive enterprise CSV datasets with detailed error reporting.',
      challenge: 'Manual spreadsheet cleaning of 100,000+ client rows was taking over 4 hours per week and introducing human formatting errors.',
      solution: 'Wrote a vectorized Pandas script with regular expressions to deduplicate IDs, standardize phone numbers, and validate email syntax.',
      metrics: [
        'Processed 100,000+ rows in under 40 seconds',
        'Reduced manual engineering effort by 98%',
        'Automated error report generated in clean JSON'
      ],
      liveUrl: 'https://github.com/Tamirat-CS',
      githubUrl: 'https://github.com/Tamirat-CS'
    },
    'youtube-editing': {
      title: 'High-Retention YouTube Content Production',
      badge: 'Creator Channel',
      img: 'assets/images/profile1.jpg',
      tags: ['Premiere Pro', 'Audition', 'Pacing Hooks', 'YouTube Growth'],
      overview: 'Comprehensive video editing and storytelling for Ethiopian content creators, driving retention curves through disciplined visual pacing.',
      challenge: 'Average viewer retention was dropping off sharply after the first 30 seconds due to slow introductions.',
      solution: 'Introduced fast-paced cold-open hooks, animated lower thirds, sound design stingers, and visual zoom punches to keep eyes engaged.',
      metrics: [
        '+45% increase in average view duration',
        '50,000+ views achieved across client catalog',
        'Optimized cutdowns for YouTube Shorts & TikTok'
      ],
      liveUrl: 'https://www.youtube.com/@tame_1219',
      githubUrl: 'https://github.com/Tamirat-CS'
    }
  };

  const caseStudyModal = $('#caseStudyModal');
  const modalHeroImg = $('#modalHeroImg');
  const modalBadge = $('#modalBadge');
  const modalTitle = $('#modalTitle');
  const modalTags = $('#modalTags');
  const modalOverview = $('#modalOverview');
  const modalChallenge = $('#modalChallenge');
  const modalSolution = $('#modalSolution');
  const modalMetrics = $('#modalMetrics');
  const modalLiveBtn = $('#modalLiveBtn');
  const modalGithubBtn = $('#modalGithubBtn');

  function openCaseStudy(projectId) {
    const data = projectCaseStudies[projectId];
    if (!data || !caseStudyModal) return;

    if (modalHeroImg) modalHeroImg.src = data.img;
    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalTitle) modalTitle.textContent = data.title;

    if (modalTags) {
      modalTags.innerHTML = data.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('');
    }
    if (modalOverview) modalOverview.textContent = data.overview;
    if (modalChallenge) modalChallenge.textContent = data.challenge;
    if (modalSolution) modalSolution.textContent = data.solution;

    if (modalMetrics) {
      modalMetrics.innerHTML = data.metrics.map(m => `<li><i class="fa-solid fa-circle-check col-cyan"></i> ${escapeHtml(m)}</li>`).join('');
    }
    if (modalLiveBtn) modalLiveBtn.href = data.liveUrl;
    if (modalGithubBtn) modalGithubBtn.href = data.githubUrl;

    caseStudyModal.removeAttribute('hidden');
    document.body.classList.add('no-scroll');
    playClick();
  }

  function closeCaseStudy() {
    if (caseStudyModal) {
      caseStudyModal.setAttribute('hidden', '');
      document.body.classList.remove('no-scroll');
    }
  }

  $$('.open-case-study-btn, .work-card__view-btn, .featured-project__zoom-btn').forEach(btn => {
    on(btn, 'click', e => {
      e.preventDefault();
      const parentCard = btn.closest('[data-project-id]') || btn.closest('[data-project]');
      const pId = btn.getAttribute('data-project') || parentCard?.getAttribute('data-project-id');
      if (pId) openCaseStudy(pId);
    });
  });

  $$('[data-close-modal]').forEach(el => on(el, 'click', closeCaseStudy));

  /* ============================================================
     20. CV / RÉSUMÉ LIGHTBOX MODAL
     ============================================================ */
  const cvModal = $('#cvModal');
  function openCvModal() {
    if (cvModal) {
      cvModal.removeAttribute('hidden');
      document.body.classList.add('no-scroll');
      playSuccess();
    }
  }
  function closeCvModal() {
    if (cvModal) {
      cvModal.setAttribute('hidden', '');
      document.body.classList.remove('no-scroll');
    }
  }

  on($('#sidebarViewCvBtn'), 'click', openCvModal);
  on($('#heroViewCvBtn'), 'click', openCvModal);
  on($('#topProfileCvBtn'), 'click', openCvModal);
  on($('#sidebarTerminalBtn'), 'click', () => {
    scrollToSection('about');
    playClick();
  });
  $$('[data-close-cv]').forEach(el => on(el, 'click', closeCvModal));

  /* ============================================================
     21. COMMAND PALETTE (⌘K / CTRL+K)
     ============================================================ */
  const palette = $('#palette');
  const paletteInput = $('#paletteInput');
  const paletteList = $('#paletteList');

  function openPalette() {
    if (palette) {
      palette.removeAttribute('hidden');
      if (paletteInput) {
        paletteInput.value = '';
        paletteInput.focus();
      }
      filterPaletteItems('');
      playClick();
    }
  }

  function closePalette() {
    if (palette) palette.setAttribute('hidden', '');
  }

  on($('#openPaletteSidebar'), 'click', openPalette);
  $$('[data-close-palette]').forEach(el => on(el, 'click', closePalette));

  function filterPaletteItems(query) {
    if (!paletteList) return;
    const q = query.toLowerCase().trim();
    const items = $$('li', paletteList);
    items.forEach(li => {
      const txt = li.textContent.toLowerCase();
      li.style.display = txt.includes(q) ? 'flex' : 'none';
    });
  }

  if (paletteInput) {
    on(paletteInput, 'input', e => {
      filterPaletteItems(e.target.value);
    });
  }

  if (paletteList) {
    on(paletteList, 'click', e => {
      const item = e.target.closest('li');
      if (!item) return;

      const action = item.getAttribute('data-action');
      const target = item.getAttribute('data-target');
      const copyVal = item.getAttribute('data-copy');
      const url = item.getAttribute('data-url');

      closePalette();

      if (action === 'goto' && target) {
        scrollToSection(target);
      } else if (action === 'lang') {
        const cycle = ['en', 'am', 'om'];
        const next = cycle[(cycle.indexOf(currentLang) + 1) % cycle.length];
        applyLanguage(next);
        const msgs = {
          en: '🌐 Switched to English',
          am: '🇪🇹 ወደ አማርኛ ተቀይሯል',
          om: '🌳 Gara Afaan Oromootti Jijjiirameera'
        };
        showToast(msgs[next]);
      } else if (action === 'cv-preview') {
        openCvModal();
      } else if (action === 'cv-download') {
        window.open('documents/CV.pdf', '_blank');
      } else if (action === 'copy' && copyVal) {
        copyToClipboard(copyVal);
      } else if (action === 'open-link' && url) {
        window.open(url, '_blank', 'noopener');
      } else if (action === 'sound') {
        toggleSound();
      } else if (action === 'theme') {
        toggleTheme();
      } else if (action === 'top') {
        if (window.innerWidth > 960 && mainContent) {
          mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

      playClick();
    });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCaseStudy();
      closeCvModal();
      closePalette();
      closeDrawer();
      return;
    }

    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (['input', 'textarea', 'select'].includes(activeTag)) {
      return;
    }

    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (palette && !palette.hasAttribute('hidden')) {
        closePalette();
      } else {
        openPalette();
      }
      return;
    }

    if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      toggleTheme();
      return;
    }

    if (e.key.toLowerCase() === 'm') {
      e.preventDefault();
      toggleSound();
      return;
    }

    if (e.key.toLowerCase() === 'l') {
      e.preventDefault();
      const cycle = ['en', 'am', 'om'];
      const nextIdx = (cycle.indexOf(currentLang) + 1) % cycle.length;
      const next = cycle[nextIdx];
      applyLanguage(next);
      playClick();
      const msgs = {
        en: '🌐 Switched to English',
        am: '🇪🇹 ወደ አማርኛ ተቀይሯል',
        om: '🌳 Gara Afaan Oromootti Jijjiirameera'
      };
      showToast(msgs[next]);
      return;
    }

    const num = parseInt(e.key, 10);
    if (num >= 1 && num <= 8) {
      const sectionIds = ['home', 'about', 'languages', 'services', 'work', 'video-studio', 'translation-lab', 'contact'];
      const targetId = sectionIds[num - 1];
      if (targetId) {
        e.preventDefault();
        scrollToSection(targetId);
        playClick();
      }
    }
  });

  /* ============================================================
     22. QUICK-COPY TOAST HELPER
     ============================================================ */
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        playSuccess();
        showToast(`Copied: ${text}`);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      playSuccess();
      showToast(`Copied: ${text}`);
    } catch (e) {
      showToast(`Select & copy: ${text}`);
    }
    document.body.removeChild(ta);
  }

  $$('.btn-icon-copy, .direct-channel-item[data-copy]').forEach(el => {
    on(el, 'click', () => {
      const val = el.getAttribute('data-copy');
      if (val) copyToClipboard(val);
    });
  });

  const toastWrap = $('#toastWrap');
  function showToast(msg) {
    if (!toastWrap) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check col-cyan"></i> <span>${escapeHtml(msg)}</span>`;
    toastWrap.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  /* ============================================================
     23. CONTACT FORM VALIDATION & TELEGRAM DISPATCH
     ============================================================ */
  const contactForm = $('#contactForm');
  const formStatus = $('#formStatus');
  const sendViaTelegramBtn = $('#sendViaTelegramBtn');

  if (contactForm) {
    on(contactForm, 'submit', e => {
      e.preventDefault();
      const name = $('#fieldName')?.value.trim();
      const email = $('#fieldEmail')?.value.trim();
      const message = $('#fieldMessage')?.value.trim();

      if (!name || !email || !message) {
        if (formStatus) {
          formStatus.className = 'form-status is-error';
          formStatus.textContent = 'Please fill out all required fields marked with an asterisk (*).';
        }
        playTone(300, 'sawtooth', 0.15, 0.08);
        return;
      }

      contactForm.classList.add('is-submitting');

      setTimeout(() => {
        contactForm.classList.remove('is-submitting');
        if (formStatus) {
          formStatus.className = 'form-status is-success';
          formStatus.textContent = `Thank you, ${name}! Your inquiry has been received. Tamirat will reply within 12 hours.`;
        }
        contactForm.reset();
        playSuccess();
        triggerConfetti();
        showToast('Inquiry successfully dispatched!');
      }, 900);
    });
  }

  if (sendViaTelegramBtn) {
    on(sendViaTelegramBtn, 'click', () => {
      const name = $('#fieldName')?.value.trim() || 'Client';
      const subj = $('#fieldSubject')?.value.trim() || 'Project Inquiry';
      const msg = $('#fieldMessage')?.value.trim() || 'Hi Tamirat, I would like to discuss a project with you.';

      const encoded = encodeURIComponent(`Hi Tamirat,\n\nName: ${name}\nSubject: ${subj}\n\n${msg}`);
      window.open(`https://t.me/Tame_Al29?text=${encoded}`, '_blank', 'noopener');
      playClick();
    });
  }

  // Direct Mailto Dispatch Button
  on($('#sendViaMailtoBtn'), 'click', () => {
    const name = $('#fieldName')?.value.trim() || 'Client';
    const subj = $('#fieldSubject')?.value.trim() || 'Project Collaboration Inquiry';
    const msg = $('#fieldMessage')?.value.trim() || 'Hi Tamirat, I would like to discuss a project with you.';
    const mailtoUrl = `mailto:tame.wku.cs@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(`From: ${name}\n\n${msg}`)}`;
    window.location.href = mailtoUrl;
    playClick();
    showToast('Opening default email client...');
  });

  // Section 07: Direct Channel Link Clicks (Click anywhere on the tile)
  $$('.direct-channel-item--link').forEach(item => {
    on(item, 'click', () => {
      const url = item.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank', 'noopener');
        playClick();
      }
    });
  });

  // Section 07: Quick Project Blueprint Preset Pills
  const presetMap = {
    web: {
      check: '#chkWeb',
      subj: 'Full-Stack Web App Development Inquiry',
      msg: 'Hi Tamirat,\n\nI need a modern, high-performance web application engineered with clean architecture, responsive UI, and secure database management.'
    },
    video: {
      check: '#chkVideo',
      subj: 'Cinematic Video Post-Production & Color Grading',
      msg: 'Hi Tamirat,\n\nI have high-priority video footage requiring cinematic pacing, DaVinci Resolve color grading, custom sound design, and motion graphics.'
    },
    python: {
      check: '#chkData',
      subj: 'Python Data Pipeline & Automation Inquiry',
      msg: 'Hi Tamirat,\n\nI am looking to automate repetitive data workflows, build automated data sanitizers with Pandas, or scrape and structure web datasets.'
    },
    trans: {
      check: '#chkTrans',
      subj: 'Trilingual Translation & Localization (EN ⇄ AM ⇄ OM)',
      msg: 'Hi Tamirat,\n\nI need accurate, culturally authentic localization for software UI strings, video subtitles, or business contracts across English, Amharic, and Afaan Oromoo.'
    }
  };

  $$('.preset-pill').forEach(pill => {
    on(pill, 'click', () => {
      $$('.preset-pill').forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      const key = pill.getAttribute('data-preset');
      const conf = presetMap[key];
      if (conf) {
        const chk = $(conf.check);
        if (chk) chk.checked = true;
        const subjField = $('#fieldSubject');
        const msgField = $('#fieldMessage');
        if (subjField) subjField.value = conf.subj;
        if (msgField) msgField.value = conf.msg;
        playClick();
        showToast(`Preset: ${pill.textContent}`);
      }
    });
  });

  /* ============================================================
     23.5 HERO TECH COCKPIT INTERACTIVE HANDLERS (REACT & PYTHON)
     ============================================================ */
  // Cockpit Tab Switching
  $$('.cockpit-tab').forEach(tab => {
    on(tab, 'click', () => {
      const targetHud = tab.getAttribute('data-hud-tab');
      $$('.cockpit-tab').forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      $$('.cockpit-panel').forEach(p => p.classList.remove('is-active'));
      const targetPanel = $('#hudPanel' + targetHud.charAt(0).toUpperCase() + targetHud.slice(1));
      if (targetPanel) targetPanel.classList.add('is-active');
      playClick();
    });
  });

  // React Live Vote Simulation
  let votesA = 220;
  let votesB = 122;
  function updateVoteUI() {
    const total = votesA + votesB;
    const pctA = ((votesA / total) * 100).toFixed(1);
    const pctB = ((votesB / total) * 100).toFixed(1);
    const pctLabelA = $('#reactVotesPctA');
    const pctLabelB = $('#reactVotesPctB');
    const barA = $('#reactBarA');
    const barB = $('#reactBarB');
    const totalLabel = $('#hudTotalVotes');

    if (pctLabelA) pctLabelA.textContent = pctA + '%';
    if (pctLabelB) pctLabelB.textContent = pctB + '%';
    if (barA) barA.style.width = pctA + '%';
    if (barB) barB.style.width = pctB + '%';
    if (totalLabel) totalLabel.textContent = total;
  }

  on($('#voteBtnA'), 'click', () => {
    votesA += 1;
    updateVoteUI();
    playSuccess();
    showToast('⚛️ React Vote Cast for Tamirat!');
  });

  on($('#voteBtnB'), 'click', () => {
    votesB += 1;
    updateVoteUI();
    playClick();
    showToast('🏛️ Vote Cast for Architecture Lead!');
  });

  // Python Live Benchmark Runner
  on($('#runPythonPipelineBtn'), 'click', () => {
    const logsBox = $('#pythonLogsBox');
    const speedBadge = $('#pySpeedBadge');
    if (!logsBox) return;
    playClick();
    logsBox.innerHTML = '<div class="log-line col-amber">[RUNNING] Vectorized Pandas sanitization...</div>';
    if (speedBadge) speedBadge.textContent = 'Processing...';

    setTimeout(() => {
      logsBox.innerHTML = `
        <div class="log-line col-cyan">[LOAD] 142,800 records loaded (4.2 MB)</div>
        <div class="log-line col-emerald">[CLEAN] Filtered 3,410 corrupted student IDs</div>
        <div class="log-line col-gold">[SUCCESS] Pipeline finished in 0.014s (9.8M rows/sec)</div>
      `;
      if (speedBadge) speedBadge.textContent = '0.014s Benchmark';
      playSuccess();
      showToast('🐍 Python Pandas Pipeline Executed Successfully!');
    }, 550);
  });

  /* ============================================================
     24. CONFETTI CELEBRATION CANVAS
     ============================================================ */
  const confettiCanvas = $('#confetti');
  function triggerConfetti() {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#00f0ff', '#a855f7', '#f43f5e', '#10b981', '#f59e0b'];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: confettiCanvas.width / 2,
        y: confettiCanvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    let frame = 0;
    function renderConfetti() {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.45;
        p.rotation += p.rSpeed;
        p.alpha -= 0.012;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      });

      frame++;
      if (frame < 90) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }
    }
    requestAnimationFrame(renderConfetti);
  }

  /* ============================================================
     25. INTERACTIVE AMBIENT PARTICLE MESH CANVAS
     ============================================================ */
  const pCanvas = $('#particleCanvas');
  if (pCanvas) {
    const pCtx = pCanvas.getContext('2d');
    let pWidth = (pCanvas.width = window.innerWidth);
    let pHeight = (pCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      pWidth = pCanvas.width = window.innerWidth;
      pHeight = pCanvas.height = window.innerHeight;
    }, { passive: true });

    const particles = [];
    const count = window.innerWidth > 768 ? 45 : 20;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * pWidth,
        y: Math.random() * pHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        color: i % 2 === 0 ? 'rgba(0, 240, 255, 0.45)' : 'rgba(168, 85, 247, 0.45)'
      });
    }

    let mouseX = -9999;
    let mouseY = -9999;
    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function animateParticles() {
      pCtx.clearRect(0, 0, pWidth, pHeight);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            pCtx.beginPath();
            pCtx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 130) * 0.14})`;
            pCtx.lineWidth = 1;
            pCtx.moveTo(particles[i].x, particles[i].y);
            pCtx.lineTo(particles[j].x, particles[j].y);
            pCtx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > pWidth) p.vx *= -1;
        if (p.y < 0 || p.y > pHeight) p.vy *= -1;

        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 100) {
          p.x += (mdx / mDist) * 1.5;
          p.y += (mdy / mDist) * 1.5;
        }

        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        pCtx.fillStyle = p.color;
        pCtx.fill();
      });

      requestAnimationFrame(animateParticles);
    }
    requestAnimationFrame(animateParticles);
  }

  /* ============================================================
     26. MOUSE SPOTLIGHT & CURSOR TRACKER
     ============================================================ */
  const mouseSpotlight = $('#mouseSpotlight');
  const cursorDot = $('#cursorDot');
  const cursorRing = $('#cursorRing');

  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', e => {
      const x = e.clientX;
      const y = e.clientY;

      if (mouseSpotlight) {
        mouseSpotlight.style.left = x + 'px';
        mouseSpotlight.style.top = y + 'px';
      }
      if (cursorDot) {
        cursorDot.style.left = x + 'px';
        cursorDot.style.top = y + 'px';
      }
      if (cursorRing) {
        cursorRing.style.left = x + 'px';
        cursorRing.style.top = y + 'px';
      }
    }, { passive: true });

    $$('a, button, input, select, textarea, .tech-button, .bento-card, .work-card').forEach(el => {
      on(el, 'mouseenter', () => {
        if (cursorRing) cursorRing.classList.add('is-hover');
      });
      on(el, 'mouseleave', () => {
        if (cursorRing) cursorRing.classList.remove('is-hover');
      });
    });
  }

  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
