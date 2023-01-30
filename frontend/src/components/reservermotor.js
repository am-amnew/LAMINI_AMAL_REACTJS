import './form.css'
import Axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Reservermotor = () => {
    const [Prenom, setPrenom] = useState('');
    const [Nom, setNom] = useState('');

    const [Matricule, setMatricule] = useState('');

    const [Tele, setTele] = useState('');
    const [heure, setHeure] = useState('');

    const [mat, setMat] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("https://exam-lamini-amal-react.onrender.com/reservermotor", {
                Prenom, Nom, Matricule, Tele, heure, mat
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
                                    <input className="form-control" type="text" name="Prenom" onChange={(e) => { setPrenom(e.target.value) }} placeholder="Prenom" required />
                                    <div className="valid-feedback">Prenom field is valid!</div>
                                    <div className="invalid-feedback">Prenom field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" onChange={(e) => { setNom(e.target.value) }} name="Nom" placeholder="Nom" required />
                                    <div className="valid-feedback">nom field is valid!</div>
                                    <div className="invalid-feedback">nom field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Matricule" onChange={(e) => { setMatricule(e.target.value) }} placeholder="Matricule" required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Tele" onChange={(e) => { setTele(e.target.value) }} placeholder="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="heure" onChange={(e) => { setHeure(e.target.value) }} placeholder="heure" required />
                                    <div className="valid-feedback">heure field is valid!</div>
                                    <div className="invalid-feedback">heure field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <select className="form-select mt-3" name="mat" onChange={(e) => { setMat(e.target.value) }} id="mat" required>
                                        <option selected disabled value>N° matricule</option>
                                        <option value="M234">M234</option>
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
export default Reservermotor