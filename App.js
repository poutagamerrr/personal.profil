import React, { Component } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Omar ben Maaouia",
        bio: "A passionate web developer who loves coding and coffee.",
        imgSrc: profilePic,
        profession: "Full-Stack Developer",
      },
      shows: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    // Timer that updates every second
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Cleanup interval when component unmounts
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App" style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>React Class Component Example</h1>
        <button
          onClick={this.toggleShow}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", display: "inline-block" }}>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ width: "150px", borderRadius: "50%" }}
            />
            <h2>{person.fullName}</h2>
            <h4>{person.profession}</h4>
            <p>{person.bio}</p>
          </div>
        )}

        <h3 style={{ marginTop: "20px" }}>
          ⏱ Time since component mounted: {mountedTime} seconds
        </h3>
      </div>
    );
  }
}

export default App;
