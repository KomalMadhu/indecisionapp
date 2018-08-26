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

const render = () =>{
    const  template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ?"here is your optons" : "no optoins" }</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>s
            {/*
                numbers.map((number) =>
                {
                    return <p key={number}>Number:{number}</p>
                })*/
            }
    
                {
                    app.options.map((option) =>
                {
                    return <li key={option}>option:{option}</li>
                })
                }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};


render();   
   