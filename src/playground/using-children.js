const Layout = (props) =>
{
    return (
        <div>
            <p>header</p>
            {props.children} {/* this is not refering template anymore 
                                It is directly coming from  render()*/}
            <p>footer</p>
        </div>
    );
};

const template =(
    
);


/*ReactDOM.render((
<Layout>
    <p>This is Inline</p>
</Layout>)
, document.getElementById('app'));*/

//IF WE DO THIS-----
ReactDOM.render((
<Layout>
    <div>
        <h1>page title</h1>
        <p>This is my page </p>
    </div>
</Layout>),
document.getElementById('app'));