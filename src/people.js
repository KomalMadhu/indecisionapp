export const isAdult = (x) =>{
    if( x >= 18){
       // return console.log(true);
       return true;
    }
    else
       // return console.log(false);
       return false;
}

export const canDrink =(x) =>{
    if(x>=21)
    {
        //return console.log(true);
        return true;
    }
    else
    {
        //return console.log(false);
        return false;
    }
}

export default (x) => x>50;