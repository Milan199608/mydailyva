import appSlice, {actions as appOtherActions} from "./app-slice/app-slice";


export const appActions = {...appSlice.actions, ...appOtherActions};

export const reducer = {
  app: appSlice.reducer,
  
};

import initializeStore from "./store";
export default initializeStore;
