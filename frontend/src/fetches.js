//PRODUCTS
const PRODUCTS_ROOT_URL = '/api/products/'
//const PRODUCT_BY_CATEGORIES_URL = PRODUCTS_ROOT_URL + '/category/'
//const PRODUCTS_BY_NAME = PRODUCTS_ROOT_URL + '/name/'
const PRODUCT_DETAILS_URL = PRODUCTS_ROOT_URL + '/detailed/'
const NEW_PRODUCT_URL = PRODUCTS_ROOT_URL
//TAGS
const TAGS_ROOT_URL = '/api/tags'
//USERS
const USERS_ROOT_URL = 'api/users'
const SIGN_UP_URL = USERS_ROOT_URL + '/signup'
const LOGIN_URL = USERS_ROOT_URL + '/login'

const getDataWithAuthorization = (url) => fetch(url, {
  headers: {
    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  }
})

const postFormData = (url, formData) => fetch(url, {
  headers: {
    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  }, method: 'POST', body: formData
})

const postJson = (url, data) => fetch(url, {
  method: 'POST', headers: {
    'Content-Type': 'application/json'
  }, body: JSON.stringify(data)
})

//PRODUCTS
export const getProducts = () => getDataWithAuthorization(PRODUCTS_ROOT_URL)
//export const getProductsByCategory = (category) => getDataWithAuthorization(PRODUCT_BY_CATEGORIES_URL + category)
//export const getProductsByName = (name) => getDataWithAuthorization(PRODUCTS_BY_NAME + name)
export const getProductsBy = (completeEndpoint) => getDataWithAuthorization(PRODUCTS_ROOT_URL + completeEndpoint)
export const getProductDetails = (id) => getDataWithAuthorization(PRODUCT_DETAILS_URL + id)
export const postNewProductForm = (formData) => postFormData(NEW_PRODUCT_URL, formData)
//TAGS
export const getTags = () => getDataWithAuthorization(TAGS_ROOT_URL)
//USERS
export const postSignUp = (data) => postJson(SIGN_UP_URL, data)
export const postLogIn = (data) => postJson(LOGIN_URL, data)
