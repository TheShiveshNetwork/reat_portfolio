import React from 'react'
import AnimatedLetter from '../../../Constants/AnimatedLetter'
import DotRing from '../../DotRing/DotRing'
import './Hero.scss'

const Hero = () => {
    const headerText = 'Full-Stack Developer & Designer'

    const galleryImgList = [
        'https://img.freepik.com/free-photo/close-up-n-happy-kid-playing-snow_23-2149103468.jpg?w=1380&t=st=1675072849~exp=1675073449~hmac=6000d533dc1c6e18f60915e88dad7f6309fde1e07baf3d35deb189a9a7da04a7',
        'https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?w=1060&t=st=1675072888~exp=1675073488~hmac=f73e79c6824310558ea8ffbc77ea9aa7282b597359c40f6c250431c54781cdf0',
        'https://img.freepik.com/free-photo/sunbird-nectarinia-jugularis-male-feeding-new-born-chicks-branch-sunbird-feeding-sunbird-hovering_488145-2885.jpg?w=1060&t=st=1675072902~exp=1675073502~hmac=c27f497f2c495be12efc8f053ea97c51591d1991fa11f868a9cb78ac95506daf',
        'https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?w=1060&t=st=1675072922~exp=1675073522~hmac=eef198250ac17c33829071ba2c08c7edd41724fde3d9b99df25ccf5e0ee9f306'
    ]

    return (
        <div className='portfolio__hero'>
            <DotRing />
            <div className='portfolio__hero-content'>
                <div className='portfolio__hero-title'>
                    <h1>
                        <AnimatedLetter
                            str={headerText}
                            index={20}
                        />
                    </h1>
                    <div className='portfolio__hero-subtitle'>
                        I design and code beautifully simple things, and I love what I do.

                        <div className='portfolio__hero-hoverDiv'></div>
                    </div>
                </div>
            </div>

            <div className='portfolio__hero-gallery'>
                    <div className='item-1'>
                        <img src={galleryImgList[0]} />
                    </div>
                    <div className='item-2'>
                        <img src={galleryImgList[1]} />
                    </div>
                    <div className='item-3'>
                        <img src={galleryImgList[2]} />
                    </div>
                    <div className='item-4'>
                        <img src={galleryImgList[3]} />
                    </div>
            </div>
        </div>
    )
}

export default Hero