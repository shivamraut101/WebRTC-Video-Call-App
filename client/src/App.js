import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/"
          element={"Hii I am Home page"}
        />
        <Route path="/new"
          element={
            <h1>
              "Hi I am the next page"
            </h1>
            }
        />
      </Routes>
    </div>
  );
}

export default App;
