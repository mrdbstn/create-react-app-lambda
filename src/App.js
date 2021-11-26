import logo from "./logo.svg";
import "bulma/css/bulma.min.css";
import "./App.css"
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <div className="mt-5 columns is-centered">
        <div className="column is-half">
          <div className="title is-2 has-text-centered">Vind nummers van een bepaalde vacature in Carerix</div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
