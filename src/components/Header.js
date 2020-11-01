import React from 'react';
import styled from 'styled-components';

import { IconButton } from './Button';
import Logo from '../assets/spacex-logo.png';
import Reload from '../assets/icon/refresh.png';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1em 0;
`;

const BrandLogoContainer = styled.div`
  display: block;
  padding-left: 1.2em;
  ${({ theme }) => theme.media.mobileXL`
    display: flex;
    align-items: baseline;
  `}
`;

const BrandLogo = styled.img`
  max-width: 13em;
`;

const BrandLogoText = styled.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.fontColour};
  ${({ theme }) => theme.media.mobileXL`
    margin-left: -1.2em;
  `}
`;

const ReloadButtonContainer = styled.div``;

export function Header() {
  return (
    <HeaderContainer>
      <BrandLogoContainer>
        <BrandLogo src={Logo} alt="spacex-brand-logo" />
        <BrandLogoText>Launches</BrandLogoText>
      </BrandLogoContainer>
      <ReloadButtonContainer>
        <IconButton {...{ icon: Reload, borderRadius: '1.2em 0 0 1.2em' }}>Reload</IconButton>
      </ReloadButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
