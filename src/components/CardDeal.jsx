import React from 'react'


// ASSETS
import { card } from '../assets'

// CSS
import styles, {layout} from '../style'

//COMPONENTS
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>

{/* LEFT SIDE */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Commercial Services <br className='sm:block hidden'/> 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          For our commercial clients, we understand the unique challenges of working with complex electrical systems in commercial and industrial buildings. 
          Our team is equipped to handle all types of electrical work, from installing new equipment and lighting systems to ensuring compliance with safety codes and regulations. 
          We work closely with our clients to understand their needs and goals, and we strive to deliver top-quality services that help them achieve their objectives.       
        </p>
        <Button styles='mt-10' />
      </div>

{/* RIGHT SIDE PICS */}
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>

    </section>
  )


export default CardDeal