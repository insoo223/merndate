import './App.css';
import Header from './cmp/Header';
import DatingCards from './cmp/DatingCards';
import SwipeButtons from './cmp/SwipeButtons';

function App() {
  return (
    <div className="App">
			<Header/>	
			<DatingCards/>
			<SwipeButtons/>
    </div>
  );
}

export default App;
