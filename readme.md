# Aplikasi Universitas


Base url: `https://apap2017-univ-apps.herokuapp.com`

API List:
* [getUniversitasList](#getuniversitaslist)
* [getUniversitas/[id_univ]](#getuniversitasid_univ)
* [getFakultasList/[id_univ]](#getfakultasListid_univ)
* [getFakultas/[id_univ]/[id_fakultas]](#getfakultasid_univid_fakultas)
* [getProdiList/[id_univ]/[id_fakultas]](#getprodiListid_univid_fakultas)
* [getProdi/[id_univ]/[id_fakultas]/[id_prodi]](#getprodiid_univid_fakultasid_prodi)

[404 Error](#404-Error)

## getUniversitasList

Mengembalikan daftar semua Universitas

**URL** : `/getUniversitasList`

**Method** : `GET`

### Success Response

**Contoh Request**: [/getUniversitasList](https://apap2017-univ-apps.herokuapp.com/getUniversitasList)

```json
{
	"status":200,
    "msg":"success",
    "result":{
    	"univList":[
        	{"id_univ":"1","nama_univ":"Universitas A"},
            {"id_univ":"2","nama_univ":"Universitas B"},
            {"id_univ":"3","nama_univ":"Universitas C"}
        ]
    }
}
```

## getUniversitas/[id_univ]

Mengembalikan object sebuah Universitas diberikan id_univ

**URL** : `/getUniversitasList/[id_univ]`

**Method** : `GET`

### Success Response
**Contoh Request**: [/getUniversitas/1](https://apap2017-univ-apps.herokuapp.com/getUniversitas/1)

```json
{
	"status":200,
    "msg":"success",
    "result":{
    	"universitas":{
        	"id_univ":"1",
            "nama_univ":"Universitas A"
        }
    }
}
```

### Error Response

**Condition** : Jika id_univ tidak valid.

**Contoh Request**: [/getUniversitas/123](https://apap2017-univ-apps.herokuapp.com/getUniversitas/123)

```json
{"status":404,"msg":"Universitas tidak ditemukan"}
```

## getFakultasList/[id_univ]

Mengembalikan daftar semua Fakultas diberikan id_univ dari sebuah Universitas

**URL** : `/getFakultasList/[id_univ]`

**Method** : `GET`

### Success Response

**Contoh Request**: [/getFakultasList/1](https://apap2017-univ-apps.herokuapp.com/getFakultasList/1)

```json
{
	"status":200,
    "msg":"success",
    "result":{
      "idUniv":"1",
      "fakultasList":[
        {"id_univ":"1","id_fakultas":"1","nama_fakultas":"Fakultas A1"},
        {"id_univ":"1","id_fakultas":"2","nama_fakultas":"Fakultas A2"},
        {"id_univ":"1","id_fakultas":"3","nama_fakultas":"Fakultas A3"}
      ]
    }
}
```
### Error Response

**Condition** : Jika id_univ tidak valid

**Contoh Request**: [/getFakultasList/123](https://apap2017-univ-apps.herokuapp.com/getFakultasList/123)

```json
{"status":404,"msg":"Universitas tidak ditemukan"}
```

## getFakultas/[id_univ]/[id_fakultas]

Mengembalikan object sebuah Fakultas diberikan id_univ dan id_fakultas

**URL** : `/getUniversitasList/[id_univ]/[id_fakultas]`

**Method** : `GET`

### Success Response
**Contoh Request**: [/getFakultas/1/1](https://apap2017-univ-apps.herokuapp.com/getFakultas/1/1)

```json
{
	"status":200,
    "msg":"success",
    "result":{
    	"fakultas":{
        	"id_univ":"1",
            "id_fakultas":"1",
            "nama_fakultas":"Fakultas A1"
        }
    }
}
```

### Error Response

**Condition** : Jika id_univ tidak valid.

**Contoh Request**: [/getFakultas/123/1](https://apap2017-univ-apps.herokuapp.com/getFakultas/123/1)

```json
{"status":404,"msg":"Universitas tidak ditemukan"}
```
--

**Condition** : Jika id_fakultas tidak valid.

**Contoh Request**: [/getFakultas/1/123](https://apap2017-univ-apps.herokuapp.com/getFakultas/1/123)

```json
{"status":404,"msg":"Fakultas tidak ditemukan"}
```

## getProdiList/[id_univ]/[id_fakultas]

Mengembalikan daftar semua prodi pada Universitas dan Fakultas tertentu

**URL** : `/getProdiList/[id_univ]/[id_fakultas]`

**Method** : `GET`

### Success Response

**Contoh Request**: [/getProdiList/1/1](https://apap2017-univ-apps.herokuapp.com/getProdiList/1/1)

```json
{
	"status":200,
    "msg":"success",
    "result":{
      "idUniv":"1",
      "idFakultas":"1",
      "prodiList":[
        {"id_univ":"1","id_fakultas":"1","id_prodi":"1","nama_prodi":"Program Studi A1X"},
        {"id_univ":"1","id_fakultas":"1","id_prodi":"2","nama_prodi":"Program Studi A1Y"},
        {"id_univ":"1","id_fakultas":"1","id_prodi":"3","nama_prodi":"Program Studi A1Z"}
      ]
    }
}
```
### Error Response

**Condition** : Jika id_univ tidak valid.

**Contoh Request**: [/getProdiList/123/1](https://apap2017-univ-apps.herokuapp.com/getProdiList/123/1)

```json
{"status":404,"msg":"Universitas tidak ditemukan"}
```
--

**Condition** : Jika id_fakultas tidak valid.

**Contoh Request**: [/getProdiList/1/123](https://apap2017-univ-apps.herokuapp.com/getProdiList/1/123)

```json
{"status":404,"msg":"Fakultas tidak ditemukan"}
```

## getProdi/[id_univ]/[id_fakultas]/[id_prodi]

Mengembalikan object sebuah Prodi diberikan id_univ, id_fakultas, dan id_prodi

**URL** : `/getProdi/[id_univ]/[id_fakultas]/[id_prodi]`

**Method** : `GET`

### Success Response
**Contoh Request**: [/getProdi/1/1/1](https://apap2017-univ-apps.herokuapp.com/getProdi/1/1/1)

```json
{
	"status":200,
    "msg":"success",
    "result":{
    	"prodi":{
        	"id_univ":"1",
            "id_fakultas":"1",
            "id_prodi":"1",
            "nama_prodi":"Program Studi A1X"
        }
    }
}
```

### Error Response

**Condition** : Jika id_univ tidak valid.

**Contoh Request**: [/getProdi/123/1/1](https://apap2017-univ-apps.herokuapp.com/getProdi/123/1)

```json
{"status":404,"msg":"Universitas tidak ditemukan"}
```
--

**Condition** : Jika id_fakultas tidak valid.

**Contoh Request**: [/getProdi/1/123/1](https://apap2017-univ-apps.herokuapp.com/getProdi/1/123/1)

```json
{"status":404,"msg":"Fakultas tidak ditemukan"}
```
--

**Condition** : Jika id_prodi tidak valid.

**Contoh Request**: [/getProdi/1/1/123](https://apap2017-univ-apps.herokuapp.com/getProdi/1/1/123)

```json
{"status":404,"msg":"Prodi tidak ditemukan"}
```

## 404 Error

**Condition** : Jika pengguna mengakses URL yang tidak ada dalam Aplikasi Universitas

**Contoh Request**: [/](https://apap2017-univ-apps.herokuapp.com/)
```json
{"status":404,"msg":"404 URL tidak ditemukan"}
```

**Contoh Request**: [/getFakultas](https://apap2017-univ-apps.herokuapp.com/getFakultas)
```json
{"status":404,"msg":"404 URL tidak ditemukan"}
```

