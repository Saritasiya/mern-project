import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });




    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }

    const URL = "http://localhost:5002/api/auth/login";
    const handleSubmit =async   (e) => {
        e.preventDefault();
       try {
           const response = await fetch(URL, {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify(user),
           });
           console.log("login form", response);

           const res_data = await response.json();

           if (response.ok) {
               
               storeTokenInLS(res_data.token);
               
            alert("login successful");
               setUser({ email: "", password: "" });
               navigate("/")
           } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            console.log("invalid credential");
           }
       } catch (error) {
        console.log(error)
       }
    }
    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/login-img.jpg"
                                    alt="login"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            {/* let tackle  registration form */}
                            <div className="registration-form">
                                <h1 className=" main-headingmb-3">Login Form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder=" enter your email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder=" enter your password "
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <button type="submit"btn-register-submit >Register Now</button>
                                    
                                </form>
                            </div>

                            </div>
                    </div>
                </main>
            </section>
        </>
    )
};