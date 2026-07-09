export const ru = {
  nav: {
    links: [
      { href: '#about',    label: 'Обо мне' },
      { href: '#skills',   label: 'Навыки' },
      { href: '#projects', label: 'Проекты' },
      { href: '#contact',  label: 'Контакт' },
    ],
  },
  hero: {
    badge: 'Открыта для новых проектов',
    name: 'Галина Балева',
    role: 'Full-Stack разработчик & ИИ-интегратор & SEO-специалист',
    description:
      'Создаю масштабируемые веб-приложения, интегрирую ИИ-решения и оптимизирую для поисковых систем — с фокусом на скорость, чистоту и результат.',
    cta: {
      primary: 'Мои проекты',
      secondary: 'Связаться со мной',
    },
    stats: [
      { value: '5',   suffix: '+', label: 'Лет опыта' },
      { value: '30',  suffix: '+', label: 'Завершённых проектов' },
      { value: '100', suffix: '%', label: 'Довольных клиентов' },
    ],
    scroll: 'Scroll',
  },
  about: {
    label: 'Обо мне',
    title: 'Привет, я Галина',
    bio1: 'Я <strong>Галина Балева</strong> — Full-Stack разработчик, ИИ-интегратор и SEO-специалист, работаю из Вены. Моя страсть — создавать интеллектуальные цифровые продукты, которые не только технически безупречны, но и приносят реальную ценность.',
    bio2: 'С более чем <strong>5-летним опытом</strong> я объединяю современные веб-технологии с ИИ-решениями и SEO-стратегиями на основе данных. Я верю, что хорошее ПО объединяет технологии и человечность.',
    chips: [
      { icon: '📍', text: 'Вена, Австрия' },
      { icon: '💼', text: 'Открыта для проектов' },
      { icon: '🌍', text: 'BG · DE · RU · EN' },
      { icon: '🤖', text: 'ИИ-менеджер' },
    ],
    cta1: 'Давайте сотрудничать',
    cta2: 'Смотреть проекты',
  },
  skills: {
    label: 'Навыки',
    title: 'Что я предлагаю',
    sub: 'От фронтенда до бэкенда, от SEO до интеграции ИИ — широкий спектр для вашего цифрового проекта.',
    items: [
      { icon: '🖥️', iconBg: 'rgba(0,229,255,.1)',   name: 'Frontend-разработка',   desc: 'Современные, адаптивные интерфейсы с React, TypeScript и CSS-анимациями.',              level: 92, tags: ['React','TypeScript','Next.js','CSS'] },
      { icon: '⚙️', iconBg: 'rgba(124,77,255,.1)',  name: 'Backend-разработка',    desc: 'Масштабируемые REST API и серверная логика на Node.js и Python.',                        level: 88, tags: ['Node.js','Python','PostgreSQL','REST'] },
      { icon: '🤖', iconBg: 'rgba(0,229,255,.1)',   name: 'Интеграция ИИ',          desc: 'Подключение LLM API, чат-ботов, автоматизаций и ИИ-функций.',                          level: 85, tags: ['OpenAI','LangChain','RAG','Agents'] },
      { icon: '📈', iconBg: 'rgba(255,107,107,.1)', name: 'SEO-оптимизация',        desc: 'Техническое SEO, Core Web Vitals, структурированные данные и контент-стратегия.',       level: 90, tags: ['Core Web Vitals','Schema.org','Analytics'] },
      { icon: '☁️', iconBg: 'rgba(124,77,255,.1)',  name: 'DevOps & Cloud',         desc: 'CI/CD-пайплайны, контейнеризация Docker и облачные деплойменты.',                      level: 78, tags: ['Docker','GitHub Actions','Vercel'] },
      { icon: '🎨', iconBg: 'rgba(0,229,255,.1)',   name: 'UI/UX-дизайн',           desc: 'Wireframing, прототипирование и дизайн-системы для консистентного UX.',               level: 80, tags: ['Figma','Design Systems','Accessibility'] },
    ],
  },
}
