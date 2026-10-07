import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { siteMetaPlugin } from './vite-plugins/site-meta'

const root = path.dirname(fileURLToPath(import.meta.url))

const siteId = (process.env.SITE ?? 'callmemo') as 'callmemo' | 'callmessage'

/** GitHub Pages: this repo → nested path under callmemo-distribution */
const CALLMESSAGE_PAGES_BASE_PROD =
  process.env.CALLMESSAGE_PAGES_BASE ?? '/callmemo-distribution/callmessage-distribution/'

function resolveSiteBase(site: 'callmemo' | 'callmessage', mode: string): string {
  if (site === 'callmemo') return '/callmemo-distribution/'
  return mode === 'development' ? '/callmessage-distribution/' : CALLMESSAGE_PAGES_BASE_PROD
}

function devSiteHintPlugin(activeSite: 'callmemo' | 'callmessage'): Plugin {
  return {
    name: 'dev-site-hint',
    apply: 'serve',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        const port = server.config.server.port ?? 5173
        const base = resolveSiteBase(activeSite, 'development').replace(/\/$/, '')
        console.log(`\n  ➜  Active site (${activeSite}): http://localhost:${port}${base}/`)
        if (activeSite === 'callmemo') {
          console.log(
            '  ➜  콜 메시지 미리보기: pnpm dev:callmessage → http://localhost:' +
              `${port}/callmessage-distribution/\n`,
          )
        }
      })

      server.middlewares.use((req, res, next) => {
        const pathname = (req.url ?? '').split('?')[0]

        if (pathname.includes('callmesssage')) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(
            `<!DOCTYPE html><html lang="ko"><body style="font-family:system-ui;padding:2rem">` +
              `<h1>경로 오타</h1><p><code>callmesssage</code> → <code>callmessage</code> (s 두 개)</p>` +
              `<p><a href="/callmessage-distribution/">/callmessage-distribution/</a> — ` +
              `먼저 <code>pnpm dev:callmessage</code> 실행</p></body></html>`,
          )
          return
        }

        if (
          pathname.startsWith('/callmessage-distribution') &&
          activeSite !== 'callmessage'
        ) {
          res.statusCode = 503
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(
            `<!DOCTYPE html><html lang="ko"><body style="font-family:system-ui;padding:2rem">` +
              `<h1>콜 메시지 dev 서버가 아닙니다</h1>` +
              `<p>지금은 <code>pnpm dev</code>(콜메모)만 실행 중입니다.</p>` +
              `<p>터미널에서 <code>pnpm dev:callmessage</code> 실행 후 ` +
              `<a href="/callmessage-distribution/">/callmessage-distribution/</a> 로 접속하세요.</p>` +
              `<p>콜메모: <a href="/callmemo-distribution/">/callmemo-distribution/</a></p></body></html>`,
          )
          return
        }

        next()
      })
    },
  }
}

const htmlEntry: Record<'callmemo' | 'callmessage', string> = {
  callmemo: path.resolve(root, 'index.html'),
  callmessage: path.resolve(root, 'callmessage/index.html'),
}

export default defineConfig(({ mode }) => {
  const base = resolveSiteBase(siteId, mode)

  return {
    plugins: [siteMetaPlugin(root, siteId), devSiteHintPlugin(siteId), react(), tailwindcss()],
    base,
    build: {
      outDir: siteId === 'callmessage' ? 'dist/callmessage-distribution' : 'dist',
      emptyOutDir: siteId === 'callmemo',
      rollupOptions: {
        input: {
          main: htmlEntry[siteId],
        },
      },
    },
  }
})
