import React from 'react'
import { motion } from 'framer-motion'

const AnimatedLetter = ({ str, index }) => {
    const strArray = str.split('')
    return (
        <div className='app__animated_Letters'>
            {strArray.map((char, i) => (
                <motion.div
                    key={i}
                    animate={{
                        opacity: [0, 1],
                        scale: [0, 1],
                    }}

                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                        delay: i / 10
                    }}
                    className={`app__animated_Letter letter-${i}`}
                >
                    {char === " " ? <div style={{ marginRight: "2vw"}} /> : char}
                </motion.div>
            ))}
        </div>
    )
}

export default AnimatedLetter