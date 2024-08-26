import './App.css';
import { Routes, Route} from 'react-router-dom';
import CardPage from './Component/cardPage';
function App() {
  return(
  <Routes>
    <Route path = '/*' element = { <CardPage/>} />
  </Routes>)
}

export default App;
