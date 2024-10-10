import './App.css';
import Header from './cmp/Header';
//import PostCard from './cmp/PostCard';
import FormikCard from './cmp/FormikCard';
import DatingCards from './cmp/DatingCards';
import SwipeButtons from './cmp/SwipeButtons';

function App() {
  return (
    <div className="App">
			<Header/>	
			<FormikCard/>
			<DatingCards/>
			<SwipeButtons/>
    </div>
  );
}

export default App;
