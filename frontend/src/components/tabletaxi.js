import Table from 'react-bootstrap/Table';

function tablebus() {
    return (
        <>
            <br /><br /><br />
            <Table striped>

                <thead>
                    <tr>
                        <th>Target</th>
                        <th>N° TAXI	</th>
                        <th>PERSONNE</th>
                        <th>LES HEURES DISPONIBLES	</th>
                        <th>TELEPONE</th>
                        <th>PRIX</th>
                        <th>CHOIX</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Euromed--Gare	</td>
                        <td>M234</td>
                        <td>Achraf aloui</td>
                        <td>18:30--20:00</td>
                        <td>0613140321</td>
                        <td>20 DH</td>

                        <td>
                            <a href="/reservertaxi"><button className="btn">Reserver</button></a>
                        </td>                    </tr>
                    <tr>
                        <td>Euromed--ouedFes	</td>
                        <td>M456</td>
                        <td>Mohammed lazhar		</td>
                        <td>12:35--12:45</td>
                        <td>0666666666</td>
                        <td>10 DH</td>

                        <td>
                            <a href="/reservertaxi"><button className="btn">Reserver</button></a>
                        </td>
                    </tr>


                    <tr>
                        <td>Euromed--Gare	</td>
                        <td > M234</td>
                        <td>Achraf aloui	</td>
                        <td>18:30--20:00</td>
                        <td>0613140321</td>
                        <td>20 DH</td>

                        <td>
                            <a href="/reservertaxi"><button className="btn">Reserver</button></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default tablebus;