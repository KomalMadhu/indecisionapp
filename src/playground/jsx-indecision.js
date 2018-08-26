console.log("App.js is running!");

/*var appObject={
    title:"select Options",
    subtitle:['jsx','javascript','jason']
};
var template = (
    <div>
        <h1>Title:{appObject.title}</h1>
        <p>subtitle:{appObject.subtitle[2]}</p>
    </div>

);*/

  
/*var userName="Madhu";
var userAge=22;
var userLocation="patna";
  var templatetwo=(
      <div>
          <h1>{userName.toUpperCase()}</h1>

          <p>Age:{userAge}</p>
          <p>location:{userLocation}</p>
      </div>
  );*/

  //to use object to render----------------------------
  /*var user={
      name:"madhu",
      age:20,
      location:"pune"
      };
var templatetwo=(
    <div>
    <h1>{user.name}</h1>

    <p>Age:{user.age}</p>
    <p>location:{user.location}</p>

</div>

);*/


//use conditional in react

var user={
    name:"madhu",
    age:20,
    location:"pune"
};

   /* function getlocation(location)
    {
        if(location)
        {
            return location;
        }
        else
        {
            return "unknown";
        }
    }
var templatetwo=(
        <div>
        <h1>{user.name}</h1>
    
        <p>Age:{user.age}</p>
        <p>location:{getlocation(user.location)}</p>
    
    </div>
);   
    */
    
    
    //to hide the location when 'location' doesnot have any thing and show it if it have some value

function getlocation(location)
{
    if(location)
    {
        return <p>location:{location}</p>;
    }
}

/*var templatetwo=(
    <div>
        <h1>{user.name?user.name:"Anonymous"}</h1> //ternary operator in JSX expression
        <p>{user.age}</p>
        {getlocation(user.location)}
        
    </div>
);*/
//how to use logical and operator and ternary operator in JSX expression

var templatetwo=(
    <div>
        <h1>{user.name?user.name:"Anonymous"}</h1> 
        {(user.age && user.age>=18) && <p>age:{user.age}</p>}
        {getlocation(user.location)}
        
    </div>
);


//how to apply both operational and and ternary operator
//***********************************************************
const app={
    title:"this is the title",
    subtitle:"this is subtitle",
    options:[]
}


var appRoot = document.getElementById('app');

// this was for example *******const numbers =[55,101,1000];
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
};

const onRemoveAll = () =>
{
 
   app.options=[];
   render();
};

const makeDecision= () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () =>{
    const  template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ?"here is your optons" : "no optoins" }</p>
            {/*<p>{app.options.length}</p>*/}
            <button  disabled={app.options.length===0} onClick={makeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {/*
                numbers.map((number) =>
                {
                    return <p key={number}>Number:{number}</p>
                })*/
            }
            <ol>
                {
                    app.options.map((option) =>
                {
                    return <li key={option}>{option}</li>
                })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};


render();   
     // we just need to change the template name here in render


    
       
    
    
      

    