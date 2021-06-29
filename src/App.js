import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecomendedVideo from "./components/RecomendedVideo";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar></Sidebar>
        {/* Recomended Video */}
        <RecomendedVideo></RecomendedVideo>
      </div>
    </div>
  );
}

export default App;
