const initLogin = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/user/loginStatus`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

export { initLogin };
