import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import StudentNav from './StudentNav';
import { Form, Header, Dropdown, Button, Container, Divider } from 'semantic-ui-react';

const exampleEvents = [
    {
        eventID: '1',
        name: 'Event 1'
    },
    {
        eventID: '2',
        name: 'Event 2'
    },
    {
        eventID: '3',
        name: 'Event 3'
    }
]

const exampleAdminForRsos = [
    {
        rsoID: '1',
        text: 'RSO 1',
        value: 'RSO 1',
    },
    {
        rsoID: '2',
        text: 'RSO 2',
        value: 'RSO 2',
    },
    {
        rsoID: '3',
        text: 'None',
        value: 'null',
    }
]

function Events({ match }) {

    useEffect(() => {
        fetchEvents();
    }, []);

    const [events, setEvents] = useState([]);

    const [eventName, setEventName] = useState('');
    const [category, setCategory] = useState('');
    const [descript, setDescript] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventType, setEventType] = useState('');
    const [venue, setVenue] = useState('');
    const [vAddress, setVAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const fetchEvents = async () => {
        // get events data

        // https://www.youtube.com/watch?v=Law7wfdg_ls 18:39
        
        // View a list of events
        setEvents(exampleEvents);
    }

    const requestCreateEvent = async () => {
        let success = false;
        // send all the event data 

        if (success) {
            alert("Event Created");
            fetchEvents();
        } else {
            alert("Event Creation Failed");
        }
    }

    return (
        <div>
            <StudentNav sid={match.params.userID} pageName="Events"/>

            <Header size='huge' textAlign='center'>
                Event List
            </Header>
            <br></br>
            <Container textAlign='center'>
                        {events.map(event => (
                        <h1 key={event.eventID}>
                                <Link to={`events/${event.eventID}`}>
                                    {event.name}
                                </Link>
                                <Divider/>
                        </h1>
                        ))}
            </Container>
            <br></br>

            <Header size='huge' textAlign='center'>
            Create a new Event
            </Header>
            <br></br>
            <Container>
                <Form>
                    <Form.Input
                    label='Name'
                    placeholder='Name'
                    onChange={e => setEventName(e.target.value)}
                    />
                    <Form.Input
                    label='Category'
                    placeholder='Category'
                    onChange={e => setCategory(e.target.value)}
                    />
                    <Form.Input
                    label='Description'
                    placeholder='Description'
                    onChange={e => setDescript(e.target.value)}
                    />
                    <Form.Input
                    label='Date'
                    placeholder='Date'
                    onChange={e => setEventDate(e.target.value)}
                    />
                    <Form.Input
                    label='Venue'
                    placeholder='Venue'
                    onChange={e => setVenue(e.target.value)}
                    />
                    <Form.Input
                    label='Address'
                    placeholder='Address'
                    onChange={e => setVAddress(e.target.value)}
                    />
                    <Form.Input
                    label='Latitude'
                    placeholder='Latitude'
                    onChange={e => setLatitude(e.target.value)}
                    />
                    <Form.Input
                    label='Longitude'
                    placeholder='Longitude'
                    onChange={e => setLongitude(e.target.value)}
                    />
                    <Header size = 'tiny'>Hosting RSO</Header>
                    <Dropdown
                        label='User Type'
                        placeholder='User Type'
                        size='big'
                        fluid
                        selection
                        options={exampleAdminForRsos}
                    />
                </Form>
                <Header textAlign='center'>
                    <Button color='black' onClick={() => requestCreateEvent()}> 
                        Create
                    </Button>
                </Header>
                <br></br>
            </Container>
        </div>

    );
}

export default Events;