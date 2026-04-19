export interface Project {
  name: string
  descriptionKey: string
  repo: string
  tags: string[]
  lang: string
}

export const projects: Project[] = [
  {
    name: 'swyd',
    descriptionKey: 'projects.swyd.description',
    repo: 'https://github.com/matiassalicru/swyd',
    tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Clean Architecture', 'Maestro'],
    lang: 'TypeScript',
  },
  {
    name: 'Swift-todo-app',
    descriptionKey: 'projects.swiftTodoApp.description',
    repo: 'https://github.com/matiassalicru/Swift-todo-app',
    tags: ['Swift', 'macOS', 'Native', 'MenuBar'],
    lang: 'Swift',
  },
  {
    name: 'dashboard',
    descriptionKey: 'projects.dashboard.description',
    repo: 'https://github.com/matiassalicru/dashboard',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'MUI', 'React Query', 'Playwright'],
    lang: 'TypeScript',
  },
]
