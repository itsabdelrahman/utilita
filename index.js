const merge = require('lodash.merge');

const set = (object, property, value) =>
  merge({}, object, { [property]: value });

const randomString = length =>
  Math.random()
    .toString(36)
    .substr(2, length);

const testRegex = (regex, string) => new RegExp(regex).test(string);

const logJSON = json => console.log(JSON.stringify(json, null, 2));

module.exports = {
  set,
  randomString,
  testRegex,
  logJSON,
};
