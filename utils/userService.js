export const userApiUrl = "https://randomuser.me/api/";

export const fetchUsers = (amount = 10, page = 1) => {
  return fetch(userApiUrl + `?results=${amount}&page=${page}`)
    .then((resp) => resp.json())
    .then(function (data) {
      // throw new Error("Error loading the users.");
      return data.results;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
      throw new Error("Error loading the users.");
    });
};
