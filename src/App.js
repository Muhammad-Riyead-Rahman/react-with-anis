import { v4 as uuidv4 } from 'uuid';
import Card from "./components/card";
import data from "./data.json";
import "./index.css";


const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    desc: "todo1 description"
  },
  {
    id: uuidv4(),
    title: "todo2",
    desc: "todo1 description"
  },
  {
    id: uuidv4(),
    title: "todo3",
    desc: "todo1 description"
  },
  {
    id: uuidv4(),
    title: "todo4",
    desc: "todo1 description"
  }
]


function App() {

  console.log(data[0].title);

  let items = [];

  /* // using for loop
  for (let x = 0; x < data.length; x++) {
    items.push(<Card titleText={data[x].title} descText={data[x].desc} />)
  } */

  items = data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} />)

  return <div>
    <h1 className='headingStyle largeText'>Todo App</h1>


    {/* <Card titleText={data[0].title} descText={data[0].desc} />
    <Card titleText={data[1].title} descText={data[1].desc} />
    <Card titleText={data[2].title} descText={data[2].desc} />
    <Card titleText={data[3].title} descText={data[3].desc} /> */}

    {items}

    {todos.map((todo) => {
      const { id, title, desc } = todo;
      return (
        <div key={id}>
          <h3>{title}</h3>
          <p>{desc}</p>
      </div>
    )})}
    
  </div>
}

export default App;



