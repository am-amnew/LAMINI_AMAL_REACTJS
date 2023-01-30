import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'


function SignuPadmin() {
    const [Prenom, setPrenom] = useState('');

    const [Tele, setTele] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("https://exam-lamini-amal-react.onrender.com/signuPadmin", {
                Prenom, Tele, email, password
            })
                .then(res => {
                    if (res.data = "exist") {
                        alert("successful")
                    } else if (res.data = " notexist") {
                        alert("do it again")
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
                            <h3>Register Administrator</h3>
                            <p>Fill in the data below:</p>
                            <form className="requires-validation" noValidate>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" onChange={(e) => { setPrenom(e.target.value) }} name="Prenom" placeholder="Prenom et nom" required />
                                    <div className="valid-feedback">Prenom et nom field is valid!</div>
                                    <div className="invalid-feedback">Prenom et nom  field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Tele" onChange={(e) => { setTele(e.target.value) }} placeholder="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>
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
                                    <input type='submit' onClick={submit} />
                                    <center>
                                        <Button href="/signinAdmin" variant="dark" >Sign in admin </Button>


                                    </center>
                                </div>




                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );

}

export default SignuPadmin