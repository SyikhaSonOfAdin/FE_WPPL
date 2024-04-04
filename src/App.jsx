import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./css/output.css";
import "./css/additional.css";
import Login from "./components/login/Login";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/landingPage/Dashboard";
import BarangMasuk from "./components/landingPage/BarangMasuk";
import BarangKeluar from "./components/landingPage/BarangKeluar";
import ItemsList from './components/ListItems/ItemsList';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes path='/'>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Sidebar />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/received' element={ <BarangMasuk />} />
            <Route path='/issued' element={<BarangKeluar />} />
            <Route path='/items' element={<ItemsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
