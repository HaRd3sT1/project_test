import { createAction } from 'redux-act';
import {defaultColors} from "../../Settings"
import {bookmarkSearch} from "./bookmarks"
import {repositoriesData} from "./repositories"
import {usersData} from "./users"

export const ONCHANGE = createAction('ONCHANGE');


const defaultColorsSet = (mode) => {
  let colors = defaultColors
  let root = document.documentElement;
  root.style.setProperty('--blue', colors.blue);
  root.style.setProperty('--indigo', colors.indigo);
  root.style.setProperty('--purple', colors.purple);
  root.style.setProperty('--pink', colors.pink);
  root.style.setProperty('--red', colors.red);
  root.style.setProperty('--orange', colors.orange);
  root.style.setProperty('--yellow', colors.yellow);
  root.style.setProperty('--green', colors.green);
  root.style.setProperty('--teal', colors.teal);
  root.style.setProperty('--cyan', colors.cyan);
  root.style.setProperty('--white', colors.white);
  root.style.setProperty('--white-soft', colors.whiteSoft);
  root.style.setProperty('--primary', colors.primary);
  root.style.setProperty('--primary-dark', colors.primaryDark);
  root.style.setProperty('--primary-light', colors.primaryLight);
  root.style.setProperty('--primary-light-2', colors.primaryLight2);
  root.style.setProperty('--primary-light-3', colors.primaryLight3);
  root.style.setProperty('--primary-color', colors.primaryColor);
  root.style.setProperty('--primary-color-light', colors.primaryColorLight);
  root.style.setProperty('--secondary', colors.secondary);
  root.style.setProperty('--secondary-dark', colors.secondaryDark);
  root.style.setProperty('--success', colors.success);
  root.style.setProperty('--success-dark', colors.successDark);
  root.style.setProperty('--info', colors.info);
  root.style.setProperty('--warning', colors.warning);
  root.style.setProperty('--danger', colors.danger);
  root.style.setProperty('--light', colors.light);
  root.style.setProperty('--dark', colors.dark);

}


export const onChange = (name, value) => {
    return async (dispatch, getState) => {
        dispatch(ONCHANGE({[name]:value}));
    };
};

export const searchData = (perPage) => {
    return async (dispatch, getState) => {
      const search = getState().dashboard.search;
      dispatch(repositoriesData(search, perPage))
      dispatch(usersData(search, perPage))
      dispatch(bookmarkSearch(search))
    };
};

export { defaultColorsSet };
