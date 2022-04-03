import { instance } from "./instance";

export const signupAPI = (data) => {
    const url = `signup`;
    return instance.post(url, data)
}

export const signinAPI = (data) => {
    const url = `signin`
    return instance.post(url, data)
}

export const getAllUser = () => {
    const url = `listuser`
    return instance.get(url);
}