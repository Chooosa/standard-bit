import React from 'react'

import { Wrapper, Logo } from './header.styles'
import logoSVG from '../../assets/logo.svg'

const Header = () => {
   return (
      <Wrapper>
         <a href="https://sbit500.pro/">
            <Logo src={logoSVG} />
         </a>
      </Wrapper>
   )
}

export default Header