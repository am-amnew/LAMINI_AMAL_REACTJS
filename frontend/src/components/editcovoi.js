import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
const Reserverbus = () => {

    const [Prenom, setPrenom] = useState('');

    const [Matricule, setMatricule] = useState('');

    const [Tele, setTele] = useState('');
    const [tarif, setTarif] = useState('');

    const [PDR, setPDR] = useState('');

    const [condition, setCondition] = useState('');
    const [offre, setOffre] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        getUserById();
    }, []);


    const getUserById = async () => {
        const response = await Axios.get(`http://localhost:8000/edit/covoi/${id}`);
        setPrenom(response.data.Prenom);

        setMatricule(response.data.Matricule);
        setTele(response.data.Tele);


        setTarif(response.data.tarif);
        setPDR(response.data.PDR);
        setCondition(response.data.condition);

        setOffre(response.data.offre);

    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await Axios.patch(`http://localhost:8000/edit/covoi/${id}`, {
                Prenom,
                Matricule,

                Tele,
                tarif,
                PDR,
                condition,
                offre

            });
            navigate("/showcovoi");
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
                                    <input className="form-control" type="text" name="Prenom" value={Prenom} placeholder="Prenom et nom" onChange={(e) => { setPrenom(e.target.value) }} required />
                                    <div className="valid-feedback">Prenom et nom field is valid!</div>
                                    <div className="invalid-feedback">Prenom et nom  field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Matricule" value={Matricule} placeholder="Matricule" onChange={(e) => { setMatricule(e.target.value) }} required />
                                    <div className="valid-feedback">Matricule field is valid!</div>
                                    <div className="invalid-feedback">Matricule field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="Tele" value={Tele} placeholder="Tele" onChange={(e) => { setTele(e.target.value) }} required />
                                    <div className="valid-feedback">Tele field is valid!</div>
                                    <div className="invalid-feedback">Tele field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="tarif" value={tarif} placeholder="Tarif" onChange={(e) => { setTarif(e.target.value) }} required />
                                    <div className="valid-feedback">Tarif field is valid!</div>
                                    <div className="invalid-feedback">Tarif field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="PDR" value={PDR} placeholder="Point de rencontre" onChange={(e) => { setPDR(e.target.value) }} required />
                                    <div className="valid-feedback">Point de rencontre de départ field is valid!</div>
                                    <div className="invalid-feedback">Point de rencontre de départ field cannot be blank!</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="condition" value={condition} placeholder="Contition" onChange={(e) => { setCondition(e.target.value) }} required />
                                    <div className="valid-feedback">Contition de rencontre de départ field is valid!</div>
                                    <div className="invalid-feedback">Contition de rencontre de départ field cannot be blank!</div>
                                </div>

                                <div className="col-md-12">
                                    <select name="offre" value={offre} onChange={(e) => { setOffre(e.target.value) }} className="form-select mt-3" required>
                                        <option selected disabled value>n° offre</option>
                                        <option value="jweb">1</option>
                                        <option value="sweb">2</option>
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