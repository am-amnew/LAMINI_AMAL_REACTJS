import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'


function SignuP() {
    const [Matricule, setMatricule] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [name, setName] = useState('');

    const [Tele, setTele] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:8000/signup", {
                Matricule, Prenom, name, Tele, email, password
            })
                .then(res => {
                    if (res.data = "exist") {
                        alert("successful")
                    } else if (res.data = " notexist") {
                        alert("Do it again")
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
                            <h3>Register Today</h3>
                            <p>Fill in the data below:</p>
                            <form action='POST' className="requires-validation" noValidate>
                                <div className="col-md-12">
                                    <input className="form-control" onChange={(e) => { setMatricule(e.target.value) }} type="text" id="Matricule" name="Matricule" placeholder="Matricule" required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" onChange={(e) => { setPrenom(e.target.value) }} type="text" name="Prenom" id="Prenom" placeholder="Prenom " required />
                                    <div className="valid-feedback">Prenom et nom field is valid!</div>
                                    <div className="invalid-feedback">Prenom et nom  field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" onChange={(e) => { setName(e.target.value) }} type="text" name="name" id="name" placeholder="name" required />
                                    <div className="valid-feedback">Nom field is valid!</div>
                                    <div className="invalid-feedback">Nom  field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" onChange={(e) => { setTele(e.target.value) }} type="text" id="Tele" name="Tele" placeholder="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" name="email" placeholder="E-mail Address" required />
                                    <div className="valid-feedback">Email field is valid!</div>
                                    <div className="invalid-feedback">Email field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="password" placeholder="Password" required />
                                    <div className="valid-feedback">Password field is valid!</div>
                                    <div className="invalid-feedback">Password field cannot be blank!</div>
                                </div>

                                <div className="form-button mt-3">
                                    <input type='submit' onClick={submit} />
                                    <center>
                                        <Button href="/signin" variant="dark" >Sign in </Button>
                                        <br /><br></br>
                                        <Button href="/signuPadmin" style={{ left: '0' }} variant="dark" >Sign UP admin </Button>

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

export default SignuP