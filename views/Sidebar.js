import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Execution from './Execution';
import * as bannerActions from '../action-creators/banners';
import Sidebar from './SidebarComponent';


const mapStateToProps = (state) => {
  return {
    sectionTitle: state.client.currentProject,
    projects: state.client.currentProjectBanners,
    executions: state.client.executions
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(bannerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
