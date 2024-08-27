import axios from 'axios';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
});

export const getUserProfile = (username) => {
  return githubAPI.get(`/users/${username}`);
};

export const getUserRepositories = (username) => {
  return githubAPI.get(`/users/${username}/repos`);
};
