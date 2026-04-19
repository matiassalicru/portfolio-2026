import type { APIRoute, GetStaticPaths } from 'astro'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { getTranslations, type Locale } from '@/i18n/translations'

const require = createRequire(import.meta.url)

const interRegular = readFileSync(
  require.resolve('@fontsource/inter/files/inter-latin-400-normal.woff'),
)
const interBold = readFileSync(
  require.resolve('@fontsource/inter/files/inter-latin-700-normal.woff'),
)

export const getStaticPaths: GetStaticPaths = () => [
  { params: { locale: 'en' } },
  { params: { locale: 'es' } },
]

export const GET: APIRoute = async ({ params }) => {
  const locale = params.locale as Locale
  const translations = getTranslations(locale)
  const fullName = 'Matias Salicru'
  const siteUrl = 'matiassalicru.pages.dev'

  const taglineWords = translations.hero.tagline.split(' ')
  const taglineLead = taglineWords.slice(0, -1).join(' ')
  const taglineAccent = taglineWords.slice(-1).join('')

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#09090b',
          color: '#fafafa',
          padding: '72px',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: 26,
                      color: '#a1a1aa',
                      fontWeight: 500,
                    },
                    children: fullName,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: 16,
                      color: '#fafafa',
                      padding: '6px 16px',
                      borderRadius: 9999,
                      border: '1px solid #27272a',
                      backgroundColor: '#18181b',
                      letterSpacing: 2,
                    },
                    children: locale.toUpperCase(),
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexWrap: 'wrap',
                      fontSize: 92,
                      fontWeight: 700,
                      lineHeight: 1.05,
                      letterSpacing: '-0.03em',
                    },
                    children: [
                      {
                        type: 'span',
                        props: {
                          style: { marginRight: 20 },
                          children: taglineLead,
                        },
                      },
                      {
                        type: 'span',
                        props: {
                          style: { color: '#a855f7' },
                          children: taglineAccent,
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: 30,
                      color: '#a1a1aa',
                      maxWidth: 960,
                      lineHeight: 1.4,
                    },
                    children: translations.hero.subtagline,
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: 22,
                color: '#a1a1aa',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      width: 10,
                      height: 10,
                      borderRadius: 9999,
                      backgroundColor: '#a855f7',
                    },
                  },
                },
                {
                  type: 'span',
                  props: { children: siteUrl },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
      ],
    },
  )

  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  })
    .render()
    .asPng()

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
