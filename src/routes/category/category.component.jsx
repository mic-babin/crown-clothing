import './category.styles.scss'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {  useState, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Category = () => {
    const { category } = useParams();
    const categories  = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categories[category])

    useEffect(() => {
        setProducts(categories[category])
    }, [category, categories])

    return (
        <div className='category-container'>
            {
                products &&
                products.map((product) => (<ProductCard key={product.id} product={product}/>))
            }
        </div>
    )
}

export default Category