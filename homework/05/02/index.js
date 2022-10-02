import { min, max } from './modules/utility.js';
import { cliargs } from './modules/commandlineargument.js';

let myarray = cliargs();
console.log(max(myarray))
console.log(min(myarray))
