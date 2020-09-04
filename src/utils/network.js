import axiosClient from 'api/axiosClient';

function networkService() {
  function postData(url, body) {
    return axiosClient.post(url, body);
  }

  function getData(url, params = {}) {
    return axiosClient.get(url, { params });
  }

  function putData(url, body) {
    return axiosClient.put(url, body);
  }

  function deleteData(url, body) {
    return axiosClient.delete(url, body);
  }

  return {
    getData,
    postData,
    putData,
    deleteData
  };
}

const network = networkService();
export default network;