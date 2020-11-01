import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  font-family: ${(props) => props.theme.fonts.sans};
  border: 0;
  padding: 0.5em;
  cursor: pointer;
  text-transform: capitalize;
  ${({ theme }) => theme.media.mobileXL`
    width: inherit;
  `}
  width: 100%;
  justify-content: space-between;
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius}`};
`;

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colours.primaryBlue};
  color: ${(props) => props.theme.colours.white};
`;

const Icon = styled.img`
  width: 0.6em;
  padding-left: 0.5em;
`;

export function IconButton({ icon, children, borderRadius }) {
  return (
    <PrimaryButton {...{ icon, borderRadius }}>
      <span>{children}</span>
      <Icon src={icon} alt="" />
    </PrimaryButton>
  );
}
