import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainWeather">
        <p className="city">Montreal</p>
        <p className="degree">19°</p>
        <p className="descWeather">Mostly Clear</p>
        <div className="hl">
          <p>H: 24°</p>
          <p>H: 18°</p>
        </div>
      </div>
      <div className="imgHouseContainer">
        <img src="/House.svg" alt="House" />
      </div>
    </div>
  )
}

export default App
