import React from 'react';
import ReactDOM from 'react-dom';
import { 
      BrowserRouter as Router,
      Route,
      NavLink,
      withRouter 
      } from 'react-router-dom';
import axios from 'axios';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

import './App.css';


class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  // componentDidMount() {
  //   // fetch any initial data we need
  //   // axios.get(), axios.post(), .put(), .delete()
  //   axios
  //     .get('http://localhost:5000/friends')
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ friends: res.data });
        
  //     })
  //     .then()
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ error: err.response.message });
  //     });
  //         console.log(this.state.friends)
  // }


  // function to post/add friends list

  // addFriend = (newItem) => {
  //   axios.post('http://localhost:5000/friends', newItem)
  //   .then((res) => { 
  //     console.log(res);
  //     this.setState({ friends: res.data });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

  // }

  render() {
    return (
      <div className="App">
        <h1 className="store-header">My Friends</h1>
      <NavLink exact to="/friend-form">Add Friend </NavLink>
      <NavLink exact to="/"> Friend List </NavLink>
      <Route 
        exact path="/" 
        render = {(props)=> ( 
            <FriendList
              {...props}
              friends={this.state.friends}
             />
             )}
        />

        <Route
          path="/friend-form"
          render ={(props)=> 
          <FriendForm 
          {...props}
          addFriend= {this.addFriend}/> 
          }
        />
            
      </div>


    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);


export default App;
