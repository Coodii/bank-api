import axios from "axios";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export async function login(email, password){
    axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password
      })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });
}

