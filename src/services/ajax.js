import axios from 'axios';
import { toast } from 'react-toastify';

const AJAX = {
  async post(url, data) {
    const response = await axios.post(url, data).catch((error) => {
    	toast.error(({ closeToast }) => error.message);
    });
    if (response) { return response.data; }
  },

  async get(url, header) {
    const response = await axios.get(url, header).catch((error) => {
    	toast.error(({ closeToast }) => error.message);
    });
    if (response) { return response.data; }
  },
};

export default AJAX;
