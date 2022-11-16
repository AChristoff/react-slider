import Slider from './components/Slider'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Slider transitionDuration={1000}/>
    </div>
  )
}

export default App

// initialIndex?: number, defaults to 0
// infiniteLoop?: boolean, defaults to true
// autoplay?: boolean, defaults to true
// autoplayInterval?: number, defaults to 3000ms
// transitionDuration?: number, defaults to 400ms



// onPageChange?(index: number): void;
