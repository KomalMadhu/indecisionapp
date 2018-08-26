console.log("utils.js is running");

//export -default -named exports
// export "tesst" will not work
//export {square,add}; //named export

/*const square =(x) => x*x;
const add = (a, b) => a+b;
const  subtract = (a,b) => a-b;

export {square, add ,subtract as default};*/


//we can exports things inline like this below ::

export const square =(x) => x*x;
export const add = (a, b) => a+b;
const  subtract = (a,b) => a-b;

//BUT WE CAN'T do it for 'export default'
export default subtract;

//ONE ANOTHER WAY TO DO THIS IS  

// export default (a,b) => a-b;
//still we will able to access subtract from app.js 


