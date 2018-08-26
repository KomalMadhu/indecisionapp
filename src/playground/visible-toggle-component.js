class VisiblilityToggle extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleToggle =  this.handleToggle.bind(this);
        this.state ={
            visibility :false
        };
    }
    handleToggle()
    {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        
        });
    }
    render()
    {
        return (
            <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={this.handleToggle}>
                {this.state.visibility ?'hide deatils': 'show deatils'}
            </button>
            { this.state.visibility&& (
                <div>
                    <p>hey.some details are here!!!!!!!</p>
                </div>
            )}
        </div>
        );
    }
}

ReactDOM.render(<VisiblilityToggle />,document.getElementById('app'));