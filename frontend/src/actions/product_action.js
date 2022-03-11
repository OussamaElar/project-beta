import * as APIUtil from '../util/product_api_util'

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_USER_PRODUCTS = "RECEIVE_USER_PRODUCTS";



export const recieveProducts = products => ({
      type: RECEIVE_PRODUCTS,
      products
})


export const recieveProduct = product => ({
      type: RECEIVE_PRODUCT,
      product
})

export const removeProduct = productId => ({
      type: REMOVE_PRODUCT,
      productId
})


export const recieveUserProducts = products => ({
      type: RECEIVE_USER_PRODUCTS,
      products
})

export const fetchProducts = () => dispatch => (
      APIUtil.fetchProducts().then((products) => (
            dispatch((recieveProducts(products)))
      ))
)


export const fetchProduct = productId => dispatch => (
      APIUtil.fetchProduct(productId).then((product) => (
            dispatch(recieveProduct(product))
      ))
)

export const deleteProduct = productId => dispatch => (
      APIUtil.deleteProduct(productId).then((product) => (
            dispatch(removeProduct(product))
      ))
)

export const createProduct = (productData) => dispatch => (
      APIUtil.createProduct(productData).then((product) => (
            dispatch(recieveProduct(product))
      ))
)

export const updateProduct = productData => dispatch => (
      APIUtil.updateProduct(productData).then((product) => (
            dispatch(recieveProduct(product))
      ))
)

export const getUserProducts = (userId) => dispatch => (
      APIUtil.getUserProduct(userId).then((products) => (
            dispatch((recieveUserProducts(products)))
      ))
)