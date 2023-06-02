import "./App.css";
import LanuchList from "./pages/launches/LaunchList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SpaceX Past Launches</h1>
        <p className="description">
          A list of Past Spacex Launches stating each mission name, rocket name,
          date and time in UTC, and associated links.
        </p>
      </header>
      <LanuchList />
    </div>
  );
}

export default App;
