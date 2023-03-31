import React from 'react'

// IMPORT COMPONENTS
import { Navbar,
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Stats,
  Testimonials } from './components'

// IMPORT STYLES/CSS
import styles from './style';

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>

      {/* NAVBAR */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      {/* HERO SECTION/MAIN  */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
          <FeedbackCard/>
          <getSelection/>
        </div>
      </div>


{/* CLOSING DIV */}
    </div>
  )


export default App