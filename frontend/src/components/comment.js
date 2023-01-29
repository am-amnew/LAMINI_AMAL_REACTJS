import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'


function SignuPadmin() {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');


    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:8000/comment", {
                comment, name
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
                            <h3>Leave a comment</h3>
                            <p>What ever good or bad :</p>
                            <form className="requires-validation" noValidate>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" onChange={(e) => { setName(e.target.value) }} name="name" placeholder="name" required />
                                    <div className="valid-feedback">name field is valid!</div>
                                    <div className="invalid-feedback">name cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" onChange={(e) => { setComment(e.target.value) }} name="coment" placeholder="comment" required />
                                    <div className="valid-feedback">comment field is valid!</div>
                                    <div className="invalid-feedback">comment cannot be blank!</div>
                                </div>

                                <div className="form-button mt-3">
                                    <input type='submit' onClick={submit} />
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