import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import BrandonGrotesqueBlackWoff2 from '../assets/font/BrandonGrotesque-Black.woff2';
import BrandonGrotesqueBlackWoff from '../assets/font/BrandonGrotesque-Black.woff';
import BrandonGrotesqueBlackTtf from '../assets/font/BrandonGrotesque-Black.ttf';

import BrandonGrotesqueBoldWoff2 from '../assets/font/BrandonGrotesque-Bold.woff2';
import BrandonGrotesqueBoldWoff from '../assets/font/BrandonGrotesque-Bold.woff';
import BrandonGrotesqueBoldTtf from '../assets/font/BrandonGrotesque-Bold.ttf';

import BrandonGrotesqueRegularWoff2 from '../assets/font/BrandonGrotesque-Regular.woff2';
import BrandonGrotesqueRegularWoff from '../assets/font/BrandonGrotesque-Regular.woff';
import BrandonGrotesqueRegularTtf from '../assets/font/BrandonGrotesque-Regular.ttf';

import BrandonGrotesqueRegularItalicWoff2 from '../assets/font/BrandonGrotesque-RegularItalic.woff2';
import BrandonGrotesqueRegularItalicWoff from '../assets/font/BrandonGrotesque-RegularItalic.woff';
import BrandonGrotesqueRegularItalicTtf from '../assets/font/BrandonGrotesque-RegularItalic.ttf';

import BrandonGrotesqueMediumWoff2 from '../assets/font/BrandonGrotesque-Medium.woff2';
import BrandonGrotesqueMediumWoff from '../assets/font/BrandonGrotesque-Medium.woff';
import BrandonGrotesqueMediumTtf from '../assets/font/BrandonGrotesque-Medium.ttf';

const GlobalStyle = createGlobalStyle`
${Normalize}
*{
  font-size: 1px; /* for using rem units*/
}
body {
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 16rem;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url(${BrandonGrotesqueBoldWoff2}?) format('woff2'),
      url(${BrandonGrotesqueBoldWoff}?) format('woff'),
      url(${BrandonGrotesqueBoldTtf}?) format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url(${BrandonGrotesqueRegularWoff2}?) format('woff2'),
      url(${BrandonGrotesqueRegularWoff}?) format('woff'),
      url(${BrandonGrotesqueRegularTtf}?) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url(${BrandonGrotesqueRegularItalicWoff2}?) format('woff2'),
      url(${BrandonGrotesqueRegularItalicWoff}?) format('woff'),
      url(${BrandonGrotesqueRegularItalicTtf}?) format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url(${BrandonGrotesqueBlackWoff2}?) format('woff2'),
      url(${BrandonGrotesqueBlackWoff}?) format('woff'),
      url(${BrandonGrotesqueBlackTtf}?) format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Brandon Grotesque';
  src: url(${BrandonGrotesqueMediumWoff2}?) format('woff2'),
      url(${BrandonGrotesqueMediumWoff}?) format('woff'),
      url(${BrandonGrotesqueMediumTtf}?) format('truetype');
  font-weight: 500;
  font-style: normal;
}`;

export default GlobalStyle;
