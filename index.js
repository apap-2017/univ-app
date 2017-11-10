import express from 'express'
import univList from './database/univ_list.json'
import fakultasList from './database/fakultas_list.json'
import prodiList from './database/prodi_list.json'

const app = express()

const isExist = (id, list) => {
  for (let e of list) {    
    if (e[Object.keys(e)[0]] == id) 
      return e
  }

  return false
}

/* ------- */

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

  return res.status(200).json({
    status: 404,
    msg: 'Universitas tidak ditemukan',
  })
})

/* ------- */

app.get('/getFakultasList/:idUniv', (req, res, next) => {
  const idUniv = req.params.idUniv
  let fakultasInUnivList = []

  if (!isExist(idUniv, univList)) {
    return res.status(200).json({
      status: 404,
      msg: 'Universitas tidak ditemukan',
    })
  }

  for(let e of fakultasList) {
    if (e.id_univ == idUniv) {
      fakultasInUnivList.push(e)
    }
  }

  res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      idUniv,
      fakultasList: fakultasInUnivList
    }
  })
})

app.get('/getFakultas/:idUniv/:idFakultas', (req, res, next) => {
  const idUniv = req.params.idUniv
  const idFakultas = req.params.idFakultas

  if (!isExist(idUniv, univList)) {
    return res.status(200).json({
      status: 404,
      msg: 'Universitas tidak ditemukan',
    })
  }

  if (!isExist(idFakultas, fakultasList)) {
    return res.status(200).json({
      status: 404,
      msg: 'Fakultas tidak ditemukan',
    })
  }

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
})

/* ------- */

app.get('/getProdiList/:idUniv/:idFakultas', (req, res, next) => {
  const idUniv = req.params.idUniv
  const idFakultas = req.params.idFakultas
  let prodiInUnivFakultasList = []
  
  if (!isExist(idUniv, univList)) {
    return res.status(200).json({
      status: 404,
      msg: 'Universitas tidak ditemukan',
    })
  }

  if (!isExist(idFakultas, fakultasList)) {
    return res.status(200).json({
      status: 404,
      msg: 'Fakultas tidak ditemukan',
    })
  }

  for (let e of prodiList) {
    if (e.id_univ == idUniv && e.id_fakultas == idFakultas) {
      prodiInUnivFakultasList.push(e)
    }    
  }

  return res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      idUniv,
      idFakultas,
      prodiList: prodiInUnivFakultasList
    }
  })
})

app.get('/getProdi/:idUniv/:idFakultas/:idProdi', (req, res, next) => {
  const idUniv = req.params.idUniv
  const idFakultas = req.params.idFakultas
  const idProdi = req.params.idProdi

  if (!isExist(idUniv, univList)) {
    return res.status(200).json({
      status: 404,
      msg: 'Universitas tidak ditemukan',
    })
  }

  if (!isExist(idFakultas, fakultasList)) {
    return res.status(200).json({
      status: 404,
      msg: 'Fakultas tidak ditemukan',
    })
  }

  if (!isExist(idProdi, prodiList)) {
    return res.status(200).json({
      status: 404,
      msg: 'Prodi tidak ditemukan',
    })
  }

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
})

/* ------- */

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    msg: '404 URL Tidak Ditemukan'
  })
})

app.listen(process.env.PORT || 5000, () => {
  console.log('server started')
})