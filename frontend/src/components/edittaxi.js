import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
const Reserverbus = () => {

    const [Prenom, setPrenom] = useState('');
    const [Tele, setTele] = useState('');

    const [Matricule, setMatricule] = useState('');


    const [destination, setDestination] = useState('');

    const [num, setNum] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        getUserById();
    }, []);


    const getUserById = async () => {
        const response = await Axios.get(`http://localhost:8000/edit/taxi/${id}`);
        setPrenom(response.data.Prenom);
        setTele(response.data.Tele);
        setMatricule(response.data.Matricule);


        setDestination(response.data.destination);
        setNum(response.data.num);

    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await Axios.patch(`http://localhost:8000/edit/taxi/${id}`, {
                Prenom,

                Tele,
                Matricule,
                destination,
                num

            });
            navigate("/showtaxi");
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
                                    <input className="form-control" value={Prenom} type="text" name="Prenom" onChange={(e) => { setPrenom(e.target.value) }} placeholder="Prenom et nom" required />
                                    <div className="valid-feedback">Prenom et nom field is valid!</div>
                                    <div className="invalid-feedback">Prenom et nom  field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" value={Matricule} type="text" onChange={(e) => { setMatricule(e.target.value) }} name="Matricule" placeholder="Matricule" required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" value={Tele} onChange={(e) => { setTele(e.target.value) }} name="Tele" placeholder="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" value={destination} name="destination" onChange={(e) => { setDestination(e.target.value) }} placeholder="Destination" required />
                                    <div className="valid-feedback">Destination de départ field is valid!</div>
                                    <div className="invalid-feedback">Destination de départ field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <select className="form-select mt-3" value={num} name="num" onChange={(e) => { setNum(e.target.value) }} required>
                                        <option selected disabled value>Entrer n° taxi</option>
                                        <option value="M1234">M1234</option>
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