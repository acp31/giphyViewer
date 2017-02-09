import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Project from './Project';
import * as clientActions from '../action-creators/banners';

function ClientContainer(props) {
  const { projects = [], banners = [] } = props;
  const titles = Object.keys(projects);
  
  return(
    <ul>
      {
        titles.map((title, index) => {
          let count = 0;
          let jobNum; 
          let newest;
          let creatives = {}
          for(let banner of banners){
            if(banner.projectName === title){
              count++;
              jobNum = banner.jobNumber;
              creatives[banner.ExecutionName] = banner.ExecutionName;
              if(newest === undefined){
                newest = banner.date;
              }else if(newest < banner.date){
                newest = banner.date;
              }
            }
          }

          let executions = Object.keys(creatives)

          return <Project key={title} executons={executions.length} title={title} sum={count} job={jobNum} date={newest}/>
        })
      }
    </ul>
  );
}

// ClientContainer.propTypes = {
//   client: PropTypes.object,};

// 
const mapStateToProps = (state) => {
  return {
    projects: state.client.projects,
    banners: state.banner.banners
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators(clientActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientContainer);