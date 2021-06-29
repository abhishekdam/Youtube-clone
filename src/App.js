import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideo from "./components/RecomendedVideo";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar></Sidebar>
        {/* recommended Video */}
        <RecommendedVideo></RecommendedVideo>
      </div>
    </div>
  );
}

export default App;
