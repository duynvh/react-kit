import network from 'utils/network';

const productApi = {
  getAll: (params = {}) => {
    const url = '/products';
    return network.getData(url, params);
  },

  get: (id) => {
    const url = `/products/${id}`;
    return network.getData(url);
  },
};

export default productApi;
