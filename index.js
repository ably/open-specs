'use strict';

//mongoose file must be loaded before all other files in order to provide
// models to other modules
var express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  swaggerUi = require('swagger-ui-express'),
  YAML = require('yamljs'),
  swaggerDocument = YAML.load('./swagger.yaml');

var app = express();

//rest API requirements
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000);
module.exports = app;