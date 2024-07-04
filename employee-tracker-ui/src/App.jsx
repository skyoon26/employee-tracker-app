import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './pages/header/Header';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/employee" element={<PostUser/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </>

  )
}

export default App
