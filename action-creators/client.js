import { GET_BANNERS, ADD_BANNERS } from '../actions';
import fetch from 'whatwg-fetch';
import 'babel-polyfill';

export function selectProject(id) {
  return {
    type: ADD_BANNERS,
    payload: id
  };
}