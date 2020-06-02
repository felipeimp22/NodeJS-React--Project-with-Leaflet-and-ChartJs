import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  email: null,
  setToken: () => { },
});

export default StoreContext;
