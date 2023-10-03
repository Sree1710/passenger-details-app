import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewPassenger from './Components/ViewPassenger';
import AddPassenger from './Components/AddPassenger';
import SearchPassenger from './Components/SearchPassenger';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<AddPassenger/>} />
      <Route path='/sp' exact element={<SearchPassenger/>}/>
      <Route path='/vp' exact element={<ViewPassenger/>} />
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
