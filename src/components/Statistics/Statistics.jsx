import PropTypes from 'prop-types';

import { List } from './Statistics.styled.js';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <List>Good: {good}</List>
        <List>Neutral: {neutral}</List>
        <List>Bad: {bad}</List>
        <List>Total: {total}</List>
        <List>Positive feedback: {positivePercentage}%</List>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
