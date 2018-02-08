import axios from 'axios';

const AJAX = {
  async post(url, data) {
    const response = await axios.post(url, data);
    return response.data;
  },

  async get(url, header) {
    const response = await axios.get(url, header);
    return response.data;
  },
};

export default AJAX;
