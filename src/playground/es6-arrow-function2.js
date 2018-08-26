// argument object - no longer bound with arrow function

const add = (a,b) =>{
    //console.log(arguments); // argument object will not work here in es6
    return a+b;
}

//this -keyword -no longer bound

const user = {
    name: 'madhu',
    cities: ['patna','banglore','sikkim'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        //----------To come over this bound problem we can use let that= this;
         
      /*  this.cities.forEach(function (city)
        {    
        console.log(this.name + ' has lived in ' + this.city);
        
        
        
--------------this.name will nor work here because this has not bound in
        });*/

       
        
        /*let that = this; ------if we have used arrow function we can have dirctly used parent 'this'
        this.cities.forEach(function (city)
        {    
        console.log(that.name + ' has lived in ' + city);
        });*/


        //********Arrow function doesn't bound it own this value......so we can use parent arrow fuction  therefore we can write*
     this.cities.forEach( (city) => 
    {
        console.log(this.name + ' has lived in ' + city);
    });
    }
};
user.printPlacesLived();