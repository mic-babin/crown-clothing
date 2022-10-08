import { useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const {categoriesMap } = useContext(CategoriesContext)
  
  return(
    <div>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return(
            <CategoryPreview id={title} title={title} products={products}/>
          )
          
        })
      }  
   </div>
  )
}

export default CategoriesPreview;

