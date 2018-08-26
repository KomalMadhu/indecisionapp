let visiblity =false;

const toggleVisibility = () =>
{
    visiblity = !visiblity;
    render();
};
const render = () =>
{
    const jsx = (
        <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={toggleVisibility}>
                {visiblity ?'hide deatils': 'show deatils'}
            </button>
            { visiblity && (
                <div>
                    <p>hey.some details are here!!!!!!!</p>
                </div>
            )}
        </div>

    );
    ReactDOM.render(jsx,document.getElementById("app"));
};
render();