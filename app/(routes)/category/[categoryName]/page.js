import CategoryList from '@/app/_component/CategoryList'
import ProductList from '@/app/_component/ProductList'
import React from 'react'

function page({params}) {
  return (
    <div>{params.categoryName}
    <CategoryList selected={params.categoryName} />
    <ProductList selectedCat={params.categoryName} />
    </div>
  )
}

export default page