/**
 * Made by @ctwhome
 * Requirements: install js-yaml as a dev dependency.
 * Converts the language files into a standard format that usually works with i18n
 */
import fs from 'fs'
import yaml from 'js-yaml'

function parseObject (object:any) {
  const parsed:any = {}
  Object.entries(object)

  for (const word in object) {
    for (const code in object[word]) {
      (!parsed[code]) && (parsed[code] = {})
      parsed[code][word] = object[word][code]
    }
  }
  console.log('🌐 Language locale file parsed.')
  return parsed
}
let response:any = {}
try {
// Get document, or throw exception on error
  response = yaml.load(fs.readFileSync('./locale/lang.yaml', 'utf8'))
} catch (e) {
  console.log('Language file couldn\'t load', e)
}
export default parseObject(response)
