import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import PrivateRouter from './components/PrivateRouter';
import Product from './features/product/Product';
import AddCategory from './page/AdminManager/AddCategory';
import AddProduct from './page/AdminManager/AddProduct';
import CategoryManager from './page/AdminManager/CategoryManager';
import ProductManager from './page/AdminManager/ProductManager';
import UpdateCategory from './page/AdminManager/UpdateCategory';
import UpdateProduct from './page/AdminManager/UpdateProduct';
import Home from './page/Home';
import AdminPage from './page/Layout/AdminPage';
import WebsitePage from './page/Layout/WebsitePage';
import ProductDetail from './page/ProductDetail';
import Signin from './page/Signin';
import Signup from './page/Signup.jsx'
// import Product from './features/product/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsitePage />}>
          <Route path='/' element={<Home />} >
            <Route index element={<Product />} />
          </Route>
          <Route path='productdetail/:id' element={<ProductDetail />} />
        </Route>

        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />

        <Route path='admin' element={<PrivateRouter><AdminPage /></PrivateRouter>} >
          <Route index element={<Navigate to={'dashboard'} />} />
          <Route path='dashboard' element={<h2>dashboard</h2>} />
          <Route path='product' >
            <Route index element={<ProductManager />} />
            <Route path='add' element={<AddProduct />} />
            <Route path=':id/edit' element={<UpdateProduct />} />
          </Route>
          <Route path='category' >
            <Route index element={<CategoryManager />} />
            <Route path='add' element={<AddCategory />} />
            <Route path=':id/edit' element={<UpdateCategory />} />
          </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;