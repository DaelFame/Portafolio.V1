/**
 * i18n Helper Library
 * Manages multi-language content for Joaquin's Financial BI Portfolio
 * 
 * TODO: Implement full i18n on next phase
 * Current structure prepares for ES/EN translation
 */

type Language = 'es' | 'en'

interface I18nStrings {
  hero: {
    name: string
    title: string
    badge: string
    tagline: string
    cta: string
    description: string
  }
  about: {
    title: string
    intro: string
    p1: string
    p2: string
    p3: string
    p4: string
  }
  skills: {
    title: string
    dataEngineering: string
    financialAnalysis: string
    biVisualization: string
    devStack: string
  }
  experience: {
    title: string
    kpmg: {
      date: string
      title: string
      company: string
      description: string
    }
    toroLoco: {
      date: string
      title: string
      company: string
      description: string
    }
  }
  projects: {
    title: string
    toroLocoRevenue: {
      title: string
      description: string
    }
  }
  contact: {
    email: string
    cta: string
    linkedin: string
    github: string
  }
}

// Language strings - Defined as objects to avoid JSON import issues
const STRINGS_ES: I18nStrings = {
  hero: {
    name: "Joaquin S. Cárdenas",
    title: "Financial BI & Data Strategist",
    badge: "ex-KPMG #1 Training | SSN Holder",
    tagline: "Convirtiendo datos en decisiones | ex-KPMG | +55% ROI",
    cta: "Contáctame",
    description: "Former KPMG analyst (#1 Training Excellence), especializado en convertir datos en inteligencia de negocios medible. Mi enfoque es datificar procesos financieros complejos mediante ETL automation, Python, SQL y dashboards interactivos. Experiencia comprobada: +55% revenue growth en Toro Loco Bar & Grill mediante optimización de operaciones y BI strategy. Stack: Python (Pandas/Polars/uv) • SQL (PostgreSQL) • Power BI • Linux (Fedora)"
  },
  about: {
    title: "Sobre mí",
    intro: "Hola, soy Joaquín Cárdenas (Joaco) 👋",
    p1: "Mi carrera única combina Ingeniería Industrial + Contabilidad + Technology, permitiéndome entender tanto la visión estratégica como la ejecución operacional de los negocios.",
    p2: "Soy ex-KPMG analyst (#1 ranking en training) con expertise en convertir datos complejos en inteligencia de negocios accionable. Mi especialidad es \"datificar\" procesos financieros: automatizar pipelines ETL, crear dashboards en tiempo real y optimizar toma de decisiones mediante BI strategy.",
    p3: "Mi track record: +55% revenue growth en operaciones (Toro Loco), dominio de Python, SQL, Power BI, y experiencia internacional (SSN Holder, USA). Entiendo que números no son solo reportes: son historias de decisión.",
    p4: "Mi objetivo es trabajar en empresas que valoren la precisión, automatización y ROI medible. Si buscas alguien que datifique tus procesos y convierta información en ventaja competitiva, conversemos."
  },
  skills: {
    title: "Habilidades",
    dataEngineering: "Data Engineering",
    financialAnalysis: "Financial Analysis",
    biVisualization: "BI & Visualization",
    devStack: "Developer Stack"
  },
  experience: {
    title: "Experiencia laboral",
    kpmg: {
      date: "2024 - Presente",
      title: "Financial BI Specialist | KPMG Training Excellence Program",
      company: "KPMG - Ranking #1",
      description: "Primer lugar en programa intensivo de training. Desarrollo de dashboards financieros complejos, automatización de ETL pipelines con Python (Pandas/Polars), modeling en Power BI, y reporting avanzado en SQL (PostgreSQL). Enfoque en business intelligence estratégica y optimización de decisiones financieras."
    },
    toroLoco: {
      date: "Febrero 2020 - Junio 2022",
      title: "Revenue Operations Engineer",
      company: "Toro Loco Bar & Grill - Honolulu, HI (USA)",
      description: "Lideré automatización de procesos operacionales y análisis de datos de ventas. Implementé dashboards interactivos que resultaron en +55% incremento de revenue mediante optimización de pricing, forecasting y gestión de inventario. Desarrollé competencias en liderazgo, financial analysis y BI strategy en entorno internacional (SSN Holder)."
    }
  },
  projects: {
    title: "Proyectos",
    toroLocoRevenue: {
      title: "Revenue Engineering Dashboard - Toro Loco",
      description: "ETL pipeline (Python + PostgreSQL) con dashboards Power BI. Optimización de pricing, inventory forecasting. Impacto: +55% revenue growth."
    }
  },
  contact: {
    email: "joaquin.data.dev@gmail.com",
    cta: "Contáctame",
    linkedin: "LinkedIn",
    github: "GitHub"
  }
}

const STRINGS_EN: I18nStrings = {
  hero: {
    name: "Joaquin S. Cárdenas",
    title: "Financial BI & Data Strategist",
    badge: "ex-KPMG #1 Training | SSN Holder",
    tagline: "Turning data into decisions | ex-KPMG | +55% ROI",
    cta: "Contact me",
    description: "Former KPMG analyst (#1 Training Excellence), specialized in converting data into measurable business intelligence. My approach is to datify complex financial processes through ETL automation, Python, SQL, and interactive dashboards. Proven experience: +55% revenue growth at Toro Loco Bar & Grill through operations optimization and BI strategy. Stack: Python (Pandas/Polars/uv) • SQL (PostgreSQL) • Power BI • Linux (Fedora)"
  },
  about: {
    title: "About me",
    intro: "Hi, I'm Joaquín Cárdenas (Joaco) 👋",
    p1: "My unique background combines Industrial Engineering + Accounting + Technology, allowing me to understand both the strategic vision and operational execution of businesses.",
    p2: "I'm an ex-KPMG analyst (#1 training ranking) with expertise in converting complex data into actionable business intelligence. My specialty is \"datifying\" financial processes: automating ETL pipelines, creating real-time dashboards, and optimizing decision-making through BI strategy.",
    p3: "My track record: +55% revenue growth in operations (Toro Loco), mastery of Python, SQL, Power BI, and international experience (SSN Holder, USA). I understand that numbers are not just reports: they are decision stories.",
    p4: "My goal is to work in companies that value precision, automation, and measurable ROI. If you're looking for someone to datify your processes and turn information into competitive advantage, let's talk."
  },
  skills: {
    title: "Skills",
    dataEngineering: "Data Engineering",
    financialAnalysis: "Financial Analysis",
    biVisualization: "BI & Visualization",
    devStack: "Developer Stack"
  },
  experience: {
    title: "Work Experience",
    kpmg: {
      date: "2024 - Present",
      title: "Financial BI Specialist | KPMG Training Excellence Program",
      company: "KPMG - Ranking #1",
      description: "First place in intensive training program. Development of complex financial dashboards, ETL pipeline automation with Python (Pandas/Polars), Power BI modeling, and advanced SQL (PostgreSQL) reporting. Focus on strategic business intelligence and financial decision optimization."
    },
    toroLoco: {
      date: "February 2020 - June 2022",
      title: "Revenue Operations Engineer",
      company: "Toro Loco Bar & Grill - Honolulu, HI (USA)",
      description: "Led operational process automation and sales data analysis. Implemented interactive dashboards resulting in +55% revenue growth through pricing optimization, forecasting, and inventory management. Developed skills in leadership, financial analysis, and BI strategy in international environment (SSN Holder)."
    }
  },
  projects: {
    title: "Projects",
    toroLocoRevenue: {
      title: "Revenue Engineering Dashboard - Toro Loco",
      description: "ETL pipeline (Python + PostgreSQL) with Power BI dashboards. Pricing optimization, inventory forecasting. Impact: +55% revenue growth."
    }
  },
  contact: {
    email: "joaquin.data.dev@gmail.com",
    cta: "Contact me",
    linkedin: "LinkedIn",
    github: "GitHub"
  }
}

const languages: Record<Language, I18nStrings> = {
  es: STRINGS_ES,
  en: STRINGS_EN,
}

/**
 * Get strings for a specific language
 * @param lang Language code ('es' or 'en')
 * @returns I18n strings object
 */
export function getStrings(lang: Language = 'es'): I18nStrings {
  return languages[lang] || languages.es
}

/**
 * Get a specific nested string by path
 * @param lang Language code
 * @param path Dot-notation path (e.g., 'hero.name' or 'experience.kpmg.title')
 * @returns String value or empty string if not found
 */
export function getString(lang: Language, path: string): string {
  const keys = path.split('.')
  let value: any = languages[lang]

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      return ''
    }
  }

  return typeof value === 'string' ? value : ''
}

/**
 * Available languages
 */
export const AVAILABLE_LANGUAGES: Language[] = ['es', 'en']

/**
 * Default language
 */
export const DEFAULT_LANGUAGE: Language = 'es'
