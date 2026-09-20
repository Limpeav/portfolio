import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [
    react(),
    {
      name: 'serve-cv-attachment',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/Hour_Limpeav_CV.pdf' || req.url?.startsWith('/Hour_Limpeav_CV.pdf?')) {
            const filePath = path.resolve(__dirname, 'public/Hour_Limpeav_CV.pdf');
            if (fs.existsSync(filePath)) {
              const fileStat = fs.statSync(filePath);
              res.setHeader('Content-Type', 'application/pdf');
              res.setHeader('Content-Length', fileStat.size);
              res.setHeader('Content-Disposition', 'attachment; filename="Hour_Limpeav_CV.pdf"');
              const stream = fs.createReadStream(filePath);
              return stream.pipe(res);
            }
          }
          next();
        });
      }
    }
  ],
})
