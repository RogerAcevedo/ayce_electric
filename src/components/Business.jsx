import React from 'react'

// IMPORT JS DATA FROM INDEX.JS
import { features } from '../constants'

// IMPORT COMPONENTS
import Button from './Button'

// CSS
import styles, { layout } from '../style'

// FEATURE CARD COMPONENT
const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6  ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>

    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>

    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
    
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>

{/* LEFT SIDE */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Calls Us! <br className='sm:block hidden'/> We'll handle the Issue</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We're dedicated to providing fast and reliable electrical services that you can count on. 
          From simple repairs to complex installations, we have the expertise to get the job done right.
        </p>
        <Button styles='mt-10' />
      </div>

{/* RIGHT SIDE */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id}
            {...feature} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Business