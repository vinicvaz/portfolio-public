import "../App.css";
import styled from "styled-components";

export const Styles = styled.div`
   {

    // Container Style - Background and padding
    .fluid {
      background: rgb(170, 150, 150);
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,
        rgba(240,234,234,1) 1%
      );
      padding-top: 3%
      padding-bottom: 5%
    }
    
    // Row 1 Content Style
    .row1 {
      margin-bottom: 3%
      justify-content: center;
      text-align: center;
    }


    // Projects Title Style - Font and Size
    .title{
        font-family: 'Oswald', sans-serif;
        font-size: 3vw
        letter-spacing: 0.5rem;
        font-weight: bold 
        @media only screen and (max-width: 767px){
            letter-spacing: 0.2rem;
            font-size: 18px
         }

    

    }





// STYLE SECTION OVERLAY AND IMAGES

    //Style for container of image
    .inner{
        padding: 0px
        border: solid
        border-width: 0px
        position: relative
        overflow: hidden
    }

    // Image Style
    .img{
        display: block
        transition: all 1s ease;
        position: relative

        &:hover{
            transform: scale(1.2)
        }
    }

    // Image Caption Header Style
    .header{
        font-family: 'Oswald', sans-serif;
        font-size: 1.5vw
        text-transform: uppercase;
        font-weight: bold
        letter-spacing: 2.5px
        color: white
        opacity: 0%
        transition: all 1s ease;

        @media only screen and (max-width: 767px){
            font-size: 2vw
        }

    }

    // Image Caption Text Style 
    .text{
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.5vw
        color: white
        transition: all 1s ease;
        opacity: 0%
        line-height: 1.5em
        margin-top: 10%
        
        @media only screen and (max-width: 767px){
            font-size: 2vw
            margin-top: 3%
            
        }

        @media only screen and (min-width: 1000px){
            margin-top: 10%   
        }


        span{
            font-family: 'Oswald', sans-serif;
            letter-spacing: 1.5px
            font-weight: semi-bold
            color: #de7b49


         }

    }

    // Style that position the button inside image
    .mid{
        position: absolute
        bottom: 8px; 
        left: 50%; 
        transform: translateX(-50%); 
    }


    // Image Button Style
    .btn{

        left: 50%
        bottom: 8px

        background-color: rgba(0, 0, 0, 0);
        font-size: 1.2vw
        border-color: #de7b49
        border-radius: 10px
        letter-spacing: 1.2px
        font-family: 'Lato', sans-serif;
        font-weight: bold
        transition: all 1s ease;
        opacity: 0%
    
        @media only screen and (max-width: 767px){
            font-size: 1.2vw
            border-radius: 5px
        }

    }

    .special{
        background-color:red
        justify-content:left
        text-align:left
        margin-left: -50px
    }

    // Overlay Style
    .overlay {
        text-align: center
        justify-content: center
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        background: cover
        height: 100%
        transition: all 1s ease;
        background-color:black
        background-color:rgba(0, 0, 0, 0);

    }

    // TRANSFORMATIONS WHEN HOVER //

    .inner:hover .img{
        transform: scale(1.3)
    }

    .inner:hover .header{
        opacity: 100%
    }

    .inner:hover .text{
        opacity: 100%
    }

    .inner:hover .btn{
        opacity: 100%
    }

    .inner:hover .overlay{
        background-color:rgba(0, 0, 0, 0.97);
    }

`;
