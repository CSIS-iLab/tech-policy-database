const fs = require('fs')

fs.readFile('../src/json/framework_database.json', 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  let jsonData = JSON.parse(data)
  for (const key in jsonData) {
    for (const catKey in jsonData[key]['categories']) {
      if (jsonData[key]['categories'][catKey]['abbreviated_lang'] === '') {
        jsonData[key]['categories'][catKey]['has_data'] = false
      }
    }
  }

  fs.writeFile(
    '../src/json/framework_database.json',
    JSON.stringify(jsonData),
    function(err) {
      if (err) {
        return console.log(err)
      }
    }
  )
})
