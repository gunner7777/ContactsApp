export const loadState = () => {
  try {
    const localStorageState = localStorage.getItem('state');
    if(localStorageState === null) {
      return undefined;
    }
    return JSON.parse(localStorageState);

  } catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem('state', localStorageState);
  } catch (err) {

  }
}