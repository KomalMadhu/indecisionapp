class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0 //we are using local storage so we don't need to set defaults
        };
    }

    componentDidMount(){   // this function is for fecthing data
        
     try{
         const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount,10);
 
         if(!isNaN(count)){
             this.setState( () => ({count:count /*count is same*/}));
         }
     }catch (e){
 
     }
  }

    componentDidUpdate(prevProps, prevState){
       /* if(prevState.count.value !== this.state.count.value)
        {
            const json = this.count;
            localStorage.setItem('count', json);
        }*/
        if(prevState.count !== this.state.count)
        {
            localStorage.setItem('count',this.state.count);
        }
    }
    handleAddOne()
    {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
                
        });
    }
    handleMinusOne()
    {
        this.setState((prevState) => {
           return {
            count : prevState.count -1
           };
       });
    }
    handleReset()
    {
        this.setState((prevState) =>{
            return {
             count : 0   
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

/*Counter.defaultProps = {
    count : 0
}*/
ReactDOM.render(<Counter />,document.getElementById('app'));
