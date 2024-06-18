import Quotes from "./components/Quotes";
import data from './assets/data'
import './App.css'

function App() {
  return (
    <>
      <div className="quote-separator">
      {data.map((waqya,index) =><Quotes key={index} quote={waqya.quote} author={waqya.author}/>)}
      </div>
    </>
  )
}

export default App;