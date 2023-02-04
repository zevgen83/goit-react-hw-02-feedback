import PropTypes from 'prop-types';
import css from 'components/Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return <h2 className={css.Notification}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
