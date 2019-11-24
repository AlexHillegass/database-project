import React, {useState, useEffect} from 'react';
import '../App.css';
import StudentNav from './StudentNav';
import { Table, Form, Header, Divider, Button, Modal, List } from 'semantic-ui-react';
import axios from 'axios';

const exampleRsos = [
    {
        rsoID: '1',
        rsoName: 'RSO 1',
        ownerID: 'Bob',
        approved: 1,
    },
    {
        rsoID: '2',
        rsoName: 'RSO 2',
        ownerID: 'Bob',
        approved: 1,
    },
    {
        rsoID: '3',
        rsoName: 'RSO 3',
        ownerID: 'Bob',
        approved: 0,
    }
]

function Rsos({ match }) {

    useEffect(() => {
        fetchRsos();
    }, []);

    const [rsos, setRsos] = useState([]);

    const [rsoName, setRsoName] = useState('');
    const [descrit, setDescript] = useState('');

    const fetchRsos = async () => {
        // get events data

        // https://www.youtube.com/watch?v=Law7wfdg_ls 18:39
        
        // View a list of events
        setRsos(exampleRsos);
    }

    const requestCreateRso = async () => {
        let success = false;

        if (success) {
            alert("Rso Created");
            fetchRsos();
        } else {
            alert("Rso Creation Failed");
        }
    }

    const requestJoinRso = async (rsoID) => {
        let success = true;

        if (success) {
            alert("Rso Joined");
        } else {
            alert("Rso Creation Failed");
        }
    }
    /*
    const fetchRsos = async () => {
        const obj = {
            i: 2
        };
        axios.get('http://localhost/Backend/rsos.php?id='+this.state.id, obj)
        .then(res => console.log(res.data));

        // View a list of events
        setRsos(res);
    }

    const requestCreateRso = async (rsoID, rsoName) => {
        const obj = {
            i: 1,
            rsoID: rsoID,
            rsoName: rsoName
        };
        axios.post('http://localhost/Backend/rsos.php?id='+this.state.id, obj)
        .then(res => console.log(res.data));

        if (res) {
            alert("Rso Created");
            fetchRsos();
        } else {
            alert("Rso Creation Failed");
        }
    }

    const requestJoinRso = async (rsoID) => {
        const obj = {
            i: 0,
            rsoID: rsoID
        };
        axios.post('http://localhost/Backend/rsos.php?id='+this.state.id, obj)
        .then(res => console.log(res.data));

        if (res) {
            alert("Rso Joined");
        } else {
            alert("Rso Creation Failed");
        }
    }
    */

    return (
        <div>
            <StudentNav sid={match.params.userID} pageName="RSOs"/>

            <Header size='huge' textAlign='center'>
                RSO List
            </Header>
            <Table size='large'>
                <Table.Body>
                    <Table.Row>
                        {rsos.map(rso => (
                        <h1 key={rso.rsoID}>
                            <Table.Cell>
                                <Modal
                                    trigger={<Button>{rso.rsoName + " Info"}</Button>}
                                    header={rso.rsoName}
                                    content={
                                    <List bulleted>
                                        <List.Item>{rso.ownerID+ ' is the owner of this RSO'}</List.Item>
                                        <List.Item>{'This RSO is ' + (rso.approved == 1 ? 'approved' : 'not yet approved')}</List.Item>
                                    </List>
                                    }
                                    actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
                                />
                                <Divider/>
                                <Button color="green" onClick={() => requestJoinRso(rso.rsoID)}>
                                    Join
                                </Button>
                            </Table.Cell>
                        </h1>
                        ))}
                    </Table.Row>
                </Table.Body>
            </Table>

            <Header size='huge' textAlign='center'>
            Create a new Rso
            </Header>
            <Form>
                <Form.Input
                  label='Name'
                  placeholder='Name'
                  onChange={e => setRsoName(e.target.value)}
                />
                <Form.Input
                  label='Description'
                  placeholder='Description'
                  onChange={e => setDescript(e.target.value)}
                />
            </Form>
            <Button color='black' onClick={() => requestCreateRso()}> 
                Create
            </Button>

        </div>

    );
}

export default Rsos;