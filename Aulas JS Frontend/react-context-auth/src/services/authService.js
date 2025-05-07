import axios from 'axios'

const API_URL = "https://681b998117018fe5057c266c.mockapi.io/users";


export const loginRequest = async (username, password) => {
    try {
        const response = await axios.get(API_URL);
        const users = response.data

        const user = users.find ((user) => user.username === username && user.password === password
    )
      return user ? {success: true, user} : {success: false};


    }catch(error) {
        console.error("Erro de autenticação", error)
        return {success: false};
    }
}