import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Appbody">
        <Weather defaultCity="Berlin" />
      </div>
      <Footer />
    </div>
  );
}
