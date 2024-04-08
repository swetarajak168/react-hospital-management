import React from 'react'

const CategoryItem = ({item}) => {
    const{id, img, title} = item;
  return (
    <div  >
     <img src={img} alt='' className='  p-10 lg:h-full object-cover '/>
     <h1 className='absolute top-0 left-0 p-10 hover:text-white text-2xl font-bold align-center'>{title}</h1>
     <button type="button" className="text-white mx-10 bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Shop Now</button>
    </div>
  )
}

export default CategoryItem
