import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>Namaste React Web Series</h2>

        {/* <User name={"Vamsi Krishna Petluri(functional)"} /> */}
        <UserClass name={"Vamsi Krishna Petluri(class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Namaste React Web Series</h2>

//       {/* <User name={"Vamsi Krishna Petluri(functional)"} /> */}
//       <UserClass name={"Vamsi Krishna Petluri(class)"} />
//     </div>
//   );
// };

export default About;
