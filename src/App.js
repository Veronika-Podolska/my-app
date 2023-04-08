import "./styles.css";
import Form from "./SearchBar";
import GeneralContainer from "./GeneralContainer";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="container-body">
        <Form />
        <GeneralContainer />
        <footer>
          Open-source code by
          <a href="" target="_blank">
            Veronika Podolska
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
