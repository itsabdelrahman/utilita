const merge = require('lodash.merge');

const set = (object, property, value) =>
  merge({}, object, { [property]: value });

const logJSON = json => console.log(JSON.stringify(json, null, 2));

const testRegex = (regex, string) => new RegExp(regex).test(string);

const randomString = length =>
  Math.random()
    .toString(36)
    .substr(2, length);

module.exports = {
  set,
  logJSON,
  testRegex,
  randomString,
};
