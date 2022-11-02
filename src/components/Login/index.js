import './index.scss';

const Login = () => {
    return (
        <div class="loginContainer">
            <div class="login">
                <h1>LOGIN</h1>
                <form>
                    <input class='defaultInputs' type="text" placeholder="Username" />
                    <input class='defaultInputs' type="password" placeholder="Password" />
                    <button class='defaultButtons' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;