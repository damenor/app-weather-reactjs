import React, { FunctionComponent } from 'react';
import { getStyle } from './styles';

type ContainerProps = {
  children: React.ReactNode, 
  color?: string
}

export const Container: FunctionComponent<ContainerProps> = ({ children, color }: ContainerProps) => ( 
  <div style={getStyle(color)}>{ children }</div> 
)