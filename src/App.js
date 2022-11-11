import './App.css';
import Puzzle from './components/puzzle';
import Rules from './components/rules';
import RightSide from './components/right';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header/>
    <div className="App row row-no-gutters">
      <div className='col-lg-3'>
      <Rules/>
      </div>
      <div className='col-lg-5'>
      <Puzzle/>
      </div>
      <div className='col-lg-3'>
      <RightSide/>
      </div>

      </div>

       
    </div>
  );
}

export default App;
