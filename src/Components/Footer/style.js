import styled from "styled-components";

export const FooterWrap = styled.div`
  padding: 24px 48px;
  h3 {
    font-family: "Marcellus", serif;
    font-size: 37px;
    font-weight: 400;
    line-height: 1.05;
    margin: 0;
    color: #131313;
  }
  .social-media {
    padding: 48px 0;
    max-width: 144px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .sub-footer {
    padding: 48px 0;
    p {
      font-family: "Marcellus", serif;
      font-size: 17px;
      font-weight: 400;
      margin: 0;
      color: #131313;
      a {
        text-decoration: underline;
        color: #131313;
      }
    }
  }
`;
