import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bannerActions from '../action-creators/banners';
import Banner from './Banner'


function Banners(props) {
  const {addExecutionToViewer} = props;
  const banners = props.banners.map((banner, index) => {
    return <Banner key={index} banner={banner} setBanner={() => addExecutionToViewer(banner)} />
  });

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>{banners}</ul>
    </div>
  );
}


const mapStateToProps = ({ client }) => client;
const mapDispatchToProps = (dispatch) => bindActionCreators(bannerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banners);