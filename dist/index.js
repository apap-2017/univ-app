'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _univ_list = require('./database/univ_list.json');

var _univ_list2 = _interopRequireDefault(_univ_list);

var _fakultas_list = require('./database/fakultas_list.json');

var _fakultas_list2 = _interopRequireDefault(_fakultas_list);

var _prodi_list = require('./database/prodi_list.json');

var _prodi_list2 = _interopRequireDefault(_prodi_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var isExist = function isExist(id, list) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;

      if (e[Object.keys(e)[0]] == id) return e;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
};

/* ------- */

app.get('/getUniversitasList', function (req, res, next) {
  res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      univList: _univ_list2.default
    }
  });
});

app.get('/getUniversitas/:idUniv', function (req, res, next) {
  var idUniv = req.params.idUniv;

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _univ_list2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var e = _step2.value;

      if (e.id_univ == idUniv) {
        return res.status(200).json({
          status: 200,
          msg: 'success',
          result: {
            universitas: e
          }
        });
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return res.status(200).json({
    status: 404,
    msg: 'Universitas tidak ditemukan'
  });
});

/* ------- */

app.get('/getFakultasList/:idUniv', function (req, res, next) {
  var idUniv = req.params.idUniv;
  var fakultasInUnivList = [];

  if (!isExist(idUniv, _univ_list2.default)) {
    return res.status(200).json({
      status: 404,
      msg: 'Universitas tidak ditemukan'
    });
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _fakultas_list2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var e = _step3.value;

      if (e.id_univ == idUniv) {
        fakultasInUnivList.push(e);
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      idUniv: idUniv,
      fakultasList: fakultasInUnivList
    }
  });
});

app.get('/getFakultas/:idUniv/:idFakultas', function (req, res, next) {
  var idUniv = req.params.idUniv;
  var idFakultas = req.params.idFakultas;

  if (!isExist(idUniv, _univ_list2.default)) {
    return res.status(200).json({
      status: 404,
      msg: 'Universitas tidak ditemukan'
    });
  }

  if (!isExist(idFakultas, _fakultas_list2.default)) {
    return res.status(200).json({
      status: 404,
      msg: 'Fakultas tidak ditemukan'
    });
  }

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = _fakultas_list2.default[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var e = _step4.value;

      if (e.id_univ == idUniv && e.id_fakultas == idFakultas) {
        return res.status(200).json({
          status: 200,
          msg: 'success',
          result: {
            fakultas: e
          }
        });
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
});

/* ------- */

app.get('/getProdiList/:idUniv/:idFakultas', function (req, res, next) {
  var idUniv = req.params.idUniv;
  var idFakultas = req.params.idFakultas;
  var prodiInUnivFakultasList = [];

  if (!isExist(idUniv, _univ_list2.default)) {
    return res.status(200).json({
      status: 404,
      msg: 'Universitas tidak ditemukan'
    });
  }

  if (!isExist(idFakultas, _fakultas_list2.default)) {
    return res.status(200).json({
      status: 404,
      msg: 'Fakultas tidak ditemukan'
    });
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = _prodi_list2.default[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var e = _step5.value;

      if (e.id_univ == idUniv && e.id_fakultas == idFakultas) {
        prodiInUnivFakultasList.push(e);
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      idUniv: idUniv,
      idFakultas: idFakultas,
      prodiList: prodiInUnivFakultasList
    }
  });
});

app.get('/getProdi/:idUniv/:idFakultas/:idProdi', function (req, res, next) {
  var idUniv = req.params.idUniv;
  var idFakultas = req.params.idFakultas;
  var idProdi = req.params.idProdi;

  if (!isExist(idUniv, _univ_list2.default)) {
    return res.status(200).json({
      status: 404,
      msg: 'Universitas tidak ditemukan'
    });
  }

  if (!isExist(idFakultas, _fakultas_list2.default)) {
    return res.status(200).json({
      status: 404,
      msg: 'Fakultas tidak ditemukan'
    });
  }

  if (!isExist(idProdi, _prodi_list2.default)) {
    return res.status(200).json({
      status: 404,
      msg: 'Prodi tidak ditemukan'
    });
  }

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = _prodi_list2.default[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var e = _step6.value;

      if (e.id_univ == idUniv && e.id_fakultas == idFakultas && e.id_prodi == idProdi) {
        return res.status(200).json({
          status: 200,
          msg: 'success',
          result: {
            prodi: e
          }
        });
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
});

/* ------- */

app.use(function (req, res, next) {
  res.status(404).json({
    status: 404,
    msg: '404 URL Tidak Ditemukan'
  });
});

app.listen(process.env.PORT || 5000, function () {
  console.log('server started');
});