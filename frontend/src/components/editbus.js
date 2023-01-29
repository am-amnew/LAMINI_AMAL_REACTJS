import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
const Reserverbus = () => {
    const [Prenom, setPrenom] = useState('');
    const [Tele, setTele] = useState('');

    const [Matricule, setMatricule] = useState('');


    const [PDP, setPDP] = useState('');

    const [PDA, setPDA] = useState('');
    const [adress, setAdress] = useState('');
    const [ligne, setLigne] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        getUserById();
    }, []);


    const getUserById = async () => {
        const response = await Axios.get(`http://localhost:8000/edit/bus/${id}`);
        setPrenom(response.data.Prenom);
        setTele(response.data.Tele);
        setMatricule(response.data.Matricule);
        setPDP(response.data.PDP);

        setPDA(response.data.PDA);

        setAdress(response.data.adress);
        setLigne(response.data.ligne);

    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await Axios.patch(`http://localhost:8000/edit/bus/${id}`, {
                Prenom,

                Tele,
                Matricule,
                PDP,
                PDA,
                adress,
                ligne
            });
            navigate("/showtablebus");
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
                                    <input className="form-control" type="text" value={Prenom} name="Prenom" placeholder="Prenom et nom" onChange={(e) => { setPrenom(e.target.value) }} required />
                                    <div className="valid-feedback">Prenom et nom field is valid!</div>
                                    <div className="invalid-feedback">Prenom et nom  field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Matricule" value={Matricule} onChange={(e) => { setMatricule(e.target.value) }} placeholder="Matricule" required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" value={Tele} onChange={(e) => { setTele(e.target.value) }} name="Tele" placeholder="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="PDP" value={PDP} onChange={(e) => { setPDP(e.target.value) }} placeholder="Point de départ" required />
                                    <div className="valid-feedback">Point de départ field is valid!</div>
                                    <div className="invalid-feedback">Point de départ field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="PDA" value={PDA} onChange={(e) => { setPDA(e.target.value) }} placeholder="Point de d'arrivée" required />
                                    <div className="valid-feedback">Point de d'arrivée field is valid!</div>
                                    <div className="invalid-feedback">Point de d'arrivée field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <select className="form-select mt-3" id="adress" name='adress' value={adress} onChange={(e) => { setAdress(e.target.value) }} required>
                                        <option selected disabled value>Adress</option>
                                        <option value="Euromed">Euromed</option>
                                        <option value="Gare">Gare</option>
                                    </select>
                                    <div className="valid-feedback">You selected a position!</div>
                                    <div className="invalid-feedback">Please select a position!</div>
                                </div>
                                <div className="col-md-12">
                                    <select className="form-select mt-3" id="ligne" name='ligne' value={ligne} onChange={(e) => { setLigne(e.target.value) }} required>
                                        <option selected disabled value>Ligne</option>
                                        <option value="Euromed-gare">Euromed-gare</option>
                                        <option value="Euromed-ouedfes">Euromed-ouedfes</option>
                                    </select>
                                    <div className="valid-feedback">You selected a position!</div>
                                    <div className="invalid-feedback">Please select a position!</div>
                                </div>

                                <button type="submit" className="button is-success" >submit</button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}


export default Reserverbus