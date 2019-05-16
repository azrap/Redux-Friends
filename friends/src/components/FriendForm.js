import React from "react";

class FriendForm extends React.Component {
  state = {
    friend: this.props.activeItem || {
        name: "",
      age: "",
      email: ""
    }
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "age") {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);

    this.setState({
      friend: {
        name: "",
      age: "",
      email: ""
      }
    })
  };

  render() {
    return (
      <div>
        <h2>Add New Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.friend.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.friend.age}
            />
            <div className="baseline" />

          <input
            type="string"
            name="email"
            onChange={this.changeHandler}
            placeholder="email"
            value={this.state.friend.email}
          />

            <div className="baseline" />
          

          <button className="md-button form-button">Add New Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
