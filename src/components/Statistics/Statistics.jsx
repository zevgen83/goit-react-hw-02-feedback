import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={css.Statistics}>Good: {good}</p>
      <p className={css.Statistics}>Neutral: {neutral}</p>
      <p className={css.Statistics}>Bad: {bad}</p>
      <p className={css.Statistics}>Total: {total}</p>
      <p className={css.Statistics}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
