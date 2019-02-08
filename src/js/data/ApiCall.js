require("dotenv").config();
export const getData = url => {
  return fetch(url, {
    headers: { "X-Auth-Token": process.env.FOOTBALL_API_KEY }
  })
    .then(data => data.json())
    .catch(err => console.error(err));
};
