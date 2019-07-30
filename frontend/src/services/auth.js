import axios from 'axios'
const baseURL = 'http://localhost:3000'

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL,
            withCredentials: true
        })
    }
    signup(data) {
        return this.service.post('/signup', data)
    }
    login(data) {
        return this.service.post('/login', data)
    }
    logout() {
        return this.service.get('/logout')
    }
    profile() {
        return this.service.get('/profile')
    }

    edit(data, id) {
        return this.service.patch(`/profile/edit/${id}`, data)
    }

    // upload(data) {
    //     return this.service.post('/upload')
    // }

}

export default AuthService