import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const version = readFileSync(
  join(fileURLToPath(import.meta.url), '..', '..', 'VERSION')
).toString()

console.log(version)

writeFileSync(
  join(fileURLToPath(import.meta.url), '..', 'src', 'common', 'version.ts'),
  `const version: string = '${version}'
export default version`
)
