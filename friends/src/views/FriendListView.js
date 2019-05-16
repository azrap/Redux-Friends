import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions"

import { FriendList } from "../components";
// import actions

class FriendListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getFriends()
  }


  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      <h2>Grab a cupa Joe. I'm still loading...</h2>
    }
    return (
      <div className="FriendsList_wrapper">
        <CharacterList characters={this.props.friends} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  friends: state.friends,
  isLoading: state.isLoading
});


export default connect(
  mapStateToProps,
  {getFriends}
)(FriendListView);
