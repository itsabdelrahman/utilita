const merge = require('lodash.merge');

const set = (object, property, value) =>
  merge({}, object, { [property]: value });

const logJSON = json => console.log(JSON.stringify(json, null, 2));

module.exports = {
  set,
  logJSON,
};
