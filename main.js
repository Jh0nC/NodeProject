const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World pedro!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


console.log("Iniciando en http://localhost:3000");