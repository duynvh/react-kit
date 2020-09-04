import network from 'utils/network';

const authApi = {
  signin: (body) => {
    const url = '/auth/signin';
    return network.postData(url, body);
  },

  signup: (body) => {
    const url = `/auth/signup`;
    return network.postData(url, body);
  },
};

export default authApi;
