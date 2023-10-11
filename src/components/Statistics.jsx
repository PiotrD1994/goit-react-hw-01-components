import React from "react";
import PropTypes from 'prop-types'

const Statistics = ({title, stats}) => {
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map((start, index) => (
                    <li key={index}>
                        <span>{start.label}</span>
                        <span>{start.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  export default Statistics