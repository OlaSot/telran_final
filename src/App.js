import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import SingleProductPage from './pages/SingleProductPage';
import AllSales from './pages/AllSales';
import { useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCategories } from './requests/categories_req';
import NavMenuBottom from './components/NavMenuBottom';



function App() {

  const dispatch = useDispatch()

  useEffect(() => dispatch(getAllCategories), [dispatch])

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/products' element={<AllProductsPage isFilterVisible={isFilterVisible} handleFilterClick={handleFilterClick}/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/sales' element={<AllSales handleFilterClick={handleFilterClick} isFilterVisible={isFilterVisible}/>} />
        <Route path='/categories/:id' element={<ProductsByCategoriesPage handleFilterClick={handleFilterClick} isFilterVisible={isFilterVisible}/>} />
        <Route path='/products/:id' element={<SingleProductPage isFilterVisible={isFilterVisible}/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <NavMenuBottom/>
    </div>
  );
}

export default App;
