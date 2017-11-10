import express from 'express'

const app = express()

app.get('/getUniversitasList', (req, res, next) => {

})

app.get('/getUniversitas', (req, res, next) => {

})

app.get('/getFakultasList', (req, res, next) => {

})

app.get('/getFakultas', (req, res, next) => {
  
})

app.get('/getProdiList', (req, res, next) => {

})

app.get('/getProdi', (req, res, next) => {
  
})

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    msg: '404 URL Tidak Ditemukan'
  })
})

app.listen(3000, () => {
  console.log('server started on port 3000')
})