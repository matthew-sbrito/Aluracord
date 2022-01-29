import { NextPage } from 'next';
import React from 'react';

import { TitleTag } from './styles';

const Title: NextPage = ({ children }) => { 
  
  return (
    <TitleTag>
      { children }
    </TitleTag>
  );
}

export { Title };