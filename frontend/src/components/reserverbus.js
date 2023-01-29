import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Reserverbus = () => {
    const [Prenom, setPrenom] = useState('');

    const [Matricule, setMatricule] = useState('');

    const [Tele, setTele] = useState('');
    const [email, setEmail] = useState('');

    const [PDP, setPDP] = useState('');

    const [PDA, setPDA] = useState('');
    const [adress, setAdress] = useState('');
    const [ligne, setLigne] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:8000/reserverbus", {
                Prenom, Matricule, Tele, email, PDP, PDA, adress, ligne
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
                                    <input className="form-control" type="text" name="Prenom" placeholder="Prenom et nom" onChange={(e) => { setPrenom(e.target.value) }} required />
                                    <div className="valid-feedback">Prenom et nom field is valid!</div>
                                    <div className="invalid-feedback">Prenom et nom  field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Matricule" onChange={(e) => { setMatricule(e.target.value) }} placeholder="Matricule" required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" onChange={(e) => { setTele(e.target.value) }} name="Tele" placeholder="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="E-mail Address" required />
                                    <div className="valid-feedback">Email field is valid!</div>
                                    <div className="invalid-feedback">Email field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="PDP" onChange={(e) => { setPDP(e.target.value) }} placeholder="Point de départ" required />
                                    <div className="valid-feedback">Point de départ field is valid!</div>
                                    <div className="invalid-feedback">Point de départ field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="PDA" onChange={(e) => { setPDA(e.target.value) }} placeholder="Point de d'arrivée" required />
                                    <div className="valid-feedback">Point de d'arrivée field is valid!</div>
                                    <div className="invalid-feedback">Point de d'arrivée field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <select className="form-select mt-3" id="adress" name='adress' onChange={(e) => { setAdress(e.target.value) }} required>
                                        <option selected disabled value>Adress</option>
                                        <option value="Euromed">Euromed</option>
                                        <option value="Gare">Gare</option>
                                    </select>
                                    <div className="valid-feedback">You selected a position!</div>
                                    <div className="invalid-feedback">Please select a position!</div>
                                </div>
                                <div className="col-md-12">
                                    <select className="form-select mt-3" id="ligne" name='ligne' onChange={(e) => { setLigne(e.target.value) }} required>
                                        <option selected disabled value>Ligne</option>
                                        <option value="Euromed-gare">Euromed-gare</option>
                                        <option value="Euromed-ouedfes">Euromed-ouedfes</option>
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

export default Reserverbus