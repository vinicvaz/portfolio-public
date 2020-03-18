import "../App.css";
import styled from "styled-components";

export const Styles = styled.div`
   {
    .fluid {
      background: rgb(227, 208, 208);
      background: linear-gradient(
        to bottom,
        rgba(227, 208, 208, 1) 0%,
        rgba(36, 35, 35, 1) 1%
      );
      padding-bottom: 100px
    }

    .row1{
        justify-content: center
        text-align: center

        h1{
          font-family: 'Oswald', sans-serif;
          font-size: 3vw
          letter-spacing: 0.5rem;
          font-weight: bold
          margin-top: 5%
          color:#de7b49 

          @media only screen and (max-width: 767px){
              font-size: 18px
          }
      }
    }

    .btn{
      background-color: #807171
      border-color: #807171
      font-size: 1.2vw
      font-family: 'Lato', sans-serif;
      letter-spacing: 1.2px
      font-weight: semi-bold

      &:hover{
        background-color: #c9c9c9
        color: black
      }
      
    }

    .form{
      background-color: #c9c9c9
    }

  }
`;
