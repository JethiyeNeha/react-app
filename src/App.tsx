import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home.tsx';
import { CardDetails } from './pages/Card-details.tsx';
import { MoviesProvider } from './context/MovieContext.tsx';

function App() {
  return (
    <>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path=":id" element={<CardDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  );
}

export default App;
