import { isAuthenticate } from "../auth/localUser"
import { instance } from "./instance"

export const getAll = () => {
    const url = `/products`
    return instance.get(url)
}

export const get = (id) => {
    const url = `/product/${id}`
    return instance.get(url)
}

export const add = (data) => {
    const { user, token } = isAuthenticate()
    const url = `/product/${user._id}`
    return instance.post(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const removeProduct = (id) => {
    const {user, token } = isAuthenticate()
    const url = `/product/${id}/${user._id}`
    return instance.delete(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const updateProduct = (product) => {
    const {user, token} = isAuthenticate()
    const url = `product/${product._id}/${user._id}`
    return instance.put(url, product, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const searchProduct = (text) => {
    const url = `search?q=${text}`
    return instance.get(url);
}

export const sortProduct = (valueSort) => {
    const url = `sort?sort=${valueSort}&limit=8`
    return instance.get(url);
}

export const categoryProducts = (id) => {
    const url = `category/product/${id}`
    return instance.get(url);
}