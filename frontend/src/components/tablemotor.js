import Table from 'react-bootstrap/Table';

function tablebus() {
    return (
        <>
            <br /><br /><br />
            <Table striped>

                <thead>
                    <tr>
                        <th>N° Motor	</th>
                        <th>Prix</th>
                        <th>Choix	</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>M234		</td>
                        <td>20 DH	</td>


                        <td>
                            <a href="/reservermotor"><button className="btn">Reserver</button></a>
                        </td>                    </tr>
                    <tr>
                        <td>M000</td>
                        <td>30 DH</td>


                        <td>
                            <a href="/reservermotor"><button className="btn">Reserver</button></a>
                        </td>
                    </tr>


                    <tr>
                        <td>Euromed--Gare	</td>
                        <td > M234</td>


                        <td>
                            <a href="/reservermotor"><button className="btn">Reserver</button></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default tablebus;