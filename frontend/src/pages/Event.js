import React, {useState, useEffect} from 'react';
import '../App.css';
import StudentNav from './StudentNav';
import { Comment, Form, Button, Header, Segment, Divider, Modal, Input, Rating} from 'semantic-ui-react';

const exampleComments = [
    {
        commentID: '1',
        userID: 'dan',
        submitted: '11/19/19',
        comment: 'This event looks fun',
    },
    {
        commentID: '2',
        userID: 'Ralph',
        submitted: '11/20/19',
        comment: 'This event looks cool',
    },
    {
        commentID: '3',
        userID: 'Bob',
        submitted: '11/21/19',
        comment: 'This event looks bad',
    }
];

const exampleEvent = {
    eventRating: 4.5,
    eventName: 'Party USA',
    category: '11/19/19',
    descript: 'This event is good',
    eventDate: '11/19/19',
    venue: 'Hard Rock',
    vAddres: '11242 Pine St',
};

function DisplayComments(props) {
    useEffect(() => {
        fetchComments();
    }, []);

    const [comments, setComments] = useState([]);

    const [commentText, setCommentText] = useState('');

    const fetchComments = async () => {

        setComments(exampleComments);
    }

    const requestCreateComment = async () => {
        // only renders on immutable
        alert(commentText);

        fetchComments();
    }

    const requestDeleteComment = async (comment) => {
        if (comment.userID == props.userID) {
            fetchComments();
            alert(props.event.eventName);
        } else {
            alert("You do not have permission to do this.")
        }
    }

    const requestEditComment = async (comment) => {
        alert(commentText);
        if (comment.userID == props.userID) {

            fetchComments();
        } else {
            alert("You do not have permission to do this.")
        }
    }

    return (
            <Comment.Group>
                {comments.map(comment => (
                    <h1 key={comment.commentID}>
                        <Comment>
                            <Comment.Content>
                                <Comment.Author>{comment.userID}</Comment.Author>
                                <Comment.Metadata>{comment.submitted}</Comment.Metadata>
                                <Comment.Text >{comment.comment}</Comment.Text>
                                <Comment.Actions>
                                <Modal
                                    trigger={<Button color='blue'>Edit</Button>}
                                    header='Edit Comment'
                                    content={<Input placeholder='New Comment' onChange={e => setCommentText(e.target.value)}/>}
                                    actions={[{ key: 'save', content: 'Save', positive: true }]}
                                    onActionClick={() =>requestEditComment(comment)}
                                />
                                    <Button color='red' onClick={() => requestDeleteComment(comment)}>Delete</Button>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                        <Divider/>
                    </h1>
                ))}


                <Form>
                    <Form.TextArea onChange={e => setCommentText(e.target.value)}/>
                    <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={() => requestCreateComment()}/>
                </Form>
            </Comment.Group>
    );
}

function Event({match}) {
    useEffect(() => {
        fetchEvent();
    }, []);

    const [event, setEvent] = useState([]);

    const [rating, setRating] = useState(0);

    const fetchEvent = async () => {
        setEvent(exampleEvent);
    }

    const updateRating = async (rating) => {
        // only renders on immutable
        setRating(rating);
        alert(rating);

    }

    return (
        <div>
            <StudentNav userID={match.params.userID}/>
           
            <Header size='huge' textAlign='center'>
                Event Details
            </Header>
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

            <Header textAlign='center' size = 'huge'>Your Rating</Header>
            <Header textAlign='center'>
                <Rating onRate={(e, { rating }) => updateRating(rating)} maxRating={5} defaultRating={rating} icon='star' size='huge' />
            </Header>
            

            <Header size='huge' textAlign='center'>
                Event Comments
            </Header>
            <DisplayComments eventID={match.params.eventID} userID={match.params.userID} event={event}/>
        </div>
    );
}

export default Event;