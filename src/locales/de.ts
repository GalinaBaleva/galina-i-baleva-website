export const de = {
  nav: {
    links: [
      { href: '#about',    label: 'Über mich' },
      { href: '#skills',   label: 'Fähigkeiten' },
      { href: '#projects', label: 'Projekte' },
      { href: '#contact',  label: 'Kontakt' },
    ],
  },
  hero: {
    badge: 'Offen für neue Projekte',
    name: 'Galina Baleva',
    role: 'Full-Stack-Entwicklerin & KI-Integrator & SEO-Spezialistin',
    description:
      'Ich entwickle skalierbare Webanwendungen, integriere KI-Lösungen und optimiere für Suchmaschinen – mit Fokus auf Geschwindigkeit, Klarheit und Ergebnisse.',
    cta: {
      primary: 'Meine Projekte',
      secondary: 'Kontakt aufnehmen',
    },
    stats: [
      { value: '5',   suffix: '+', label: 'Jahre Erfahrung' },
      { value: '30',  suffix: '+', label: 'Abgeschlossene Projekte' },
      { value: '100', suffix: '%', label: 'Zufriedene Kunden' },
    ],
    scroll: 'Scroll',
  },
  about: {
    label: 'Über mich',
    title: 'Hallo, ich bin Galina',
    bio1: 'Ich bin <strong>Galina Baleva</strong> — Full-Stack-Entwicklerin, KI-Integratorin und SEO-Spezialistin mit Sitz in Wien. Meine Leidenschaft ist es, intelligente digitale Produkte zu bauen, die nicht nur technisch einwandfrei sind, sondern auch echten Mehrwert liefern.',
    bio2: 'Mit über <strong>5 Jahren Erfahrung</strong> verbinde ich moderne Webtechnologien mit KI-gestützten Lösungen und datengetriebenen SEO-Strategien. Ich glaube, dass gute Software Technologie und Menschlichkeit vereint.',
    chips: [
      { icon: '📍', text: 'Wien, Österreich' },
      { icon: '💼', text: 'Offen für Projekte' },
      { icon: '🌍', text: 'BG · DE · RU · EN' },
      { icon: '🤖', text: 'KI-Manager' },
    ],
    cta1: 'Zusammenarbeiten',
    cta2: 'Projekte ansehen',
  },
  skills: {
    label: 'Fähigkeiten',
    title: 'Was ich mitbringe',
    sub: 'Von Frontend bis Backend, von Suchmaschinenoptimierung bis KI-Integration — ein breites Spektrum für Ihr digitales Vorhaben.',
    items: [
      { icon: '🖥️', iconBg: 'rgba(0,229,255,.1)',   name: 'Frontend-Entwicklung',  desc: 'Moderne, responsive Interfaces mit React und TypeScript — State Management, API-Integration, Testing, Performance und Barrierefreiheit.', level: 92, tags: ['React','TypeScript','JavaScript ES6+','Next.js','HTML5 / CSS3','Tailwind CSS','Redux','REST API','Jest','Responsive Design','Accessibility'] },
      { icon: '⚙️', iconBg: 'rgba(124,77,255,.1)',  name: 'Backend-Entwicklung',   desc: 'Zuverlässige REST-APIs, serverseitige Logik und vollständiges Backend für MERN- und Next.js-Anwendungen: Node.js, Express, MongoDB, Authentifizierung, WebSockets und Server Actions.', level: 88, tags: ['Node.js','Express.js','MongoDB','Mongoose','REST API','Next.js API Routes','TypeScript','JWT','WebSockets','Server Actions','MVC','Middleware'] },
      { icon: '📈', iconBg: 'rgba(255,107,107,.1)', name: 'SEO/GEO-Optimierung',        desc: 'Vollständiges SEO-Audit und Strategie: technisches SEO, Core Web Vitals, strukturierte Daten, Keyword-Analyse, On-Page-Optimierung, Content-Strategie und lokales SEO mit Geo-Targeting — für nachhaltiges organisches Wachstum.', level: 92, tags: ['Technical SEO','Core Web Vitals','Schema.org','GA4','Google Search Console','Keyword Research','On-Page SEO','Content Strategy','Local SEO','Google My Business','Geo-targeting','Local Citations'] },
      { icon: '🧠', iconBg: 'rgba(124,77,255,.1)',  name: 'KI-Geschäftsstrategie', desc: 'Entwicklung von Geschäftsstrategien mit KI-Tools — Analyse, Planung und Prozessautomatisierung.', level: 88, tags: ['ChatGPT','AI Automation','Roadmapping','Consulting'] },
    ],
  },
  projects: {
    label: 'Projekte',
    title: 'Ausgewählte Arbeiten',
    sub: 'Eine Auswahl aus meinen letzten Projekten — von E-Commerce bis KI-gestützten Plattformen.',
    items: [
      { title: 'E-Commerce-Plattform',          desc: 'Vollständige Online-Shop-Lösung mit Zahlungsintegration, Produktverwaltung und technischem SEO. Core Web Vitals Score: 98/100.', live: '#', code: '#' },
      { title: 'KI-gestützter Kundenservice',   desc: 'Intelligentes Chatbot-System mit RAG-Architektur für ein mittelständisches Unternehmen. Reduzierte Support-Anfragen um 60 %.', live: '#', code: '#' },
      { title: 'Corporate SEO-Relaunch',        desc: 'Kompletter Website-Relaunch mit SEO-Fokus. Organischer Traffic nach 3 Monaten um 240 % gesteigert.', live: '#', code: '#' },
    ],
  },
}
