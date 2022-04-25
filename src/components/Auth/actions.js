import axe from "../../helpers/axios";

export const login = (username, password) => {
  return axe
    .post("/user/login", {
      auth: {
        username,
        password,
      },
    })
    .then((response) => {
      console.log("Signed In");
      return response.data;
    });
};

export const setAxiosToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    axe.defaults.headers.common["token"] = token;
  } else {
    localStorage.removeItem("token");
    axe.defaults.headers.common["token"] = "";
  }
};

export const validateToken = () => {
  return axe.get("/user/token");
};
