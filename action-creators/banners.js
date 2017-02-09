import { GET_BANNERS, ADD_BANNERS, ADD_PROJECTS, GET_BANNER_SIZE, SELECT_BANNER, LOAD_EXECUTIONS, LOAD_CURRENT_PROJECT_EXECUTIONS, SET_CURRENT_PROJECT_BANNERS, SET_CURRENT_PROJECT, REMOVE_PROJECTS, ADD_EXECUTION_TO_VIEWER} from '../actions';
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';


const BANNER_API_URL = '/load';

const API_HEADERS = {
  'Content-type': 'application/json',
  Authorization: 'any-string-you-like'
}

export function getBanners() {
  return (dispatch) => {
    fetch(BANNER_API_URL)
      .then(response => response.json())
      .then(banners => dispatch(addBanners(banners)));
  };
}

export function addBanners(banners) {
  return (dispatch) => {
    dispatch(setBanners(banners))
    dispatch(getProjects())
  };
}

export function setBanners(banners) {
  return {
    type: ADD_BANNERS,
    payload: banners
  }
}

export function getBannerSize(size){
  let sizeArr = size.split('x');
  dispatch(setBannerSize(sizeArr[0]));
}

export function setBannerSize(dimensions) {
  return {
    type: GET_BANNER_SIZE,
    payload: dimensions
  }
}

export function setBannerUrl(url) {
  return {
    type: SELECT_BANNER,
    payload: url
  }
}

export function getProjects() {
  return (dispatch, getState) => {
    let state = getState();
    let temp = {};
    state.banner.banners.forEach((banner) => {
      if(banner.projectName !== undefined && !temp.hasOwnProperty(banner.projectName)) {
        temp[banner.projectName] = banner.projectName;
      }
    });
    let projects = Object.keys(temp);
    dispatch(compileProjects(projects))
  }
}

export function compileProjects(projects) {
  return (dispatch, getState) => {
    let state = getState();
    let compiledProjects = {};
    let banners = state.banner.banners;
    projects.forEach((project) => {
      let temp = {};
      let count = 0;
      banners.forEach((banner) => {
        if(banner.projectName === project){
          count++
          temp[count] = banner;
        }
      });

      temp['name'] = project.toString();
      compiledProjects[project] = temp;
    });

    dispatch(addProjects(compiledProjects))
  }
}

export function addProjects(projects) {
  return {
    type: ADD_PROJECTS,
    payload: projects
  }
}

export function setListOfCurrentProjectBanners(project){
  return (dispatch, getState) => {
    let state = getState();
    let currentProject = state.client.currentProject;
    let setOfCurrentProjects = currentProject[project]
  }
  dispatch({
    type: SET_CURRENT_PROJECT_BANNERS,
    payload: setOfCurrentProjects
  })
}

export function getExecutions() {
  return (dispatch, getState) => {
    let state = getState();
    let banners = state.client.currentProjectBanners;
    let temp = {};
    for(let key in banners) {
      if(key === ExecutionName){
        temp[banners.ExecutionName] = banners.ExecutionName;
      }
    }
    let executionList = Object.keys(temp);
    dispatch(loadExecutions(executionList))
  }
}

export function loadExecutions(list) {
  return {
    type: LOAD_EXECUTIONS,
    payload: list
  }
}

export function getExecutionList() {
  return(dispatch, getState) => {
    let state = getState();
    let banners = state.client.currentProjectBanners;
    let temp = {};
    banners.forEach((banner) => {
     temp[banner.ExecutionName] = banner.ExecutionName;
    })
    let executions = Object.keys(temp)
    dispatch(loadExecutions(executions))
  }
}

export function loadCurrentProjectExecutions(list) {
  return {
    type: LOAD_CURRENT_PROJECT_EXECUTIONS,
    payload: list
  }
}

export function setsCurrentProjectState(project) {
  return {
    type: SET_CURRENT_PROJECT,
      payload: project
  }
}

export function setCurrentProject(project) {
  return(dispatch, getState) => {
    dispatch(setsCurrentProjectState(project))
    let state = getState();
    let currentProject = state.client.currentProject;
    let currentProjects = state.client.projects[currentProject];
    let temp = [];
    for(let key in currentProjects) {
      if (typeof currentProjects[key] === 'object'){
        temp.push(currentProjects[key])
      }
    }
    let reducedList = temp.filter((banner) => banner.projectName !== currentProject);
    dispatch(setCurrentProjectBanners(temp));
    dispatch(getExecutionList());
  }
}

export function setCurrentProjectBanners(projects){
  return {
    type: SET_CURRENT_PROJECT_BANNERS,
    payload: projects
  }
}

export function removeProjects(){
  return{
    type: REMOVE_PROJECTS
  }
}

export function addExecutionToViewer(execution) {
  return {
    type: ADD_EXECUTION_TO_VIEWER,
    payload: execution
  }
}

export function getVersions(){
  return (dispatch, getState) => {

  }
}


