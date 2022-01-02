import axios from "axios";


export const fetchProduct = (productId) => {
      return axios.get(`api/products/${productId}`);
}


export const fetchProducts = () => {
      return axios.get('/api/products');
}

export const createProduct = (productData) => {
      return axios.post('api/products', productData);
}

export const updateProduct = (productData) => {
      return axios.patch(`/api/products/${productData.id}`, productData);
}


export const deleteProduct = (productId) => {
      return axios.delete(`/api/products/${productId}`,);
}


export const getUserProduct = (userId) => {
      return axios.get(`/api/products/user/${userId}`);
}