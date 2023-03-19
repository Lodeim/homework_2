const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl= baseUrl;
    }

    getProductList() {
        return fetch(`${this._baseUrl}/products`, {
            headers: this._headers
        }).then(onResponce)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(onResponce)
    }

    getProductById(idProduct) {
        return fetch(`${this._baseUrl}/products/${idProduct}`, {
            headers: this._headers
        }).then(onResponce)
    }

    setUserInfo(dataUser) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(dataUser)
        }).then(onResponce)
    }

    signupUser(data){
        return fetch(`${this._baseUrl}/signup`, {
         method: 'POST',
         headers: {'content-type': 'application/json'},
         body: JSON.stringify(data)
     }).then(onResponce)
     }

    authUser(data){
       return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    }).then(onResponce).then(res => {
        res.token
        ? document.cookie = res.token
        : console.log(res)
    })
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {
            headers: this._headers
        }).then(onResponce)
    }

    changeLikeProduct(productId, isLike) {
        return fetch(`${this._baseUrl}/products/likes/${productId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: this._headers
        }).then(onResponce)
    }
    addProduct(body) {
        return fetch (`${this._baseUrl}/products/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body)
        }).then(onResponce)

    }
    addReview(body, id) {
        return fetch (`${this._baseUrl}/products/review/${id}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body)
        }).then(onResponce)

    }
    getReviews(id){
        return fetch (`${this._baseUrl}/products/review/${id}`,{
            headers: this._headers
        }).then(onResponce)
    }
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'content-type': 'application/json',
        Authorization: document.cookie
        // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U2MTVkNzU5Yjk4YjAzOGY3N2I0ZWYiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc2MDIzNDI1LCJleHAiOjE3MDc1NTk0MjV9.sN3kyESC9Qlq9Xg2R2guEDXp3ErtuwfBUD4d9pQP2IM'
    }
}

const api = new Api(config);

export default api;