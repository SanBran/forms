import axios from 'axios'

export default function(data) {
    return async function () {
        try {
          const response = await axios.post(`/newForm`, data);
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      };
}