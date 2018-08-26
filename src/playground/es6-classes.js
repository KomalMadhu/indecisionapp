class Person{
    constructor(name = 'Anonymous' ,age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting()
    {
        //return 'hi .I am ' + this.name + '!'
        return `hi. I am ${this.name}!`;  //here we are using tilda
    }
    getDescription()
    {
        return `${this.name} is ${this.age} years old. `;
    }
}

class Student extends Person{
    constructor(name , age ,major)
    {
        super(); //we calling constructor function
        this.major= major;
    }
    hasMajor()
    {
       return !!this.major; // if we do !'' => true  and if we do !!''=>false
    }
    getDescription()
    {
        let description = super.getDescription();
        if(this.hasMajor)
        {
            description += `I have done major in ${this.major}`;
        }
    }
}
//************this is for class 'Person'
/*const me = new Person('madhu',26);
console.log(me.getGreeting()); 
console.log(me.getDescription()); 

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());*/

const me = new Student('madhu',26,'computer Science');
//console.log(me.getGreeting()); 
console.log(me.getDescription()); 
//console.log(me.hasMajor());

const other = new Student();
//console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());
