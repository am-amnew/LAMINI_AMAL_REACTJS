import Axios from "axios";
import React, { useEffect, useState, onDelete } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";




function Home() {
    const navigate = useNavigate();
    const refresh = () => window.location.reload(true)

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await Axios.get(("https://exam-lamini-amal-react.onrender.com/showcovoi"))
            setData(data)
        }
        fetchProducts()
    }, [])
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const { data } = await Axios.get("https://exam-lamini-amal-react.onrender.com/delete/covoi");
        setData(data.data);
    };
    const deleteUser = async (id) => {
        try {
            await Axios.delete(`https://exam-lamini-amal-react.onrender.com/delete/covoi/${id}`);
            getData();


        } catch (error) {
            console.log(error);
        }
    };



    return (
        <>
            <br /><br /><br />
            <Table striped>

                <thead>
                    <tr>
                        <th style={{ color: "blue" }}>Prenom</th>
                        <th style={{ color: "blue" }}>Tele</th>
                        <th style={{ color: "blue" }}>Matricule</th>
                        <th style={{ color: "blue" }}>tarif</th>
                        <th style={{ color: "blue" }}>PDR</th>
                        <th style={{ color: "blue" }}>condition</th>
                        <th style={{ color: "blue" }}>offre</th>

                        <th style={{ color: "blue" }}>edit/delete</th>

                    </tr>
                </thead>
                <tbody>


                    {data.map((item) => (
                        <tr key={item._id}>

                            <td>{item.Prenom} </td>
                            <td>{item.Tele}</td>
                            <td>{item.Matricule}</td>

                            <td>{item.tarif}</td>
                            <td>{item.PDR}</td>
                            <td>{item.condition}</td>
                            <td>{item.offre}</td>


                            <td>
                                <button>
                                    <Link
                                        to={`/edit/covoi/${item._id}`}
                                        className="button is-info is-small mr-1">
                                        Edit
                                    </Link></button>
                                <button
                                    onClick={() => deleteUser(item._id)}
                                    className="button is-danger is-small">
                                    Delete
                                </button>
                                <button onClick={refresh}>Refresh</button>
                            </td>



                        </tr>
                    ))}
                </tbody>
            </Table >
        </>
    );
}
export default Home;