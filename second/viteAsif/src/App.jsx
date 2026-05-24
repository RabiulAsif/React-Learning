import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";
// import {EventProps} from "./components/EventProps";
import { State } from "./components/hooks/State";

const App = () => {
  return(
    <section className="container">
      {/* <NetflixSeries /> */}
      {/* <EventProps /> */}
      <State />
    </section>
  );  
};
export default App;