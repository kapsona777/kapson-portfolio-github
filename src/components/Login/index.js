import './index.scss'; 
import {useState} from 'react';  

var sha256 = require('js-sha256'); 

const Login = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(''); 
    
    const LoginClick = async (e) =>{
        e.preventDefault();
        setIsLoading(true);
        try{
            const response = await fetch('http://localhost:9000/auth',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    username: document.getElementById('username').value,
                    password: sha256(document.getElementById('password').value)
                })
            }).then(req => req.text()).then(console.log);

            if(!response.ok){
                throw new Error(`Error! status : ${response.status}`);
            }

            const result = await response.json();

            console.log("result is:", JSON.stringify(result,null,4));
    
            setData(result);
        }catch(err){
            setErr(err.message);
        }finally{
            setIsLoading(false); 
        }
    }

    console.log(data);
    

    return (
        <div className="loginContainer">
            <div className="login">
                <h1>LOGIN</h1>
                <form>
                    <input className='defaultInputs' id="username" type="text" placeholder="Username" />
                    <input className='defaultInputs' id="password" type="password" placeholder="Password" />
                    <button onClick={LoginClick} className='defaultButtons' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;