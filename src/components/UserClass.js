import React, { useEffect } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
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
    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate() {}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        ;
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @PVVK</h4>
      </div>
    );
  }
}

export default UserClass;
