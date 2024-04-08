import React from 'react'
import { CategoryItems } from './Data'
import CategoryItem from './CategoryItem'
const Categories = () => {
    return (
        <>
           <div className=' flex justify-center'>
            Categories

           </div>
            <div className='lg:flex h-100 '>
             {CategoryItems.map(item => {
                return (
                    <div className=' relative  ' key={item.id}>
                        <CategoryItem item={item}  />
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Categories
