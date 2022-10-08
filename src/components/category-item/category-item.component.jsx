import './category-item.styles.jsx'
import { CategoryItemContainer, Body, BackgroundImage } from './category-item.styles.jsx'

const CategoryItem = ({ category: {imageUrl, title}}) => {

    return (
        <CategoryItemContainer>
          <BackgroundImage imageUrl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </CategoryItemContainer>
    )

}

export default CategoryItem