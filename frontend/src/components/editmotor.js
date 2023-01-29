import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
const Reserverbus = () => {

    const [Prenom, setPrenom] = useState('');
    const [Nom, setNom] = useState('');

    const [Matricule, setMatricule] = useState('');

    const [Tele, setTele] = useState('');
    const [heure, setHeure] = useState('');

    const [mat, setMat] = useState('');


    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        getUserById();
    }, []);


    const getUserById = async () => {
        const response = await Axios.get(`http://localhost:8000/edit/motor/${id}`);
        setPrenom(response.data.Prenom);
        setNom(response.data.nom);

        setMatricule(response.data.Matricule);
        setTele(response.data.Tele);


        setHeure(response.data.heure);
        setMat(response.data.mat);


    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await Axios.patch(`http://localhost:8000/edit/motor/${id}`, {
                Prenom,
                Nom,
                Matricule,

                Tele,
                heure,
                mat

            });
            navigate("/showmotor");
        } catch (error) {
            console.log(error);
        }
    };
    return (

        <div className="form-body">
            <div className="row">
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Reserver</h3>
                            <p>Fill in the data below:</p>
                            <form onSubmit={updateUser} className="requires-validation" noValidate>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" value={Prenom} name="Prenom" onChange={(e) => { setPrenom(e.target.value) }} placeholder="Prenom" required />
                                    <div className="valid-feedback">Prenom field is valid!</div>
                                    <div className="invalid-feedback">Prenom field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" value={Nom} onChange={(e) => { setNom(e.target.value) }} name="Nom" placeholder="Nom" required />
                                    <div className="valid-feedback">nom field is valid!</div>
                                    <div className="invalid-feedback">nom field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" value={Matricule} name="Matricule" onChange={(e) => { setMatricule(e.target.value) }} placeholder="Matricule" required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Tele" value={Tele} onChange={(e) => { setTele(e.target.value) }} placeholder="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" value={heure} name="heure" onChange={(e) => { setHeure(e.target.value) }} placeholder="heure" required />
                                    <div className="valid-feedback">heure field is valid!</div>
                                    <div className="invalid-feedback">heure field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <select className="form-select mt-3" name="mat" value={mat} onChange={(e) => { setMat(e.target.value) }} id="mat" required>
                                        <option selected disabled value>N° matricule</option>
                                        <option value="M234">M234</option>
                                        <option value="M000">M000</option>
                                    </select>
                                    <div className="valid-feedback">You selected a position!</div>
                                    <div className="invalid-feedback">Please select a position!</div>
                                </div>


                                <input type='submit' value="submit" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
}
export default Reserverbus;