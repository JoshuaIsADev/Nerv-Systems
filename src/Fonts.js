import * as React from 'react';
import { Global } from '@emotion/react';

export const Fonts = () => {
  <Global
    styles={`
      font-family: 'IBM Plex Mono', monospace;
      src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap');
  `}
  />;
};
