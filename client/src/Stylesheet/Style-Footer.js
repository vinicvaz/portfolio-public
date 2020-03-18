import "../App.css";
import styled from "styled-components";

export const Styles = styled.div`
   {
    .fluid {
      background: rgb(36,35,35);
      background: linear-gradient(to bottom, rgba(36,35,35,1) 0%, rgba(22,22,22,1) 2%);
      height: 200px;
    }

    .row1 {
      text-align: center;
      padding-top: 30px;
    }

    .fas,
    .fab {
      color: #bbb
      font-size: 2em
      transition-duration: 0.2s;
      transition-timing-function: ease-in;
      transition-property: all;
      padding: 20px

      &:hover {
        color: #807171;
        transform: scale(1.2);
      }

      @media only screen and (max-width: 767px){
        font-size: 1em
        padding: 10px
     }
    }

    .caption {
      font-family: "Oswald", sans-serif;
      letter-spacing: 1.5px;
    }

    .col2{
        margin-top: -40px

        span{
            color: #807171;
            font-family: "Oswald", sans-serif;
            letter-spacing: 1.5px;
        }
        i{
            margin-left: -10px
            font-size: 1em
            color: #de7b49

            &:hover{
              color: #de7b49
              transform: scale(1)
            }
        }

        @media only screen and (max-width: 767px){

           span{
               font-size: 0.8em
           }
           i{
               margin-left: -5px
               font-size: 0.8em
           }
         }
    }

  }
`;
