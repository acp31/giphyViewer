import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bannerActions from '../action-creators/banners';

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function Viewer(props) {

  const {src, size, servedBy, zipFilename} = props;
  let display;
  let stats;
  if(src){
    let sizes = size.split('x');
    // display = <iframe src={src} height={sizes[1]} width={sizes[0]}></iframe> ;
    stats = <div>{servedBy} {zipFilename}</div>
  }else {
    display = null;
    stats = null;
  }
  
 if(src){
    openInNewTab(src)
  }

  return(
   
    <div>
      {display}
      {stats}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    src: state.client.selectedExecution.url,
    size: state.client.selectedExecution.PixelSize,
    zipFilename: state.client.selectedExecution.zipFilename,
    servedBy: state.client.selectedExecution.servedBy
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(bannerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer);