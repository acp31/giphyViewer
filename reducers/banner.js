import { ADD_BANNERS } from '../actions';
import { createReducer } from '../utils';

const inital = { banners: [] };

const addBanners = (state, { payload }) => {
  return { banners: [...state.banners, ...payload] }
}

const handlers = {
  [ADD_BANNERS]: addBanners,
}

export default createReducer(inital, handlers);