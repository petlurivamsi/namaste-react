import React, { useEffect } from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("::constructor in child");
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/petlurivamsi");
    const jsonData = await data.json();
    console.log("::component did mount in child");
    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate() {
    console.log("::component did update in child");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @PVVK</h4>
      </div>
    );
  }
}

export default UserClass;
