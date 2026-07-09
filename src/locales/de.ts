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
      { icon: '🖥️', iconBg: 'rgba(0,229,255,.1)',   name: 'Frontend-Entwicklung',  desc: 'Moderne, responsive UIs mit React, TypeScript und CSS-Animationen.',                        level: 92, tags: ['React','TypeScript','Next.js','CSS'] },
      { icon: '⚙️', iconBg: 'rgba(124,77,255,.1)',  name: 'Backend-Entwicklung',   desc: 'Skalierbare REST-APIs und serverseitige Logik mit Node.js und Python.',                      level: 88, tags: ['Node.js','Python','PostgreSQL','REST'] },
      { icon: '🤖', iconBg: 'rgba(0,229,255,.1)',   name: 'KI-Integration',         desc: 'Einbindung von LLM-APIs, Chatbots, Automatisierungen und KI-gestützten Features.',          level: 85, tags: ['OpenAI','LangChain','RAG','Agents'] },
      { icon: '📈', iconBg: 'rgba(255,107,107,.1)', name: 'SEO-Optimierung',        desc: 'Technisches SEO, Core Web Vitals, strukturierte Daten und Content-Strategie.',              level: 90, tags: ['Core Web Vitals','Schema.org','Analytics'] },
      { icon: '☁️', iconBg: 'rgba(124,77,255,.1)',  name: 'DevOps & Cloud',         desc: 'CI/CD-Pipelines, Docker-Containerisierung und Cloud-Deployments.',                          level: 78, tags: ['Docker','GitHub Actions','Vercel'] },
      { icon: '🎨', iconBg: 'rgba(0,229,255,.1)',   name: 'UI/UX-Design',           desc: 'Wireframing, Prototyping und Design-Systeme für konsistente Nutzererfahrungen.',            level: 80, tags: ['Figma','Design Systems','Accessibility'] },
    ],
  },
}
