import axios from 'axios'

export const makeRequest = axios.create({
    baseURL:'https://strapi-demo-app-7v79.onrender.com/api',
    headers:{
        Authorization:'bearer 5483309c6779be6a43594220ac5c18d5453f07a2044e69364d679c4b32fcf41c13a344ab752ccc70ba2051df473c1ffaac1453eb3a3596202a04b5cad051c4969119319db442a3456bccb7961b5284654ef4e0a97d869ca57fc7350abbd7da1e4b57a2099fc1fa1dd173d8591ac552d418a292137d81c16b13d44a0ccf1d2a5f'
    }
})