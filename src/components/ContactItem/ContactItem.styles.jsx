import styled from "styled-components";

const ContactItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-left: 20px;
  margin-top: 10px;
`;

const ContactButtonDeleteStyled = styled.button`
  padding: 2px;
  justify-content: center;
  width: 80px;
  border-radius: 25px;
  border: 0px;
  margin-left: 10px;
  :hover {
    background: #1f26f598;
  }
`;

export { ContactItemStyled, ContactButtonDeleteStyled };
