import logo from './logo.svg';


function Info(props){
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    <h1>Welcome to Fullstack Development - I</h1>
                    <h2>React JS Programming Week09 Lab Exercise</h2>
                    <h3>{props.id}</h3>
                    <h4>{props.nm}</h4>
                    <h5>George Brown College, Toronto</h5>
                    </p>
            </header>
        </div>
    )
}

export default Info