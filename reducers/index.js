import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import banner from './banner';
import client from './client';
import project from './project';

export default combineReducers({ routing, banner, client, project });
