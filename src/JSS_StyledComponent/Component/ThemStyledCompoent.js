import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const darkTheme = {
  background: "#000",
  color: "#fff",
  fontSize: "30px",
  padding: "10%",
};
const lightTheme = {
  background: "blue",
  color: "fff",
  padding: "10%",
  fontSize: "30px",
};

export default class ThemStyledCompoent extends Component {
  state = {
    currentTheme: darkTheme,
  };
  handleTheme = (event) => {
    this.setState({
      currentTheme: event.target.value === "1" ? darkTheme : lightTheme,
    });
  };
  render() {
    const DivStyledTheme = styled.div`
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.color};
      font-size: ${(props) => props.theme.fontSize};
      padding: ${(props) => props.theme.padding};
    `;
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyledTheme>
          Chào mừng tất cả các bạn đến với ngôi nhà chung
        </DivStyledTheme>
        <select onChange={this.handleTheme}>
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
