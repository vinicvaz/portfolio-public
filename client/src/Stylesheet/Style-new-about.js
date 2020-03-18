import "../App.css";
import styled from "styled-components";

export const Styles = styled.div`
   {

    .container{
        padding-bottom: 5%
    }

    background-color:white
    
    
    .row {
    justify-content: center
    text-align: center;
    }

    // Title Header Style
    .title{
        margin-top: 5%
        color:#2a2a2a
        @media only screen and (max-width: 767px){
           margin-top:10%
        }
        font-family: 'Open Sans', sans-serif;
        font-size: 2vw
        letter-spacing: 1px
        font-weight: bold      
    }

    // Title Paragraph Style
    .title-text{
        margin-left: 5%
        margin-right: 5%
        line-height: 150%
        color:#2a2a2a
        @media only screen and (max-width: 767px){
            margin-left: 10%
            margin-right: 10%
            margin-top: -5%
            line-height: 150%
        }
        text-align: center
        
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5vw
        letter-spacing: 1px
        font-weight: bold 

    }


    // Row 2 Style (ROW OF COLUMNS)
    
    .row2{
        margin-top: 5%
        border:solid
        border-color:#c6cbca
        border-width: 1px
        border-radius: 10px
        overflow:hidden

        @media only screen and (max-width: 767px){
            margin-left: 5%
            margin-right: 5%
        }
        

    }

    // Columns Style
    .col{
        background-color: #b4b4b4
        border: solid
        border-radius: 10px
        padding
        overflow:hidden
        
    }

    // Icons Size
    .fas{
        margin-top: 5%
        color: black
        font-size: 3vw

    }

    .fa-database{
        margin-left: 5%
    }


    // Icon Div Style
    .icone{
        justify-content: center
        text-align: center
        
        p{
            font-size: 1.5vw
            color: #252424
            font-family: 'Open Sans', sans-serif;
            font-weight: bold;

            @media only screen and (max-width: 767px){
                margin-top: 5%
                font-size: 1.5vh;
            }
            
        }
    }


    .languages{
        display: inline;

        h1{
            font-size: 1.5vw;
            font-weight: bold
            color: black
            @media only screen and (max-width: 767px){
                font-size: 1.5vh;
            
            }
        }
        ul{
            justify-content: left
            text-align: center
            display: inline-block
            font-size: 1.2vw;
            font-weight: bold
            color: #252424
            @media only screen and (max-width: 767px){
                font-size: 1.1vh;
            }
        }
    }

    /*
    #col2{
        border-right:solid
        border-left: solid
        border-color: #c6cbca
        
        border-width: 2px
        @media only screen and (max-width: 767px){
            border-top:solid
            border-bottom: solid
            border-color:#dfd9d9
            border-width: 1px
        }*/
        
        

    }

    


  }
`;
