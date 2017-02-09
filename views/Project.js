import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

function Project(props) {
  const {title, sum, job, date, executons} = props;
  return (
    <li>
      <Link to={`/${title}`} data-title={title} >
        <div>{title} {executons}: creatives {sum}: Banners Job Number:{job} date:{date}</div>
      </Link>
    </li>
  );
};

Project.PropTypes = {
  title: PropTypes.string
}

// Project.propTypes = {
//   jobNumber: PropTypes.string,
//   PixelSize: PropTypes.string,
//   banners: PropTypes.arrayOf(PropTypes.object)
// };

export default Project;