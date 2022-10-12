import {Route, Routes} from 'react-router-dom'
import { useEffect, } from 'react';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-prewiew/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/categories.action';

import './shop.styles.scss'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap();
  }, [dispatch])

  return(
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )
}

export default Shop;

