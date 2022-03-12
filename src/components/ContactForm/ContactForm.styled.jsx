import styled from "styled-components";

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 0;
`;

const ContactLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
`;

const ContactInputStyled = styled.input`
  padding: 5px;
  align-items: center;
  width: 200px;
  border: solid 2px grey;
  border-radius: 15px;
  margin-top: 5px;
`;

const ContactButtonStyled = styled.button`
  justify-content: center;
  padding: 5px;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 15px;
  width: 150px;
  border: 0;
  margin-left: 20px;

  :hover {
    background: #1f26f598;
    border: 0;
  }
`;

export {
  ContactFormStyled,
  ContactLabelStyled,
  ContactInputStyled,
  ContactButtonStyled,
};
