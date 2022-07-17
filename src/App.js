import Card from "./components/card";
import "./index.css";

function App() {
  return <div>
    <h1 className='headingStyle largeText'>Todo App</h1>
    <Card titleText="Call Mother" descText="this is desc1"/>
    <Card titleText="Call Father" descText="this is desc2" />
    <Card titleText="Call Sister" descText="this is desc3"/>
    <Card titleText="call Home" descText="this is desc4"/>
  </div>
}

export default App;



