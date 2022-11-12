const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtensions = (filename) => {
  return filename.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtensions(file)

  if(name !== 'index') {
    router.use(`/${name}`, require(`./${file}`))
  }
})

module.exports = router