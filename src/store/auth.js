// Actions
const types = {
  authLogin: "[auth] Login",
  authLogout: "[auth] Logout",
};

const initialState = JSON.parse(localStorage.getItem("user")) || {};

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return { ...action.payload };
    case types.authLogout:
      return {};
    default:
      return state;
  }
};

// Action Creators
const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const logout = () => ({
  type: types.authLogout,
});

// side effects, only as applicable
// e.g. thunks, epics, etc
export const startLogin = (username) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = response.status === 200 && (await response.json());
    const user = { ...json, token: json.node_id };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(login(user));
  } catch (e) {
    alert("Error al iniciar sesión");
  }
};

export const startLogout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(logout());
};
