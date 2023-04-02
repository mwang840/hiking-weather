import Weather from "./Weather.jsx";
import "./App.css";
import hiking from "./assets/hiking.jpg";
import quotes from "./assets/hikign quotes.jpg";
function App() {
    return (
        <div>
            <h1>Enter a location to see if the weather is good for hiking!</h1>
            <img src={quotes} alt="Hiking Quotes" width="300" height="200"></img>
            <Weather/>
            <img src={hiking} alt="Hiking" width="300" height="200"/>
        </div>
        
    );
}

export default App;
