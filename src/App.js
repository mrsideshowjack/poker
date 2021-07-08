import React from 'react';
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";

import './App.scss';

// Components
import Card from './components/Card'

function App() {

  let flip = false

  return (
    <div className="App">
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          Planning Poker
        </HeaderName>
        <HeaderNavigation aria-label="IBM Planning Poker">
          <HeaderMenuItem href="#">New Room</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      <main>
        <Card flip={flip} num="?"/>
        <Card flip={flip} num="0"/>
        <Card flip={flip} num="0.5"/>
        <Card flip={flip} num="1"/>
        <Card flip={flip} num="2"/>
        <Card flip={flip} num="3"/>
        <Card flip={flip} num="5"/>
        <Card flip={flip} num="13"/>
        <Card flip={flip} num="20"/>
        <Card flip={flip} num="40"/>
        <Card flip={flip} num="100"/>
        <Card flip={flip} num="∞"/>
      </main>
    </div>
  );
}

export default App;
