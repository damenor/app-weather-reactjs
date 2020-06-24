import React, { FunctionComponent } from 'react';
import { styleLoading } from './styles';

export const Loading: FunctionComponent<any> = () => (
  <div style={styleLoading}>
    <span>Cargando</span>
  </div>
)