import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Reservertaxi = () => {
    const [Prenom, setPrenom] = useState('');

    const [Matricule, setMatricule] = useState('');

    const [Tele, setTele] = useState('');
    const [destination, setDestination] = useState('');

    const [num, setNum] = useState('');


    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("https://exam-lamini-amal-react.onrender.com/reservertaxi", {
                Prenom, Matricule, Tele, destination, num
            })
                .then(res => {
                    if (res.data = "exist") {
                        alert("Succesfully reserved (-_-)")
                    } else if (res.data = " notexist") {
                        alert("an error accured reserve again")
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
                            <h3>Reserver</h3>
                            <p>Fill in the data below:</p>
                            <form action="POST" className="requires-validation" noValidate>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Prenom" onChange={(e) => { setPrenom(e.target.value) }} placeholder="Prenom et nom" required />
                                    <div className="valid-feedback">Prenom et nom field is valid!</div>
                                    <div className="invalid-feedback">Prenom et nom  field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" onChange={(e) => { setMatricule(e.target.value) }} name="Matricule" placeholder="Matricule" required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" onChange={(e) => { setTele(e.target.value) }} name="Tele" placeholder="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="destination" onChange={(e) => { setDestination(e.target.value) }} placeholder="Destination" required />
                                    <div className="valid-feedback">Destination de départ field is valid!</div>
                                    <div className="invalid-feedback">Destination de départ field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <select className="form-select mt-3" name="num" onChange={(e) => { setNum(e.target.value) }} required>
                                        <option selected disabled value>Entrer n° taxi</option>
                                        <option value="M1234">M1234</option>
                                        <option value="M000">M000</option>
                                    </select>
                                    <div className="valid-feedback">You selected a position!</div>
                                    <div className="invalid-feedback">Please select a position!</div>
                                </div>

                                <div className="form-button mt-3">
                                    <input className="btn btn-primary" type='submit' onClick={submit} />
                                    <center>
                                        <button>
                                            <Link
                                                to={`/s`}
                                                className="btn btn-primary">
                                                Go back
                                            </Link></button>
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

export default Reservertaxi