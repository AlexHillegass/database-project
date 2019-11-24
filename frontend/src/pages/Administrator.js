import React, {useState, useEffect} from 'react';
import '../App.css';
import { Table, Form, Header, Button, Divider, Segment, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AdministratorNav from './AdministratorNav';
import axios from 'axios';


const exampleEvents = [
    {
        eventRating: 4.5,
        eventName: 'Party USA',
        category: '11/19/19',
        descript: 'This event is good',
        eventDate: '11/19/19',
        venue: 'Hard Rock',
        vAddres: '11242 Pine St',
    }
]

function Administrator({match}) {
    useEffect(() => {
        fetchUniversity();
    }, [])

    const [university, setUniversity] = useState([]);
    const [events, setEvents] = useState([]);

    const [name, setName] = useState('');
    const [descript, setDescript] = useState('');
    const [students, setStudents] = useState('');
    const [address, setAddress] = useState('');

    const fetchUniversity = async () => {

        setUniversity(exampleEvents);

        if (university) {
            fetchEvents();
        }
    }

    const requestCreateUniversity = async () => {
        // create university 
        const obj = {
            i: 0,
            univID: this.univID,
            univName: this.univName
        };
        axios.post('http://localhost/Backend/rsos.php?id='+this.state.id, obj)
        .then(res => console.log(res.data));
        fetchEvents();
    }

    const requestUpdateUniversity = async () => {
        // update university based on any new data
        const obj = {
            i: 0,
            creatorID: this.creatorID,
            univName: this.univName

        };
        axios.post('http://localhost/Backend/rsos.php?id='+this.state.id, obj)
        .then(res => console.log(res.data));
        fetchUniversity();
    }

    const fetchEvents = async () => {

        setEvents(exampleEvents);
    }

    const requestApproveEvent = async (eventID) => {
        // approve event by eid
        
        fetchEvents();
    }

    if (university) {
        return (
        <div>
            <AdministratorNav userID={match.params.userID}/>
            <Header size='huge' textAlign='center'>
                Your University
            </Header>
            <Table size='large'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Current Value</Table.HeaderCell>
                        <Table.HeaderCell>Update Value</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Name</Table.Cell>
                        <Table.Cell>UCF</Table.Cell>
                        <Form.Input
                            onChange={e => setName(e.target.value)}
                        />
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Description</Table.Cell>
                        <Table.Cell>The home of the Knights</Table.Cell>
                        <Form.Input
                            onChange={e => setDescript(e.target.value)}
                        />
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Student Population</Table.Cell>
                        <Table.Cell>60,000</Table.Cell>
                        <Form.Input
                            onChange={e => setStudents(e.target.value)}
                        />
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Address</Table.Cell>
                        <Table.Cell>Orlando FL</Table.Cell>
                        <Form.Input
                            onChange={e => setAddress(e.target.value)}
                        />
                    </Table.Row>
                </Table.Body>
            </Table>

            <Button color="green" onClick={() => requestUpdateUniversity()}> Update University</Button>

            <Header size='huge' textAlign='center'>
                Events Needing Approval
            </Header>
            <Table size='large'>
                <Table.Body>
                    <Table.Row>
                        {events.map(event => (
                        <h1 key={event.eventID}>
                            <Table.Cell>
                                <Modal
                                    trigger={<Button color='blue'>{event.eventName + "'s" + " Info"}</Button>}
                                    header={event.eventName}
                                    content={
                                        <div>
                                            <Header attached>Event Name</Header>
                                            <Segment attached>{event.eventName}</Segment>
                                            <Header attached>Event Rating</Header>
                                            <Segment attached>{event.eventRating}</Segment>
                                            <Header attached>Event Category</Header>
                                            <Segment attached>{event.category}</Segment>
                                            <Header attached>Event Description</Header>
                                            <Segment attached>{event.descript}</Segment>
                                            <Header attached>Event Date</Header>
                                            <Segment attached>{event.eventDate}</Segment>
                                            <Header attached>Event Venue</Header>
                                            <Segment attached>{event.venue}</Segment>
                                            <Header attached>Event Address</Header>
                                            <Segment attached>{event.vAddres}</Segment>
                                        </div>
                                    }
                                    actions={[{ key: 'close', content: 'Close', positive: true }]}
                                />
                                <Divider/>
                                <Button color="green" onClick={() => requestApproveEvent(event.eventID)}>
                                    Approve
                                </Button>
                            </Table.Cell>
                        </h1>
                        ))}
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
        );
    } else {
        return (
        <div>
             <Header size='huge' textAlign='center'>
                Create a new University
            </Header>
            <Form>
                <Form.Input
                  label='Name'
                  placeholder='Name'
                  onChange={e => setName(e.target.value)}
                />
                <Form.Input
                  label='Description'
                  placeholder='Description'
                  onChange={e => setDescript(e.target.value)}
                />
                <Form.Input
                  label='Student Population'
                  placeholder='Student Population'
                  onChange={e => setStudents(e.target.value)}
                />
                <Form.Input
                  label='Address'
                  placeholder='Address'
                  onChange={e => setAddress(e.target.value)}
                />
            </Form>
            <Button color='black' onClick={() => requestCreateUniversity()}> 
                Create
            </Button>
        </div>
        );
    }

}

export default Administrator;