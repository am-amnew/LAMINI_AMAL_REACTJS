import Table from 'react-bootstrap/Table';

function tablebus() {
    return (
        <>
            <br /><br /><br />
            <Table striped>

                <thead>
                    <tr>
                        <th>Date depart</th>
                        <th>Date arrivée</th>
                        <th>Ligne</th>
                        <th>Matricule</th>
                        <th>Prix</th>
                        <th>Reservation et location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>18:30	</td>
                        <td>19:15	</td>
                        <td>Gare--Euromed	</td>
                        <td>M20202</td>
                        <td>20 DH</td>
                        <td>
                            <a href="/reserverbus"><button className="btn">Reserver</button></a>
                        </td>                    </tr>
                    <tr>
                        <td>07:00</td>
                        <td>07:30</td>
                        <td>bensouda--Euromed	</td>
                        <td>M12020</td>
                        <td>10 DH</td>
                        <td>
                            <a href="/reserverbus"><button className="btn">Reserver</button></a>
                        </td>
                    </tr>


                    <tr>
                        <td>07:30</td>
                        <td > 07:45	</td>
                        <td>euromed-ouedfes</td>
                        <td>M1234</td>
                        <td>8 DH</td>
                        <td>
                            <a href="/reserverbus"><button className="btn">Reserver</button></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default tablebus;