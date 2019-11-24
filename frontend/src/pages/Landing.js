import React from 'react';
import '../App.css';
import { Button, Divider, Form, Header, Dropdown } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


const userTypeOptions = [
    {
      text: 'Student',
      value: 1,
    },
    {
      text: 'Administrator',
      value: 2,
    },
  ]
  
  function Request(props) {
    return (
      <Button color='black' className="request" onClick={props.onClick}> 
        {props.value}
      </Button>
    );
  }
  
  function SwitchPage (props) {
    return (
      <Button basic color='black' className="switchPage" onClick={props.onClick}> 
        {props.value}
      </Button>
    );
  }
  
  class Landing extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userID: null,
        first_name: null,
        last_name: null,
        emailAdd: null,
        pass: null,
        clearance: null,
        loginPage: true,
        isStudent: true,
        redirect: false,
        
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
        let successfulRequest = true;
        
        // attempt to login or create user
        if (this.state.loginPage) { // login
          const obj = {
            i: 0
          };
          axios.get('http://localhost/Backend/landing.php', obj)
          .then(res => console.log(res.data));
          if(res.equals(this.pass)){
            successfulRequest = true;
          } else {
            // successfulRequest = false;
          }

        } else { // create user
          const obj = {
            i: 0
          };
          axios.post('http://localhost/Backend/landing.php', obj)
          .then(res => console.log(res.data));
          if(!res){
            successfulRequest = true;
          }
        }

        if (successfulRequest) {
            this.setState({
                redirect: true
            });
        } else {
          // Alert if error 
          alert();
        }

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

      renderLoginPage() {
        return (
          <body className="landing">
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
                  onChange={input => this.setState({userID: input.target.value})}
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Password'
                  placeholder='Password'
                  type='password'
                  onChange={input => this.setState({pass: input.target.value})}
                />
              </Form>
              {this.renderRequest()}
              <Divider/>
              {this.renderSwitchPage()}
          </body>
        );
      }

      renderSignUpPage() {
        return (
          <body className="landing">
              <Header size='huge' textAlign='center'>
                University Events
              </Header>
              <Form>
                <Form.Input
                  input=""
                  label='Username'
                  placeholder='Username'
                  onChange={input => this.setState({userID: input.target.value})}
                />
                <Form.Input
                  label='Password'
                  placeholder='Password'
                  onChange={input => this.setState({pass: input.target.value})}
                />
                <Form.Input
                  input=""
                  label='First Name'
                  placeholder='First Name'
                  onChange={input => this.setState({first_name: input.target.value})}
                />
                <Form.Input
                  label='Last Name'
                  placeholder='Last Name'
                  onChange={input => this.setState({last_name: input.target.value})}
                />
                <Form.Input
                  label='Email'
                  placeholder='Email'
                  onChange={input => this.setState({emailAdd: input.target.value})}
                />
                <Header size = 'tiny'>User Type</Header>
                <Dropdown
                  label='User Type'
                  placeholder='User Type'
                  size='big'
                  fluid
                  selection
                  options={userTypeOptions}
                  onChange={selected => this.setState({
                    clearance: selected.target.textContent,
                  })}
                />
              </Form>
              {this.renderRequest()}
              <Divider/>
              {this.renderSwitchPage()}
          </body>
        );
      }
  
  
      render() {
        if (this.state.redirect) {
          if (this.state.isStudent) {
            return (
              <Redirect to={`/students/${this.state.userID}/events`}/>
            );
          } else {
            return (
              <Redirect to={`/administrators/${this.state.userID}`}/>
            );
          }

        }

        if (this.state.loginPage) {
          return this.renderLoginPage();
        } else {
          return this.renderSignUpPage();
        }
      }
  
    }

export default Landing;