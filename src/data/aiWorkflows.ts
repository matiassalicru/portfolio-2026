export interface AIWorkflow {
  tool: string
  type: string
  usedFor: string[]
}

export const aiWorkflows: AIWorkflow[] = [
  {
    tool: 'Claude Code',
    type: 'Coding Agent',
    usedFor: [
      'Code generation',
      'Architecture decisions',
      'E2E test authoring',
      'PR summaries',
      'Documentation',
    ],
  },
  {
    tool: 'Cursor',
    type: 'Coding Agent',
    usedFor: ['Inline code completion', 'Refactoring', 'Context-aware editing'],
  },
  {
    tool: 'OpenCode',
    type: 'Coding Agent',
    usedFor: ['Terminal-based AI assistance', 'Quick code generation'],
  },
]

