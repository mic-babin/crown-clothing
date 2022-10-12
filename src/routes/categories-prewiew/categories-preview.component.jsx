

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap)
  
  return(
    <div>
      {
        Object.keys(categories).map(title => {
          const products = categories[title]
          return(
            <CategoryPreview key={title} title={title} products={products}/>
          )
          
        })
      }  
   </div>
  )
}

export default CategoriesPreview;

