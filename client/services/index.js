import axios from "axios";



/* auth */


// Register user
export const register = async (userData) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_LINK +"/user" , userData)

    if(response.data){
        localStorage.setItem('movies-user' , JSON.stringify(response.data) )
    }

    return response.data
}

// login 
export const login = async (userData) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_LINK +"/user/login", userData)

    if(response.data){
        localStorage.setItem('movies-user' , JSON.stringify(response.data) )
    }

    return response.data
}

// logout
export const logout =  () => {
    localStorage.removeItem('movies-user')
}