class IndecisionApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            options :[]
        };
    }
    handleDeleteOptions() {
        this.setState( () => {
            return {
                options :[]
            };
        });
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
        this.setState((prevState) =>
        {
            return{
                options :prevState.options.concat(option)
            };
        });
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
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                 />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }

}


class Action extends React.Component{
    render(){
        return(
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOption}>
                what should i do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component{
    
    render(){
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    //this.props.options.map((option) => <p key={option}>{option}</p>)
                    //if we want to render instance of 'option' ie; <Option /> instead of <p> so only changing at one place we can change the options

                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
               {this.props.optionText}
            </div>
        );
    }
}

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
        
        this.setState(() => {
            return {error};
        });
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

//we dont need to nest things up
/*const jsx = (
    <div>
        <Header />
        <Action />
        <Option />
        <AddOption />
    </div>
);*/

//ReactDOM.render(jsx,document.getElementById('app'));



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
