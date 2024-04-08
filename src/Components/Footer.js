import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div >
        <div className=' flex flex-row basis-1/4 h-500  bg-purple-200'>
          <div className='mx-20  lg:basis-1/4'>
            <h1 className='text-4xl m-2' >Logo</h1>
            <p className='break-all'>Lorem Ipsum is simply dummy text of thk;gljfvyjtdxsteazesxdftgyjhkljhgfcdxszfxghjklmjuhgfdszdxcfgvhjnmklmjhgfcdxsze printing and typesetting industrycddddjfxhszahteazyrhfyxmhgzxrgDZEtDeDZngdddddddddddddddddddddddddddddddddddddd.</p>
            <div>
              <FacebookOutlinedIcon />
              <PinterestIcon />
              <GoogleIcon />
            </div>
          </div>
          <div className='lg:basis-1/3 p-5' >
              <h3 className='text-4xl mb-2 '>Useful Links</h3>
              <ul className='flex flex-col flex-wrap '>
                <li >Cart</li>
                <li>Women's Fashion</li>
                <li>Men's Fashion</li>
                <li>Kid's Fashion</li>                
              </ul>
          </div>
          <div>

          </div>
        </div>
        <div className=' h-90 bottom-0 items-center bg-purple-700 flex justify-center'>
          &copy;{year} All Rights Reserved
        </div>
      </div>
    </>
  )
}

export default Footer
