import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './pages/header/Header';
import NoMatch from './pages/noMatch/NoMatch';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </>

  )
}

export default App
