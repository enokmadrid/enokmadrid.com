import { defineEventHandler } from 'h3'
import { readdir, readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const contentDir = join(process.cwd(), 'content', 'iconCards')
  const files = await readdir(contentDir)
  const iconCards = await Promise.all(
    files
      .filter(file => file.endsWith('.json'))
      .map(async file => {
        const content = await readFile(join(contentDir, file), 'utf-8')
        return JSON.parse(content)
      })
  )

  return iconCards
    .sort((a, b) => (a.id || 0) - (b.id || 0))
    .slice(0, 3)
}) 