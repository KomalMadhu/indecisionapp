const user = {
    name: 'madhu',
    cities: ['patna','banglore','sikkim'],
    printPlacesLived() {
       /* const cityMessages = this.cities.map((city) => {
            return this.name + " has lived in " +city;
        });
        return cityMessages;*/

        //***simplyfying the function */
        
        /*return this.cities.map((city) =>{
            return this.name + " has lived in " +city;this.name + " has lived in " +city;
        });*/


        //*******we can use shorthand method */
        return this.cities.map((city) => this.name + " has lived in " +city);
    },
    
    

};

const multiplyer ={
    number:[1,2,3,4,5,6,7,8,9,10],
    multiplyBy:5,
    multiplyNumber(){
        return this.number.map((some) => some *this. multiplyBy);
    }
};
        
console.log(user.printPlacesLived());
console.log(multiplyer .multiplyNumber());