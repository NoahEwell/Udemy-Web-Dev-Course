// This is the CommonJS method of importing packages with the require keyword.
// var generateName = require("sillyname");

// This is the ECMAScript Method of importing packages with the import keyword.
import generateName from "sillyname";
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

import {randomSuperhero} from "superheroes";
var hero = randomSuperhero();
console.log(`I am ${hero}!`);