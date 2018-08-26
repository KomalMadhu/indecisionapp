class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne()
    {
        console.log("add one");
    }
    handleMinusOne()
    {
        console.log("minus one");
    }
    handleReset()
    {
        console.log("reset");
    }
    render() {
        return (
            <div>
                <h1>Count:</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

/*//-----------------------------------------------------------------------
    //this is how if we click on any of the buttons <h1>count will change
/*let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusone = () => {
    count--;
    renderCounterApp();
};

const reset = () => 
{
    count=0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');
const renderCounterApp = () =>
{
    const counterButton = (
        <div>
            <h1>Count:{count} </h1>   
            <button onClick={addOne}>+1</button>
            <button onClick={minusone}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );


    ReactDOM.render(counterButton,appRoot);
};

renderCounterApp();*/
