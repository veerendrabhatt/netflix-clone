import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Banner />

      {/* Movie Categories */}
      <div className="rows_container">
        <Row title="Superhero Movies" searchTerm="avengers" />
        <Row title="DC Universe" searchTerm="batman" />
        <Row title="Wizarding World" searchTerm="harry potter" />
        <Row title="Classic Action" searchTerm="mission" />
        <Row title="Comedy Picks" searchTerm="comedy" />
        <Row title="Sci-Fi Collection" searchTerm="matrix" />
        <Row title="Horror Night" searchTerm="horror" />
        <Row title="Romantic Hits" searchTerm="romance" />
        <Row title="Thriller Zone" searchTerm="thriller" />
        <Row title="Adventure Stories" searchTerm="adventure" />
      </div>
    </div>
  );
}

export default App;
