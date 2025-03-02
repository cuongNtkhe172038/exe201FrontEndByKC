import axios, { AxiosError, type AxiosInstance } from 'axios'
import { useEffect, useRef } from 'react';
import HttpStatusCode from '../constraints/httpStatusCode.enum';
import { toast } from 'react-toastify';
import { clearAccessTokenFromLs, getAccessTokenFromLs, saveAcceptTokenToLs } from './auth';
import { AuthResponse } from '../types/auth.type';

class Http {
    instance: AxiosInstance
    private accessToken: string
    
    constructor() {
        this.accessToken = getAccessTokenFromLs() + ""
        this.instance = axios.create({
            baseURL: "https://api-ecom.duthanhduoc.com",
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' },
        })
        this.instance.interceptors.request.use((config) => {
            // console.log(getAccessTokenFromLs())
            // console.log(this.accessToken)
            if (this.accessToken && config.headers) {
                config.headers.authorization = this.accessToken
                return config;
            }
            return config;
        }, (error) => {

            return Promise.reject(error);
        });
        this.instance.interceptors.response.use(
            (response) => {
                const { url } = response.config
                if (url === "/login" || url === "/register") {
                    this.accessToken = (response.data as AuthResponse).data.access_token
                    saveAcceptTokenToLs(this.accessToken)
                    console.log(getAccessTokenFromLs())
                } else if (url === "/logout") {
                    this.accessToken = ""
                    clearAccessTokenFromLs()
                    console.log("test http",getAccessTokenFromLs())
                }
                
                return response
            },
             (error: AxiosError) => {
                if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
                    const data: any | undefined = error.response?.data
                    const message = data.message || error.message
                    toast.error(message)
                }
                return Promise.reject(error)
            }
        );
    }
}


const http = new Http().instance
export default http