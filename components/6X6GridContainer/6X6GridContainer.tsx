import React from 'react';
import {
  generateRandomNumberPairs,
  generateShuffleNumbers,
} from '../../Utils/helpers/GridContainer.helper';
import { MemoryCellButton } from '../Buttons/memoryCell/MemoryCellButton';
import styles from './styles.module.css';

const randomNumbers = generateRandomNumberPairs(18);
const shuffledNumbers = generateShuffleNumbers(randomNumbers);

const listItems = shuffledNumbers.map((item, index) => {
  return <MemoryCellButton buttonName={`${item}`} id={`cell_` + index} key={index} />;
});

export const GridContainer6X6 = () => {
  return <div className={styles.grid_container}>{listItems}</div>;
};
