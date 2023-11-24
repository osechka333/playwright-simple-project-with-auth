import dotenv from 'dotenv'

dotenv.config()

export const config = {
    baseURL: process.env.BASE_URL ?? "http://localhost",
    apiURL: process.env.API_URL ?? "http://localhost",
    httpCredentials: {
        username: 'guest',
        password: 'welcome2qauto'
    },
    reporters: {
        testomat: {
            key: process.env.TESTOMAT_KEY
        }
    }
}