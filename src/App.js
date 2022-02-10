import Card from './components/Card';
import data from "./data";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const cards = data.map(item =>
     <Card key={item.id} item={item} /> 
     )
  return (
    <div className="App">
      <Navbar />
      {cards}
      <Footer />
      
  </div>
  )
}

export default App;
