import React, {useState, useEffect} from 'react';
import '../App.css';
import StudentNav from './StudentNav';
import { Table, Form, Header, Divider, Button, Modal, List, Container } from 'semantic-ui-react';

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

    return (
        <div>
            <StudentNav sid={match.params.userID} pageName="RSOs"/>

            <Header size='huge' textAlign='center'>
                RSO List
            </Header>
            <Container textAlign='center'>
                            {rsos.map(rso => (
                            <h1 key={rso.rsoID}>
                                    <Modal
                                        trigger={<Button>{rso.rsoName + " Info"}</Button>}
                                        header={rso.rsoName}
                                        content={
                                        <List bulleted>
                                            <List.Item>{rso.ownerID+ ' is the owner of this RSO'}</List.Item>
                                            <List.Item>{'This RSO is ' + (rso.approved == 1 ? 'approved' : 'not yet approved')}</List.Item>
                                        </List>
                                        }
                                        actions={[{ key: 'close', content: 'Close', positive: true }]}
                                    />
                                    <Button color="green" onClick={() => requestJoinRso(rso.rsoID)}>
                                        Join
                                    </Button>
                                    <Divider/>
                            </h1>
                            ))}
            </Container>

            <Header size='huge' textAlign='center'>
                Create a new Rso
            </Header>
            <Container>
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
                <Header textAlign='center'>
                    <Button color='green' onClick={() => requestCreateRso()}> 
                        Create
                    </Button>
                </Header>                
                <br/>
            </Container>

        </div>

    );
}

export default Rsos;