import "./styles.css";
import Header from "./Header";
import MainWeather from "./MainWeather";
import LowerWeather from "./LowerWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MainWeather
          weekDay="Tuesday"
          month="October"
          date="11"
          year="2022"
          time="13:39"
          description="Few clouds"
        />
        <hr />
        <LowerWeather />
        <hr />
        <Footer />
      </div>
    </div>
  );
}
