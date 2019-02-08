export const getData = url => {
  return fetch(url, {
    headers: { "X-Auth-Token": "f3ee45887fd14bcbb91b085778f99e30" }
  })
    .then(data => data.json())
    .catch(err => console.error(err));
};
