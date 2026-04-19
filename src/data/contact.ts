export interface ContactLink {
  label: string
  href: string
  icon: 'email' | 'linkedin' | 'github'
}

export const contactLinks: ContactLink[] = [
  {
    label: 'mattiassalicru@gmail.com',
    href: 'mailto:mattiassalicru@gmail.com',
    icon: 'email',
  },
  {
    label: 'linkedin.com/in/matias-salicru',
    href: 'https://linkedin.com/in/matias-salicru',
    icon: 'linkedin',
  },
  {
    label: 'github.com/matiassalicru',
    href: 'https://github.com/matiassalicru',
    icon: 'github',
  },
]
