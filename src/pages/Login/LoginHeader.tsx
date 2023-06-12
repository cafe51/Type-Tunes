import React from 'react';
import { HeaderLogo, HeaderSection, HeaderWrapper } from '../../styles/HeaderStyles';


class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper data-testid="header-component">
        <HeaderSection position='center'>
          <HeaderLogo>TYPE TUNES</HeaderLogo>
        </HeaderSection>
      </HeaderWrapper>
    );
  }
}

export default Header;
