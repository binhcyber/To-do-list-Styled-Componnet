import styled from "styled-components";
import React from "react";

export const Link = ({ className, children, ...restProps }) => (
  <a className={className}>{children}</a>
);
export const StyledLink = styled(Link)`
  font-size: 10px;
  font-weight: 500;
  color: red;
`;
