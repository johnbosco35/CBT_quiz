import { useEffect, useState } from 'react'
import styled from 'styled-components'

import {  Load } from '../../config/icons'
import { PageCenter } from '../../styles/Global'

interface LogoAnimationProps {
  logoSize: string
}

const LogoAnimation = styled.div<LogoAnimationProps>`
  svg {
    width: ${({ logoSize }) => logoSize};
    transition: width 1s;
  }
`

const SplashScreen = () => {
  const [logoSize, setLogoSize] = useState('80px')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLogoSize('240px')
      } else {
        setLogoSize('350px')
      }
    }

    // Set initial logo size
    handleResize()

    // Update logo size on window resize
    window.addEventListener('resize', handleResize)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <PageCenter justifyCenter>
      <LogoAnimation logoSize={logoSize}>
        <Load/>
      </LogoAnimation>
    </PageCenter>
  )
}

export default SplashScreen
