export type SkillCategory = 'frontend' | 'testing' | 'tools' | 'ui-libs' | 'apis' | 'ai'

export interface Skill {
  name: string
  category: SkillCategory
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript (ES2022+)', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Node.js', category: 'frontend' },
  // Testing
  { name: 'Cypress (E2E)', category: 'testing' },
  { name: 'Jest', category: 'testing' },
  // Tools
  { name: 'GitHub Actions', category: 'tools' },
  { name: 'Datadog', category: 'tools' },
  { name: 'Storybook', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Vite', category: 'tools' },
  { name: 'Git', category: 'tools' },
  // UI Libraries
  { name: 'MUI', category: 'ui-libs' },
  { name: 'Shadcn/UI', category: 'ui-libs' },
  // APIs
  { name: 'REST', category: 'apis' },
  { name: 'GraphQL', category: 'apis' },
  // AI
  { name: 'Claude Code', category: 'ai' },
  { name: 'Cursor', category: 'ai' },
  { name: 'OpenCode', category: 'ai' },
  { name: 'MCP Servers', category: 'ai' },
]
