import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

const CategoryPreview = ({title, products}) => {

    return (
        <Fragment>
            <h2>
            <Link className="logo-container" to={`${title}`}>
                <span className='category-title'>{title.toUpperCase()}</span>
            </Link>
                
            </h2>
            <div className='category-preview-container'> 
                <div className='preview'>
                    {
                        products.filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </Fragment>
        
    )
}

export default CategoryPreview