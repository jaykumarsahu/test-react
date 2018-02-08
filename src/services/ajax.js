import axios from 'axios';

const AJAX = {
 post: async function (url, data) {
   const response = await axios.post(url, data)
   return response.data;
 },

 get: async function (url, header)  {
   const response = await axios.get(url, header)
   return response.data;
 }
};

export default AJAX;
