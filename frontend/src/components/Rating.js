import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        {/* 1 */}
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star' // true
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        {/* 2 */}
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star' // true
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        {/* 3 */}
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star' // false
              : value >= 2.5
              ? 'fas fa-star-half-alt' // true
              : 'far fa-star'
          }
        ></i>
        {/* 4 */}
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        {/* 5 */}
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      {/* если есть text, то показать */}
      <span className='ms-2'>{text && text}</span>
    </div>
  );
};

// props по умолчанию
Rating.defaultProps = {
  color: '#f8e825',
};

// проверка типов props
Rating.propTypes = {
  // value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Rating;
