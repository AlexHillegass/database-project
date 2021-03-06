import React, {useState, useEffect} from 'react';
import '../App.css';
import StudentNav from './StudentNav';
import { Comment, Form, Button, Header, Segment, Divider, Modal, Input, Rating} from 'semantic-ui-react';
import axios from 'axios';

import { Comment, Form, Button, Header, Segment, Divider, Modal, Input, Rating, Container} from 'semantic-ui-react';

const exampleComments = [
    {
        commentID: 1,
        userID: 'dan',
        submitted: '11/18/2019',
        comment: 'This event looks fun',
    },
    {
        commentID: 2,
        userID: 'Ralph',
        submitted: '11/18/2019',
        comment: 'This event looks cool',
    },
    {
        commentID: 3,
        userID: 'Bob',
        submitted: '11/18/2019',
        comment: 'This event looks bad',
    }
];

const exampleEvent = {
    eventRating: 4.5,
    eventName: 'Party USA',
    category: '11/19/19',
    descript: 'This event is good',
    eventDate: '11/19/2019',
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
        const obj = {
            i: 2
        };
        axios.get('http://localhost/Backend/event.php?id='+this.state.id, obj)
        .then(res => console.log(res.data));
        if(res){
            setComments(res);
        }
        setComments(exampleComments);
    }

    const requestCreateComment = async () => {
        // Create random comment id 10-10k
        let newCommentID = Math.floor(Math.random() * 10000) + 10;
        let today = new Date();
        comments.push({
            commentID: newCommentID,
            userID: props.userID,
            submitted: today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear(),
            comment: commentText,
        });
        setCommentText(null);

        //fetchComments();
    }

    const requestDeleteComment = async (comment) => {
        if (comment.userID == props.userID) {
            axios.get('http://localhost/Backend/event.php?comment='+this.commentID, obj)
            .then(res => console.log(res.data));
            fetchComments();
            setComments(comments.filter(c => c.commentID != comment.commentID));
        } else {
            alert("You do not have permission to do this.")
        }
        //fetchComments();
    }

    const requestEditComment = async (comment) => {
        if (comment.userID == props.userID) {
            const obj = {
                i: 1,
                commentID: this.commentID,
                userID: this.state.userID,
                eventID: this.eventID,
                comment: this.comment,
                submitted: this.submitted
            };
            axios.get('http://localhost/Backend/event.php?id='+this.state.id, obj)
            .then(res => console.log(res.data));
            fetchComments();
        } else {
            alert("You do not have permission to do this.")
        }
    }

    return (
        <Container textAlign='left'>
            <Header size='huge' textAlign='center'>
                Event Comments
            </Header>
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
            <br></br>
        </Container>
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
            <br></br>
            <Container textAlign='center'>
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
            </Container>


            <Header textAlign='center' size = 'huge'>Your Rating</Header>
            <Header textAlign='center'>
                <Rating onRate={(e, { rating }) => updateRating(rating)} maxRating={5} defaultRating={rating} icon='star' size='huge' />
            </Header>
            <br></br>

            
            <DisplayComments eventID={match.params.eventID} userID={match.params.userID} event={event}/>

        </div>
    );
}

export default Event;