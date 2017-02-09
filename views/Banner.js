import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bannerActions from '../action-creators/banners';

function Banner(props) {
  const {addExecutionToViewer} = props;

  return (
    <li onClick={props.setBanner}>{props.banner.PixelSize}</li>
  );
}


const mapStateToProps = ({ client }) => client;
const mapDispatchToProps = (dispatch) => bindActionCreators(bannerActions, dispatch);

export default Banner;