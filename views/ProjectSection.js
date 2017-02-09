import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from './Sidebar';
import Viewer from './Viewer';
import * as projectActions from '../action-creators/banners';

function ProjectSection(props) {

  const { routeParams, projects = [] } = props;
  return (
    <div>
      <Sidebar projectName={props.name}/>
      <Viewer />
    </div>
  );
}



const mapStateToProps = (state, {routeParams}) => state.client.projects[routeParams.projectName] || {};
const mapDispatchToProps = (dispatch) => bindActionCreators(projectActions, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSection);