import { SELECT_PROJECT, ADD_PROJECTS, SET_CURRENT_PROJECT_BANNERS, LOAD_EXECUTIONS, SET_CURRENT_PROJECT, REMOVE_PROJECTS, ADD_EXECUTION_TO_VIEWER } from '../actions';
import { createReducer } from '../utils';

const state = { 
  currentProjectBanners: [], 
  projects: {}, 
  executions: [], 
  currentProject: null,
   selectedExecution: {} 
  };

const addProjects = (state, { payload }) => ({ 
  projects: {...state.projects, ...payload}, 
  currentProjectBanners: [...state.currentProjectBanners], 
  executions:[...state.executions],  
  currentProject: state.currentProject, 
  selectedExecution: {...state.selectedExecution}  
})

const setCurrentProjectBanners = (state, {payload}) => ({ 
  currentProjectBanners: [...payload], 
  projects: {...state.projects},
  executions:[...state.executions],
  currentProject: state.currentProject, 
  selectedExecution: {...state.selectedExecution} 
})

const loadExecutions = (state, {payload}) => ({ 
  executions: [...state.executions, ...payload], 
  projects: { ...state.projects }, 
  currentProjectBanners: [...state.currentProjectBanners], 
  currentProject: state.currentProject, 
  selectedExecution: {...state.selectedExecution} 
})

const setCurrentProject = (state, {payload}) => ({ 
  currentProject: payload, 
  executions: [...state.executions], 
  projects: { ...state.projects }, 
  currentProjectBanners: [...state.currentProjectBanners], 
  selectedExecution: {...state.selectedExecution} 
})

const removeProjects = (state, {payload}) => ({ 
  currentProject: null, executions: [], 
  projects: { ...state.projects }, 
  currentProjectBanners: [], 
  selectedExecution: {} 
});

const addExecutionToViewer = (state, {payload}) => ({  
  selectedExecution: {...state.selectedExecution, ...payload},  
  currentProject: state.currentProject, 
  executions: [...state.executions], 
  projects: { ...state.projects }, 
  currentProjectBanners: [...state.currentProjectBanners] 
});

const handlers = {
  [ADD_PROJECTS]: addProjects,
  [SET_CURRENT_PROJECT_BANNERS]: setCurrentProjectBanners,
  [LOAD_EXECUTIONS]: loadExecutions,
  [SET_CURRENT_PROJECT]: setCurrentProject,
  [REMOVE_PROJECTS]: removeProjects,
  [ADD_EXECUTION_TO_VIEWER]: addExecutionToViewer
};

export default createReducer(state, handlers);

