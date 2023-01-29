import Table from 'react-bootstrap/Table';

function tablebus() {
    return (
        <>
            <br /><br /><br />
            <Table striped>

                <thead>
                    <tr>
                        <th>Target</th>
                        <th>N° D'OFFRE	</th>
                        <th>PERSONNE</th>
                        <th>DATE DEPART	</th>
                        <th>DATE ARRIVÉE	</th>
                        <th>PRIX	</th>
                        <th>CHOIX	</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Euromed--Gare		</td>
                        <td>1	</td>
                        <td>Achraf aloui		</td>
                        <td>20/12/2022	</td>
                        <td>20/12/2022	</td>
                        <td> 20 DH</td>


                        <td>
                            <a href="/reservercovoi"><button className="btn">Reserver</button></a>
                        </td>                    </tr>

                </tbody>
            </Table>
        </>
    );
}

export default tablebus;