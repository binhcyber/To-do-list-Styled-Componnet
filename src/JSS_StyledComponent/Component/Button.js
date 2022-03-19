import styled from "styled-components";
export const Button = styled.button`
  color: black;
  background: ${(props) => (props.backgroundPrimary ? "green" : "pink")};
  border-color: none;
  padding: 4px;
  &:hover {
    opacity: 0.5;
    transition: all 1s;
    font-size: ${(props) => (props.fontSize2x ? "30px" : "100px")};
    background: ${(props) => (props.backgroundPrimary ? "orange" : "purple")};
    &.body-styled {
      color: #fff;
    }
  }
`;
export const ButtonFake = styled(Button)`
  border-radius: 10px;
  font-size: 10px;
`;
