import React from 'react';

import AppHeader from '../app-header';
import SliderHeader from '../slider-header';
import WelcomeMessage from '../welcome-message';
import ListPets from '../pets/list-pets';

const App = () => {

    return (
      <>
        <AppHeader />
        <SliderHeader />
        <WelcomeMessage />
        <ListPets />
      </>
    );
}

export default App;