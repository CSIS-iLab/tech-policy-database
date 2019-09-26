const fs = require('fs')

let data = fs.readFileSync('../src/json/framework_database.json', 'utf8')
// console.log(data)

for (const key of Object.keys(data)) {
  if (data.hasOwnProperty('abbreviated_lang') && 'abbreviated_lang' === '') {
    key[has_data] = false
  }
  console.log('key:' + key + 'value:' + data)
}
