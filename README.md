# functionKit ![latest version | npm](https://flat.badgen.net/npm/v/functionkit?icon=npm) ![David](https://img.shields.io/david/dev/shahoob/functionkit?style=flat-square) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/shahoob/functionKit/Node.js%20Package?logo=github&style=flat-square) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/shahoob/functionKit/Documentation?label=docs&logo=github&style=flat-square) ![GitHub commits since latest release (by date including pre-releases)](https://img.shields.io/github/commits-since/shahoob/functionKit/latest/master?include_prereleases&style=flat-square) [![Maintainability](https://api.codeclimate.com/v1/badges/77327835b3ba5e90a536/maintainability)](https://codeclimate.com/github/shahoob/functionKit/maintainability)

 ~~A package with functions for example, sum 2 numbers~~
A lodash ripoff

## NOTE

I just reialized that functionKit is a lodash ripoff!

## Install

 ```bash
 npm i functionkit
 ```

 or

 ```bash
 npm install functionkit
 ```

## Importing functionKit

 ```javascript
 import { sum, subtract, greet, divide } from 'functionKit';
 // Or this
 const { sum, subtract, greet, divide } = require('functionKit');
 ```

## Usage

 ```javascript
 // Greeter
 console.log(greet('Shehab'));
           // Hello Shehab
 // Custom Greeting
 console.log(greet('Shehab', 'Welcome back,'));
                           // Welcome back, Shehab

// Math
 // sum (add)
    console.log(sum([1, 1]));
    // 2
    // Same as: 1 + 1
 // subtract (the opposite of sum)
    console.log(subtract(1, 3));
    // 3
    // Same as: 1 - 3
 // Divide (i can't simplify it.)
    console.log(divide(55, 11));
    // 5
    // Same as: 55 / 11
 ```
