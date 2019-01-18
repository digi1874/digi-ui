import fs from 'fs'
import path from 'path'
import jsonfile from 'jsonfile'

const NPM_DIR = 'src'
const PACKAGEFILE = 'package.json'

const packageJson = jsonfile.readFileSync(PACKAGEFILE)
const keys = ['name', 'version', 'description', 'main', 'repository', 'keywords', 'author', 'license', 'bugs', 'homepage']
const newPackageJson = {}
keys.forEach(key => newPackageJson[key] = packageJson[key])
newPackageJson.main = 'index.js'
jsonfile.writeFile(path.join(NPM_DIR, PACKAGEFILE), newPackageJson, { spaces: 2 })

// 拷贝文件
for (const fileName of ['LICENSE', 'README.md']) {
  const npmFileName = path.join(NPM_DIR, fileName)
  fs.copyFile(fileName, npmFileName, err => {
    if (err) throw err
    console.log(`${ fileName } was copied to ${ npmFileName }✔️`)
  })
}
