import axios from 'axios';

const APIKEY = 'cWQytn3bMoHqQlqAmLNe7YwJCapZLMXd';

const service = axios.create({
  baseURL: 'http://api.giphy.com/v1',
  timeout: 5000,
});

export const searchGIFs = (query, limit=7) => {
  return service({
      url: '/gifs/search?' + 'q=' + query + '&limit=' + limit + '&api_key=' + APIKEY
  })
};
