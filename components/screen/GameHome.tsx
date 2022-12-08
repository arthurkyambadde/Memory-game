import React from 'react';
import { Menubutton } from '../Buttons/menu/MenuButton';
import { MenuSelectionbutton } from '../Buttons/menuSelection/MenuSelectionButton';

const numberOfPlayers = [1, 2, 3, 4];
const gridSize = ['4X4', '6X6'];

const listItemsPlayers = numberOfPlayers.map((item) => {
  return <MenuSelectionbutton buttonName={`${item}`} key={item} id={`item_${item}`} />;
});

const listItemGridSize = gridSize.map((item) => {
  return <MenuSelectionbutton buttonName={item} key={item} id={`size_${item}`} />;
});

export const GameHome = () => {
  return (
    <div>
      <h2>memory</h2>
      <div>
        <p>Select Theme</p>
        <div>
          <MenuSelectionbutton buttonName="Numbers" id="Numbers" />
          <MenuSelectionbutton buttonName="Icons" id="Icons" />
        </div>
        <div>
          <p>Number of Players</p>
          <div>{listItemsPlayers}</div>
        </div>
      </div>
      <div>
        <p>Grid Size</p>
        <div>{listItemGridSize}</div>
      </div>
      <Menubutton buttonName="Start Game" />
    </div>
  );
};
