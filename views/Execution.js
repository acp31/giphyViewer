import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bannerActions from '../action-creators/banners';
import Banners from './Banners';

function Execution(props) {
  const {addExecutionToViewer} = props;
  const executions = props.executions.map((execution, index) => {
    let arr = [];
    let indexs = []
    props.currentProjectBanners.forEach((banner, item) =>{
      if(banner.ExecutionName === execution){
       arr.push(banner);
       indexs.push(item)
      }
    })
    // console.log(arr)
    return <Banners key={index} title={execution} banners={arr} />
  })



  return (
    <div>
      {executions}
    </div>
  );
}

const mapStateToProps = ({ client }) => client;
const mapDispatchToProps = (dispatch) => bindActionCreators(bannerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Execution);