import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update" element={<EditProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
