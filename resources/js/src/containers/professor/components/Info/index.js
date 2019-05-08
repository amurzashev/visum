import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const dark = {
  color: 'white',
  textDecoration: 'underline'
};

const Info = ({ info, theme, rating }) => (
  <div className="card card_padding">
    <h1>{info.name}, <Link to={`/university/${info.university_id}`} style={theme.mode === 'dark' ? dark : { textDecoration: 'underline' }}>{info.university}</Link></h1>
    {rating && <p>Рейтинг: {rating}</p>}
  </div>
);

Info.propTypes = {
  info: propTypes.shape({
    name: propTypes.string,
    photo: propTypes.string,
    rating: propTypes.number,
    suggestion: propTypes.number,
    university: propTypes.string,
    university_id: propTypes.number
  }),
  theme: propTypes.object.isRequired,
  rating: propTypes.number
};
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(Info);
