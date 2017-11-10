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

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _univ_list2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;

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

  return next();
});

app.get('/getFakultasList', function (req, res, next) {
  res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      fakultasList: _fakultas_list2.default
    }
  });
});

app.get('/getFakultas/:idUniv/:idFakultas', function (req, res, next) {
  var idUniv = req.params.idUniv;
  var idFakultas = req.params.idFakultas;

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _fakultas_list2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var e = _step2.value;

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

  return next();
});

app.get('/getProdiList', function (req, res, next) {
  res.status(200).json({
    status: 200,
    msg: 'success',
    result: {
      prodiList: _prodi_list2.default
    }
  });
});

app.get('/getProdi/:idUniv/:idFakultas/:idProdi', function (req, res, next) {
  var idUniv = req.params.idUniv;
  var idFakultas = req.params.idFakultas;
  var idProdi = req.params.idProdi;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _prodi_list2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var e = _step3.value;

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

  return next();
});

app.use(function (req, res, next) {
  res.status(404).json({
    status: 404,
    msg: '404 URL Tidak Ditemukan'
  });
});

app.listen(3000, function () {
  console.log('server started on port 3000');
});