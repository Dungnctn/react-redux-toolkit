import { instance } from "./instance"

export const orderProduct = (order) => {
    const url = `/order`
    return instance.post(url, order)
}