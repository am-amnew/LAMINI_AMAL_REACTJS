import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Axios from "axios"
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom'
function Signin() {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:8000/signin", {
                email, password
            })
                .then(res => {
                    if (res.data = "exist") {

                        history("/s")
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
                            <h3>Are you sure you want to delete ?</h3>
                            <p>If yes then come back to the table:</p>


                            <form action="POST" className="requires-validation" noValidate>
                                <center>
                                    <Button href="/signuP" variant="dark" >Sign UP </Button>
                                    <br />
                                    <br />
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

export default Signin