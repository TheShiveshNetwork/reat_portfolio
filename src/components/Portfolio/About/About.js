import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import herodevices from '../../../hero-devices.svg'

import { MdOutlineDesignServices, MdApps, MdCode } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'

const About = () => {
  let name = ' Shivesh'

  return (
    <div className='portfolio__about'>
      <div className='portfolio__about-intro'>
        <motion.div
          whileInView={{
            y: [200, 0],
            opacity: [0, 1],
          }}
          transition={{ type: "spring", stiffness: 100, delay: .2 }}
          className='portfolio__about-intro-title'
        >
          Hi there, I am
          <span className='name'>
            {name.split('').map((letter, i) => (
              <motion.div
                key={i}
                whileInView={{ rotate: [0, 10] }}
                transition={{ delay: i / 10 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  transition: { delay: .1 },
                  color: 'orange'
                }}
                className={`letter-${i}`}
              >
                {letter}
              </motion.div>
            ))}.
          </span>
          <p>Good to see you here.</p>
        </motion.div>

        <img className='portfolio__about-intro-img' src={herodevices} />
      </div>

      <div className='portfolio__about-masteries-container'>
        <div className='portfolio__about-masteries'>
          <div className='portfolio__about-masteries-content'>
            <h3>About Me</h3>
            Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.

          </div>
          <div className='portfolio__about-masteries-content-cards'>

            <div className='card'>
              <div className='icon'>
                <MdOutlineDesignServices />
              </div>
              <h2>Design + Frontend</h2>
              <div className='content' data-type='web'>
                <div className='content-masteries'>
                  <span style={{ color: 'var(--secondary-color)' }}>Masteries In</span>
                  <div>
                    Ui/Ux, Graphics, Logos, etc.
                  </div>
                </div>
                <div className='content-softwares'>
                  <span style={{ color: 'var(--secondary-color)' }}>Tools / Softwares</span>
                  <div>
                    Figma, Adobe Photoshop, AfterEffects, Premiere Pro, etc.
                  </div>
                </div>
                <div className='content-previous'>
                  <span style={{ color: 'var(--secondary-color)' }}>Previous Works</span>
                  <div>
                    I enjoy designing new things. I have worked on several freelance projects for different people.
                  </div>
                </div>
                <div className='content-level'>
                  <span style={{ color: 'orange' }}>Level</span>
                  <div className='level__meter-container'>
                    <div className='reading' style={{ width: '95%' }}>
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='icon'>
                <BsCodeSlash />
              </div>
              <h2>Backend</h2>
              <div className='content' data-type='web'>
                <div className='content-masteries'>
                  <span style={{ color: 'var(--secondary-color)' }}>Masteries In</span>
                  <div>
                    Node, MongoDB, MySQL, Apache, Django, etc.
                  </div>
                </div>
                <div className='content-softwares'>
                  <span style={{ color: 'var(--secondary-color)' }}>Languages / Frameworks</span>
                  <div>
                    Python, JavaScript, React, Next, Django, Flask
                  </div>
                </div>
                <div className='content-previous'>
                  <span style={{ color: 'var(--secondary-color)' }}>Previous Works</span>
                  <div>
                    I have coded many personal projects that you can see on this portfolio.
                  </div>
                </div>
                <div className='content-level'>
                  <span style={{ color: 'orange' }}>Level</span>
                  <div className='level__meter-container'>
                    <div className='reading' style={{ width: '90%' }}>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='card'>
              <div className='icon'>
                <MdApps />
              </div>
              <h2>Other Technologies</h2>
              <div className='content' data-type='app'>
                <div className='content-masteries'>
                  <span style={{ color: 'var(--secondary-color)' }}>Masteries In</span>
                  <div>
                    App Design & Development
                  </div>
                </div>
                <div className='content-softwares'>
                  <span style={{ color: 'var(--secondary-color)' }}>Tools / Languages</span>
                  <div>
                    Android Studio, Java, Kotlin, Dart (Flutter), React Native
                  </div>
                </div>
                <div className='content-previous'>
                  <span style={{ color: 'var(--secondary-color)' }}>Previous Works</span>
                  <div>
                    I have built many android Apps for making daily tasks easier. I have also built some cross-platform apps in Dart.
                  </div>
                </div>
                <div className='content-level'>
                  <span style={{ color: 'orange' }}>Level</span>
                  <div className='level__meter-container'>
                    <div className='reading' style={{ width: '75%' }}>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <motion.div
      whileInView={{
        y: [200, 0],
        opacity: [0, 1],
      }}
      className='portfolio__about-storyTitle'
      >
        <h1>
          I have a story to tell
        </h1>
      </motion.div> */}
    </div>
  )
}

export default About