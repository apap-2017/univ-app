import express from 'express'
import univList from './database/univ_list.json'
import fakultasList from './database/fakultas_list.json'
import prodiList from './database/prodi_list.json'

const app = express()

app.get('/getUniversitasList', (req, res, next) => {
  res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      univList
    }
  })
})

app.get('/getUniversitas/:idUniv', (req, res, next) => {
  const idUniv = req.params.idUniv
  
  for (let e of univList) {
    if (e.id_univ == idUniv) {
      return res.status(200).json({
        status: 200,
        msg: 'success',
        result: {
          universitas: e
        }
      })
    }    
  }

  return next()
})

app.get('/getFakultasList', (req, res, next) => {
  res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      fakultasList
    }
  })
})

app.get('/getFakultas/:idUniv/:idFakultas', (req, res, next) => {
  const idUniv = req.params.idUniv
  const idFakultas = req.params.idFakultas

  for (let e of fakultasList) {
    if (e.id_univ == idUniv && e.id_fakultas == idFakultas) {
      return res.status(200).json({
        status: 200,
        msg: 'success',
        result: {
          fakultas: e
        }
      })
    }    
  }

  return next()
})

app.get('/getProdiList', (req, res, next) => {
  res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      prodiList
    }
  })
})

app.get('/getProdi/:idUniv/:idFakultas/:idProdi', (req, res, next) => {
  const idUniv = req.params.idUniv
  const idFakultas = req.params.idFakultas
  const idProdi = req.params.idProdi

  for (let e of prodiList) {
    if (e.id_univ == idUniv && e.id_fakultas == idFakultas && e.id_prodi == idProdi) {
      return res.status(200).json({
        status: 200,
        msg: 'success',
        result: {
          prodi: e
        }
      })
    }    
  }

  return next()
})

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    msg: '404 URL Tidak Ditemukan'
  })
})

app.listen(process.env.PORT || 5000, () => {
  console.log('server started on port 3000')
})