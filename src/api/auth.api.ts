import http from '../utils/http'
import { AuthResponse } from '../types/auth.type'

const authApi = {
    registerAccount(body: { email: string; password: string }){return http.post<AuthResponse>('/register', body)},
    login(body: { email: string; password: string }){return http.post<AuthResponse>('/login', body)},
    logout() {return http.post('/logout')}
}
export default authApi