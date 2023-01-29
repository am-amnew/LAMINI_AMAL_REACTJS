import Axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Reservercovoi = () => {
    const [Prenom, setPrenom] = useState('');

    const [Matricule, setMatricule] = useState('');

    const [Tele, setTele] = useState('');
    const [tarif, setTarif] = useState('');

    const [PDR, setPDR] = useState('');

    const [condition, setCondition] = useState('');
    const [offre, setOffre] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:8000/reservercovoi", {
                Prenom, Matricule, Tele, tarif, PDR, condition, offre
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
                                    <input className="form-control" type="text" name="Matricule" placeholder="Matricule" onChange={(e) => { setMatricule(e.target.value) }} required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Tele" placeholder="Tele" onChange={(e) => { setTele(e.target.value) }} required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="tarif" placeholder="Tarif" onChange={(e) => { setTarif(e.target.value) }} required />
                                    <div className="valid-feedback">Tarif field is valid!</div>
                                    <div className="invalid-feedback">Tarif field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="PDR" placeholder="Point de rencontre" onChange={(e) => { setPDR(e.target.value) }} required />
                                    <div className="valid-feedback">Point de rencontre de départ field is valid!</div>
                                    <div className="invalid-feedback">Point de rencontre de départ field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="condition" placeholder="Contition" onChange={(e) => { setCondition(e.target.value) }} required />
                                    <div className="valid-feedback">Contition de rencontre de départ field is valid!</div>
                                    <div className="invalid-feedback">Contition de rencontre de départ field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <select name="offre" onChange={(e) => { setOffre(e.target.value) }} className="form-select mt-3" required>
                                        <option selected disabled value>n° offre</option>
                                        <option value="jweb">1</option>
                                        <option value="sweb">2</option>
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

export default Reservercovoi