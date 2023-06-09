import React from 'react'

// ASSETS
import { apple, bill, google } from '../assets'

// CSS
import styles, {layout} from '../style'

const Billing = () => (
    <section id='product'className={layout.sectionReverse}>

{/* LEFT SIDE  */}
      <div className={layout.sectionImgReverse}>

        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5] rounded-[50px]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />

      </div>


{/* RIGHT SIDE */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Residential Services<br className='sm:block hidden'/> 
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        For our residential clients, we offer a wide range of services, from installing new light fixtures and ceiling fans to upgrading electrical panels and wiring. 
        We understand the importance of keeping your home's electrical system safe and efficient, 
        and we take pride in delivering prompt and reliable services that meet your needs and budget.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />

        </div>

      </div>

    </section>
  )


export default Billing