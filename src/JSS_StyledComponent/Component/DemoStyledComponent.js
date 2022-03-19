import React, { Component } from "react";
import { Button, ButtonFake } from "./Button";
import { Link, StyledLink } from "./Link";
import { TextInput } from "./TextInput";

export default class DemoStyledComponent extends Component {
  render() {
    return (
      <div>
        <Button backgroundPrimary fontSize2x>
          Button
        </Button>
        <ButtonFake>BFake</ButtonFake>
        <Link>
          <p>mama</p>momo
        </Link>
        <StyledLink>
          <p>Ahihi</p>
          Ahoho
        </StyledLink>
        <TextInput InputColorText="black" />
      </div>
    );
  }
}
