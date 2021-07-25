import React from 'react';
import styled from 'styled-components';

import { HeaderStyle } from './styles'

import Stort_Logo from './Stort_Logo.png';

const Header = () => {
    const HeaderStyled = styled.header([HeaderStyle]);

    return (
        <HeaderStyled>
            <h1>CT ALONSO STORT</h1>
            <img src={Stort_Logo} width="100" />
        </HeaderStyled>
    );
}

export default Header;