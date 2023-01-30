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
            const { data } = await Axios.get(("https://exam-lamini-amal-react.onrender.com/showcomment"))
            setData(data)
        }
        fetchProducts()
    }, [])
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const { data } = await Axios.get("https://exam-lamini-amal-react.onrender.com/delete/comment");
        setData(data.data);
    };
    const deleteUser = async (id) => {
        try {
            await Axios.delete(`https://exam-lamini-amal-react.onrender.com/delete/comment/${id}`);
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
                        <th style={{ color: "blue" }}>Comment</th>
                        <th style={{ color: "blue" }}>name</th>


                        <th style={{ color: "blue" }}>edit/delete</th>

                    </tr>
                </thead>
                <tbody>



                    {data.map((item) => (
                        <tr key={item._id}>

                            <td>{item.name} </td>
                            <td>{item.comment}</td>


                            <td>

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