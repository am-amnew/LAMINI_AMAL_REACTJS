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
            const { data } = await Axios.get(("http://localhost:8000/showtablebus"))
            setData(data)
        }
        fetchProducts()
    }, [])
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const { data } = await Axios.get("http://localhost:8000/delete/Bus");
        setData(data.data);
    };
    const deleteUser = async (id) => {
        try {
            await Axios.delete(`http://localhost:8000/delete/Bus/${id}`);
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
                        <th style={{ color: "blue" }}>PDA</th>
                        <th style={{ color: "blue" }}>PDA</th>
                        <th style={{ color: "blue" }}>adress</th>
                        <th style={{ color: "blue" }}>ligne</th>

                        <th style={{ color: "blue" }}>edit/delete</th>

                    </tr>
                </thead>
                <tbody>



                    {data.map((item) => (
                        <tr key={item._id}>

                            <td>{item.Prenom} </td>
                            <td>{item.Tele}</td>
                            <td>{item.Matricule}</td>

                            <td>{item.PDA}</td>
                            <td>{item.PDA}</td>
                            <td>{item.adress}</td>
                            <td>{item.ligne}</td>

                            <td>
                                <button>
                                    <Link
                                        to={`/edit/bus/${item._id}`}
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