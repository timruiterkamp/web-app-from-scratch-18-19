require("dotenv").config();
export const getData = url => {
  const apiKey = process.env.FOOTBALL_API_KEY;
  return fetch(url, { headers: { "X-Auth-Token": apiKey } })
    .then(data => data.json())
    .catch(err => console.error(err));
};
