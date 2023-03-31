import React from 'react'

// COMPONENTS 
import GetStarted from './GetStarted'

// CSS
import styles from '../style'

// ASSETS/IMAGES
import { discount, robot } from '../assets'

const Hero = () => (
    <section id='home' className={'flex md:flex-row flex-col ${styles.paddingY}'}>
      <div className={'flex-1 ${styles.flexStart{ flex-col xl:px-0 sm:px-16 px-6'}>

{/* LEFT SIDE OF SCREEN */}
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'> 20% </span> Discount For {''}
            <span className='text-white'> 1 month </span> Account
          </p>
        </div>

          {/* LEFT-MIDDLE OF THE PAGE -  */}
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden' /> {''}
            <span className='text-gradient'> Generation Electrician </span> {''} 
          </h1>

          {/* GET STARTED BUTTON/COMPONENT on seperate file*/}
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        {/* PAYMENT METHOD TEXT   */}
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Contractor
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Ability to read and interpret electrical blueprints and schematics, 
        knowledge of electrical systems and codes, and proficiency in troubleshooting and repairing electrical issues. 
        Skilled in installing and maintaining electrical wiring, fixtures, and equipment, 
        as well as ensuring electrical safety in all work environments. 
        </p>

      </div>

{/* RIGHT SIDE OF SCREEN - picture and background gradients */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white_gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>
      
      {/* DISPLAY "GETSTARTED" BUTTON ON MOBILE AFTER THE PICTURE */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  )


export default Hero