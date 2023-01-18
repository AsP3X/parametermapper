<h1>paraMap</h1>

The `paraMap` object contains a method `convertArgs2Map` that converts command line arguments into a map.
<br>
<br>

<h2>Usage</h2>

```js
const paraMap = require('parametermapper');

const args = process.argv.slice(2);
const parameterMap = paraMap.convertArgs2Map(args);
```
<br><h2>convertArgs2Map</h2>

The `convertArgs2Map` method takes in an array of command line arguments and returns an object with the arguments as keys and their values as the corresponding properties.

```bash
$ node script.js -a value1 -b value2 -c
```
<br>

This would result in the following object:
```js
{
  '-a': 'value1',
  '-b': 'value2',
  '-c': true
}
```
<br>
Note that if a command line argument does not have a value, its value will be set to `true`.

<br><h2>convertArgs2Array</h2>

The `convertArgs2Array` function is used to convert command line arguments into an array. It takes in an array of command line arguments (args) and returns an array of arguments and their values. The function first filters out all parameters that include the string '-', and then checks if the following parameter is a value or another parameter. If it is a value, it is added to the array. If it is another parameter, only that parameter is added to the array. For example, running the following command:

```bash
$ node script.js -a value1 -b value2 -c
```

This would result in the following array:

```bash
[ '-a', 'value1', '-b', 'value2', '-c' ]
```

Note that if a command line argument does not have a value, it is still added to the array as a single element.

<br>

# Another Example

```js
const paraMap = require('parametermapper');

const args = process.argv.slice(2);
const parameterMap = paraMap.convertArgs2Map(args);

if (parameterMap['-h']) {
  console.log('Usage: node script.js [-a value] [-b value] [-c]');
}

if (parameterMap['-a']) {
  console.log(`Value for -a: ${parameterMap['-a']}`);
}

if (parameterMap['-b']) {
  console.log(`Value for -b: ${parameterMap['-b']}`);
}

if (parameterMap['-c']) {
  console.log('Option -c was specified');
}
```
<br>

This script can be run with the following command:

```
$ node script.js -a value1 -b value2 -c
```
<br>

This will output the following:
```yml
Value for -a: value1
Value for -b: value2
Option -c was specified
```
<br>

The parameterMap object will contain the following key-value pairs:
```json
{
  "-a": "value1",
  "-b": "value2",
  "-c": true
}
```