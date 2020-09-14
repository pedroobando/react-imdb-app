import axios from 'axios';

const apiKey = 'dc4b5780';
const urlBase = `http://www.omdbapi.com/?apikey=${apiKey}`;

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: urlBase + url,
    data,
    headers,
  });

export const apiImdb = async (url) => {
  const result = await fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return null;
    });

  return result;
};
