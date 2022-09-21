import React, {useEffect} from "react";
import letter from "./services/letter";

const App = () => {

    useEffect(()=> {
         letter.get().then((res) => {
            console.log('res --------', res)
        })
    },[])

    return (
        <div id="app">
            <h1>advanced-javascript-exercise</h1>
            <h4>please visit the console</h4>
        </div>
    );
}

export default App;

