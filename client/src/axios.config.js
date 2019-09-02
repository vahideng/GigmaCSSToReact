

import axios from 'axios'



 const instance = axios.create({
    baseURL: `api/`,
    headers : {
        'X-Figma-Token': `${process.env.REACT_APP_FIGMA_TOKEN}`
    },
    withCredentials: true
});

export default instance
