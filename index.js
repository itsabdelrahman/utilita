const merge = require('lodash.merge');

const attempt = (func, defaultValue) => {
  try {
    return func();
  } catch (e) {
    return defaultValue;
  }
};

const set = (object, property, value) =>
  merge({}, object, { [property]: value });

const replaceAt = (array, index, thing) =>
  array
    .slice(0, index)
    .concat(thing)
    .concat(array.slice(index + 1));

const removeAt = (array, index) => ({
  array: array.slice(0, index).concat(array.slice(index + 1)),
  element: array[index],
});

const randomString = length =>
  Math.random()
    .toString(36)
    .substr(2, length);

const testRegex = (regex, string) => new RegExp(regex).test(string);

const logJSON = json => console.log(JSON.stringify(json, null, 2));

module.exports = {
  attempt,
  set,
  replaceAt,
  removeAt,
  randomString,
  testRegex,
  logJSON,
};
