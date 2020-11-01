import { css } from 'styled-components';

const sizes = {
  mobile: 320,
  mobileXL: 481,
  tablet: 769,
  desktop: 1201,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
