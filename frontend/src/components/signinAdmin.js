import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom'
import Axios from "axios"


const SigninAdmin = () => {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:8000/signinAdmin", {
                email, password
            })
                .then(res => {
                    if (res.data = "exist") {

                        history("/s2")
                    } else if (res.data = "notexist") {
                        alert("User have not sign uP")
                    }
                })
                .catch(e => {
                    alert("wrong")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);
        }
    }
    return (


        <div className="form-body">
            <div className="row">
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Sign in Administrator</h3>
                            <p>Fill in the data below:</p>
                            <form action="POST" className="requires-validation" noValidate>
                                <div className="col-md-12">
                                    <input className="form-control" onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" placeholder="E-mail Address" required />
                                    <div className="valid-feedback">Email field is valid!</div>
                                    <div className="invalid-feedback">Email field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" placeholder="Password" required />
                                    <div className="valid-feedback">Password field is valid!</div>
                                    <div className="invalid-feedback">Password field cannot be blank!</div>
                                </div>



                                <div className="form-button mt-3">
                                    <input type='submit' onClick={submit} />                                </div>
                                <center>

                                    <Button href="/signuPadmin" variant="dark" >Sign UP admin </Button>

                                </center>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default SigninAdmin