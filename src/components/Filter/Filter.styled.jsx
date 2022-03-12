import styled from "styled-components";

const FilterLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-left: 20px;
  font-size: 20px;
`;

const FilterInputStyled = styled.input`
  padding: 5px;
  width: 200px;
  margin-top: 5px;
  border: grey solid 2px;
  border-radius: 25px;
`;

export { FilterLabelStyled, FilterInputStyled };
