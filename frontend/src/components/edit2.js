import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditUser = () => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [Prenom, setPrenom] = useState("");

    const [Tele, setTele] = useState("");
    const [Matricule, setMatricule] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);


    const getUserById = async () => {
        const response = await Axios.get(`http://localhost:8000/edit/${id}`);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setName(response.data.name);
        setPrenom(response.data.Prenom);

        setTele(response.data.Tele);

        setPassword(response.data.Matricule);

    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await Axios.patch(`http://localhost:8000/edit/${id}`, {
                email,

                password,
                name,
                Prenom,
                Tele,
                Matricule
            });
            navigate("/users");
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
                            <h3>Register Today</h3>
                            <p>Fill in the data below:</p>
                            <form onSubmit={updateUser} className="requires-validation" noValidate>
                                <div className="col-md-12">
                                    <input className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" name="email" placeholder="E-mail Address" required />
                                    <div className="valid-feedback">Email field is valid!</div>
                                    <div className="invalid-feedback">Email field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} type="text" id="name" name="password" placeholder="name" required />
                                    <div className="valid-feedback">Password field is valid!</div>
                                    <div className="invalid-feedback">Password field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" value={Prenom} onChange={(e) => { setPrenom(e.target.value) }} type="text" name="Prenom" id="Prenom" placeholder="Prenom et nom" required />
                                    <div className="valid-feedback">Prenom et nom field is valid!</div>
                                    <div className="invalid-feedback">Prenom et nom  field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="password" required />
                                    <div className="valid-feedback">Password field is valid!</div>
                                    <div className="invalid-feedback">Password field cannot be blank!</div>
                                </div>


                                <div className="col-md-12">
                                    <input className="form-control" value={Tele} onChange={(e) => { setTele(e.target.value) }} type="text" id="Tele" name="Tele" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" value={Matricule} onChange={(e) => { setTele(e.target.value) }} type="text" id="Matricule" name="Matricule" required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>

                                <button type="submit" className="button is-success" >  submit</button >



                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EditUser;