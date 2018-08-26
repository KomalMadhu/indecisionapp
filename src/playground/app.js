class IndecisionApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
           // options :props.options*********we dont need this because we are storing data in local storage
           options : []
        };
    }
    componentDidMount(){   // this function is for fecthing data
       
    try{
        const json = localStorage.getItem('options');
        const options =JSON.parse(json);

        if(options){
            this.setState( () => ({options}));
        }
    }catch (e){

    }
 }
//componentDidUpdate() is actually saving data in local storage
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions() {
        this.setState( () => {
            return {
                options :[]
            };
        });

        this.setState( () => ({options: []}));
    }

    handleDeleteOption(optiontoRemove)
    {
        this.setState  ((prevState) => ({
            options :prevState.options.filter((option) => optiontoRemove !== option)
        }));
    }
    handlePick()
    {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option )
    {
        if(!option)
        {
            return 'enter valid value to add item';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'option already exists';
        }
        this.setState((prevState) =>({
            options: prevState.options.concat(option)
        }) );
    }
    render(){ 
        const title = 'Indecision App';
        const subtitle = 'put ypur life in the hands of computer';
       
        return(
            <div>
                <Header title ={title} subtitle={subtitle}/>
                <Action
                 hasOption={this.state.options.length > 0}
                 handlePick ={this.handlePick}
                />
                <Options
                 options ={this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                 />
            </div>
        );
    }
}

/*IndecisionApp.defaultProps = {*********we dont nedd user to pass props any //
                                more because we are using the local storage
         options: []
};*/
const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};


const Action =(props) => {
    return(
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOption}>
            what should i do?
            </button>
        </div>
    )
};
 const Options = (props) =>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option} 
                        optionText={option}
                        handleDeleteOption =  {props.handleDeleteOption}
                     />
                ))
            }
                 
        </div>
    );
 };
 const Option = (props) => {
    return(
        <div>
           {props.optionText}
           <button
           onClick={(e) => {
             props.handleDeleteOption(props.optionText)
            }}
           >
           remove</button> 
        </div>
    );
};


class AddOption extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e)
    {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option);//passed from the  parents
        
        this.setState(() => ({ error }));

        if(!error)
        {
            e.target.elements.option.value= '';
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p> {this.state.error}</p>}
              <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'/>
                <button>Add Option</button>
              </form>  
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


//HOW WE CAN USE STATELESS COMPONENT***********************DESCRIBED BELOW
/*const User =(props) =>
{
    return (
        <div>
            <p>name:{props.name}</p>*/ {/*props.name is same as this.props.name in state coponent*/}
            /*<p>Age:{props.age}</p>
        </div>
    );
} 
ReactDOM.render(<User name={'andrew'} age={26} />, document.getElementById('app'));*/
