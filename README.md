<p align="center">
  <img src="https://ucasu.com/wp-content/uploads/2016/03/GIFFU-1.gif" width="80"/>
</p>

<h1 align="center">Utilità</h1>

<p align="center">Utilities for JavaScript</p>

No genius here - that's just the stuff you toss in your project's utilities file.

## Installation

```
$ npm i -g utilita
```

## Usage

#### `set`

Copies source object deeply & recursively, and assigns new property to copy.

```javascript
import { set } from 'utilita';

set({ name: 'Joe' }, 'age', 22); // { name: 'Joe', age: 22 }
```

#### `logJSON`

Logs prettified JSON to console.

```javascript
import { logJSON } from 'utilita';

logJSON({ name: 'Joe' });
// {
//  "name": "Joe",
//  "age": 22
// }
```

#### `testRegex`

Tests for a match between a regular expression and a specified string.

```javascript
import { testRegex } from 'utilita';

testRegex('ab+', 'a'); // false
testRegex('ab+', 'ab'); // true
```

## License

MIT License
