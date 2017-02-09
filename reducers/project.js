import { GET_BANNER_SIZE, SELECT_BANNER } from '../actions';
import { createReducer } from '../utils';

const initial = { url: null, size: null,  executions: [] };

const addUrl = (state, { payload }) => ({ url: payload })

const changeSize = (state, { payload }) => ({ size: payload })
  

const handlers = {
  [SELECT_BANNER]: addUrl,
  [GET_BANNER_SIZE]: changeSize
}

export default createReducer(initial, handlers);