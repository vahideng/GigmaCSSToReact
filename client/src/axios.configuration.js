
import axios from '../react/node_modules/axios'

const instance = axios.create({

    baseURL: `https://api.figma.com`,
    headers : {
        'X-Figma-Token' :`${process.env.REACT_APP_FIGMA_TOKEN}`
    },
    withCredentials : true

}

)

 export default instance