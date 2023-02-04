import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={css.Btn}
      type="button"
      key={option}
      name={option}
      onClick={onLeaveFeedback}
    >
      {option.replace(option[0], option[0].toUpperCase())}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
