import React from "react";
// import styles from "./index.less";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("did");
  }

  test = () => {
    console.log("这是个测试");
  };

  render() {
    return (
      // <div className={styles.wrapper} onClick={this.test}>
      <div onClick={this.test}>
        hello zhangyu
      </div>
    );
  }
}
