const fs = require('fs')

const data = fs.readFileSync('./data.json')
const jsonData = JSON.parse(data)

jsonData.forEach((object, index) => {
  if (!object.id) {
    object.id = `object_${index + 1}`
  }
})

fs.writeFileSync('./data.json', JSON.stringify(jsonData, null, 2))
