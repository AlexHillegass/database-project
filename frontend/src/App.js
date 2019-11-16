import React from 'react';
import './App.css';
import { Button, Divider, Form, Container, Header, Dropdown } from 'semantic-ui-react';

function App() {
  return (
    <LandingPage/>
  );
}

const userTypeOptions = [
  {
    text: 'Student',
    value: 'Student',
  },
  {
    text: 'Administrator',
    value: 'Administrator',
  },
]

function Request(props) {
  return (
    <Button color='yellow' className="request" onClick={props.onClick}> 
      {props.value}
    </Button>
  );
}

function SwitchPage (props) {
  return (
    <Button basic color='yellow' className="switchPage" onClick={props.onClick}> 
      {props.value}
    </Button>
  );
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      userType: null,
      loginPage: true,
    };
  }

    renderRequest() {
      return (
        <Request 
          value={this.state.loginPage ? 'Login' : 'Create'}
          onClick={()=> this.handleRequest()}
        />
      );
    }

    handleRequest() {
      alert(this.state.username + " " + this.state.password + " " + this.state.userType)
      //If login, request login else request creation
    }

    renderSwitchPage() {
      return (
        <SwitchPage 
          value={this.state.loginPage ? 'Create User' : 'Sign In'}
          onClick={() => this.handleSwitchPage()}
        />
      );
    }

    handleSwitchPage() {
      this.setState({
        loginPage: !this.state.loginPage
      });
    }

    renderUserType() {
      if (!this.state.loginPage) {
        return (
          <Container>
            <Header size = 'tiny'>User Type</Header>
            <Dropdown
              label='User Type'
              placeholder='User Type'
              size='big'
              fluid
              selection
              options={userTypeOptions}
              onChange={selected => this.setState({
                userType: selected.target.textContent,
              })}
            />
          </Container>
        );
      }
    }


    render() {
      return (
          <Container>
            <Header size='huge' textAlign='center'>
              University Events
            </Header>
            <Form>
              <Form.Input
                icon='user'
                iconPosition='left'
                input=""
                label='Username'
                placeholder='Username'
                onChange={input => this.setState({username: input.target.value})}
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                placeholder='Password'
                type='password'
                onChange={input => this.setState({password: input.target.value})}
              />
              {this.renderUserType()}
            </Form>
            {this.renderRequest()}
            <Divider/>
            {this.renderSwitchPage()}
          </Container>
      );
    }

  }



export default App;