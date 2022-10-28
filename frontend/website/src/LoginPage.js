import { Link } from "react-router-dom";
import { useRef } from 'react';

function LoginPage() {
    const email = useRef("")
    const password = useRef("")
    function submitLogin(e){
        e.preventdefault();
        console.log(email.current.value)
        console.log(password.current.value)
    }
    return (
        <>
        <h1> Sign in </h1>
        <form onSubmit={submitLogin}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
        <label>
        <input type="checkbox" value="remember-me"/> Remember me 
        </label>
        </div>
        <Link to = "/">
            <button type="button" className="btn btn-primary">Sign in</button>
        </Link>
        </form>
        </>
    );
}

export default LoginPage;