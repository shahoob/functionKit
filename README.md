# functionKit ![latest version | npm](https://flat.badgen.net/npm/v/functionKit?icon=npm) ![development dependency security check | David DM](https://flat.badgen.net/david/dev/functionKit/pkg) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/shahoob/functionKit/Node.js%20Package?style=flat-square?logo=github)
 A package with functions for example, sum 2 numbers

 ## Install
 ```
 npm i functionKit
 ```
 or
 ```
 npm install functionKit
 ```
 ## Usage
 ### Importing
 #### From one file
 ```javascript
 import { sum, subtract, greet, divide } from 'functionKit';
 // Or this
 const { sum, subtract, greet, divide } = require('functionKit');
 ```
 #### From separate files
 ```javascript
 import { greet } from 'functionKit/lib/greeter';
 // Or this
 const { greet } = require('functionKit/lib/greeter');

 //                                                             ^
 // You can put any of them. As long as they look similar above |
 ```
 ## How-to
 ```javascript
 // Greeter
 console.log(greet('Shehab'));
           // Hello Shehab
 // Custom Greeting
 console.log(greet('Shehab', 'Welcome back,'));
                           // Welcome back, Shehab

// Math
 // sum (add)
    console.log(sum(1, 1));
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
