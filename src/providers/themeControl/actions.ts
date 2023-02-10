const Type = {
  SET_DARK_MODE: "SET_DARK_MODE",
};

const setThemeDark = (payload: boolean) => ({
  payload,
  type: Type.SET_DARK_MODE,
});

export { Type, setThemeDark };
