import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function ProductItem({item}) {
  return (
    <div className='flex flex-col border-2 p-5 rounded-2xl bg-green-50 justify-center items-center'>
      <Image src={item.imgLink} alt='item.Name' width={150} height={150}/>
      <h2>{item.Name}</h2>
      <h2>{item.price}</h2>

      <Button>Add to Cart</Button>
    </div>
  )
}

export default ProductItem