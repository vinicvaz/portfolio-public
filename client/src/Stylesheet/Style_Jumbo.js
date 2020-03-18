import styled from "styled-components";
import "../App.css";
export const Styles = styled.div`  
.jumbo {

    background: url("https://i.imgur.com/Q0uE22T.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center top;

    margin:0

    
    
    
    color: white;
    height: 100vh;
    widht: 100vw;
    position: relative;
  
  
    h1 {
        font-size:5vw;
        color: #d7d2cc
        background: -webkit-linear-gradient(#304352, #d7d2cc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        position: relative
        display: flex;
        justify-content: center;
        align-items: center;
        top: 10vh;
        @media only screen and (max-width: 767px){
          font-size: 20px
        }
        

        

      }

     #desc{
      font-size:2.2vw;  
      font-family: 'Lato', sans-serif;
      position: relative
      display: flex;
      justify-content: center;
      align-items: center;
      top: 8vh
      @media only screen and (max-width: 767px){
        margin-top: 5vh
        font-size: 16px
      }
      
      
       
     } 
    
     #location{
        font-size:1.5vw;  
        font-family: 'Lato', sans-serif;
        position: relative
        display: flex;
        justify-content: center;
        align-items: center;
        top: 10vh
        @media only screen and (max-width: 767px){
          margin-top: -2vh
          font-size: 10px
        }
  
  
        .fa-map-marker-alt {
          color: white;
          margin-right: 1vw;
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
          transition-property: all;
  
          &:hover {
            color:white
            transform: scale(1.2) translate(0%, -20%);
          }
        }
      }
      #social{
        font-size:2vw;  
        font-family: 'Lato', sans-serif;
        position: relative
        display: flex;
        justify-content: center;
        align-items: center;
        top: 12vh
        @media only screen and (max-width: 767px){
          font-size: 12px
          margin-top: -2vh
        }
        }


        
        .fa-linkedin-in{
          color:white
          margin-top: 2vh;
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
          transition-property: all;
  
          &:hover {
            transform: scale(1.2) translate(0%, -20%);
          }
          .linkedin-text{
            margin-left: 1vw
            top: 
            
          }
          p{
            color:white
            font-family: 'Lato', sans-serif;
            font-size: 1.12vw
            letter-spacing: 1.5px;
            margin-top:1vh
            
            
          }
        }
  
        .fa-github{
          color:white
          margin-top: 2vh;
          margin-left: 5vw
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
          transition-property: all;
          
          &:hover {
            transform: scale(1.2) translate(0%, -20%);
          }
          p{
            color:white
            font-family: 'Lato', sans-serif;
            font-size: 1.12vw
            letter-spacing: 1px;
            margin-top:1vh
            
            
          }
        }

        
        .fa-address-card{ 
          color:white
          margin-top: 2vh;
          margin-left: 5vw
          transition-duration: 0.2s;
          transition-timing-function: ease-in;
          transition-property: all;
          
          &:hover {
            transform: scale(1.2) translate(0%, -20%);
          }

          p{
            color:white
            font-family: 'Lato', sans-serif;
            font-size: 1.12vw
            letter-spacing: 1px;
            margin-top:1vh
            
            
          }

  
        }
      }

      #text{
        color:white
        font-size: 1.12vw
        letter-spacing: 1px;
        word-spacing: 2.4vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 14vh

          
        }
      }

      
  
    }
    

      
   
  }`;
