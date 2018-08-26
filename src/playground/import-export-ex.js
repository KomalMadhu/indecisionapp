import validator from 'validator';
console.log(validator .isEmail('test@gmail.com'));

const template =<p>this is jsx from webpack</p>;
ReactDOM.render(template ,document.getElementById('app'));

import isSenior ,{isAdult ,canDrink} from './people.js'
import subtract ,{add,square} from './utils.js'
console.log("app.js is running!!!!!!");

console.log(square(4));
console.log(add(100,23));
console.log(subtract(100,23));


console.log(isAdult(16));
console.log(canDrink(18));
console.log('seniorPerson :' + isSenior(55));
