import React, { PropTypes, Component } from 'react';
import Execution from './Execution';
import * as bannerActions from '../action-creators/banners';

export default class Sidebar extends Component {
  componentDidMount(){
   this.props.setCurrentProject(this.props.projectName);
  }
  componentWillUnmount(){
    this.props.removeProjects();
  }
  render(){

    const { executions, projects } = this.props;

    return (
      <Execution  />
    )
  }
}
