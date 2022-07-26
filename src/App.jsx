import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import data from "./Dummy.json"

function App() {
  const Cards = data.map((item)=>{
    return (
      <Card
        key={item.id}
        props={item}
      />
    )
  })

  return (
    <>
      <Navbar/>
      <div className="flex">
        <div className="flex-col mx-auto">
          {Cards}
        </div>
      </div>
    </>
  );
}

export default App;
