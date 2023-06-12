import styled from "styled-components/native";

export const ImageLogo = styled.Image`
  /* width: ${(props) => (props.width ? "180px" : "")};
  height: ${(props) => (props.height ? "180px" : "")}; */
  width: 180px;
  height: 180px;
  object-fit: cover;
`;
export const Container = styled.View`
  position: ${(props) => (props.position ? "absolute" : "relative")};
  top: ${(props) => props.top || "20px"};
`;
