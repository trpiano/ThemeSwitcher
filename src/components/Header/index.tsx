import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import { Container } from './styles';
import { shade } from 'polished'

const Header: React.FC = () => {
    const { colors } = useContext(ThemeContext)

    return(
        <Container>
            Hello World! 

            <Switch 
                onChange={() => {} }
                checked={false}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}

            />
        </Container>
    )
}

export default Header