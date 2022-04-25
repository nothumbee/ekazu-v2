import React from "react";
import styled from "styled-components";
import Logo from "./logo.svg";

const FooterCredits = () => (
  <>
    <StyledLogo />
    Vytvořil Vojtěch Bezpalec
  </>
);
export default FooterCredits;

const StyledLogo = styled(Logo)`
  width: 100px;
  height: 30px;
  margin: 0 auto 10px auto;
  display: block;
`;
