import React from 'react';
import { BarComponent, NavigationLink } from './NavigationBar';

function NavigationBar() {
  return (
    <BarComponent>
      <NavigationLink>Home</NavigationLink>
      <NavigationLink>Sobre</NavigationLink>
      <NavigationLink>Projectos</NavigationLink>
      <NavigationLink>Contato</NavigationLink>
    </BarComponent>
  );
}

export default NavigationBar;
