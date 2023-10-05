import { Link } from "react-router-dom";
import Navbar from "../../Layout/Shared/navbar/Navbar";


const Login = () => {
    const handleLogIn = e =>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        console.log(form.get('email'));
        console.log(form.get('password'));
    }

    
    return (

        <div className="p-4">
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col border rounded-xl">
                    <div className="text-center lg:text-left p-8">
                        <h1 className="text-4xl font-bold">Login your account</h1>
                        <div className="divider"></div> 
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body"onSubmit={handleLogIn} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className="text-center">Dont’t Have An Account ? <Link className="text-blue-600 font-bold" to={"/register"}   >Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;