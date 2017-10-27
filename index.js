const merge = require('lodash.merge');

const set = (object, property, value) =>
  merge({}, object, { [property]: value });

module.exports = {
  set,
};
