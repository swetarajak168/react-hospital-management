import React, {useEffect} from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='rounded-lg grid justify-center bg-amber-200 m-10 h-auto ' data-aos="fade-up" data-aos-duration="2000"> 
      <div className='pl-20 pb-5 text-5xl'>Newsletter</div>
      <div className='text-xl'>Get timely update from your favourite products.</div>
      <div className='flex  p-5'>
        <input type="text" className='rounded-lg w-full ' placeholder='Your Email'></input>
        <SendOutlinedIcon/>
      </div>
      


      
    </div>
  )
}

export default Newsletter
