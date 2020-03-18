import "../App.css";
import styled from "styled-components";

export const Styles = styled.div`
{


    // Containers Section
    #ctn1{
        background: rgb(0,0,0);
        background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 1.5%);
        padding-top: 3%
        padding-bottom: 5%
    }

    #ctn2{
        background-color: white
        margin-bottom: 3%
       
    }
    //////////////////////////// 
    
    // Title Header Style
    .title{
        font-family: 'Oswald', sans-serif;
        font-size: 2vw
        letter-spacing: 1px
        font-weight: bold 
        margin-top: 5%
        color:#2a2a2a
        @media only screen and (max-width: 767px){
           margin-top:10%
           font-size: 18px
        }

        span{
            color: #de7b49
        }
     
    }

    // Alygn Title Text on the middle
    #col1{
        display:flex
        align-items: center
    }



    .title-text{
        color: #2a2a2a
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.5vw;
        letter-spacing: 1.2px;
        line-height: 30px;
        font-weight: bold;
        margin-top: 3%
        display: block;
        
        @media only screen and (max-width: 767px){
            line-height: 2em
            display: block
            font-size: 16px
        }
    }

    // Row 2 Align
    .row2{
        justify-content:center
        text-align: center
    }


    // Set Style of Content inside Skills Card
    .col-img{
        text-align: center
        background-color: #141313
        opacity: 90%                                                                                                                                                                                                
        border-bottom: solid
        border-radius: 5px
        border-color: #141313
        border-width: 1em
        box-shadow: 5px 10px 20px 1px rgba(0,0,0, 1);

        h1{
            
            text-align: center
            font-size: 300%
            color: white
            font-family: 'Oswald', sans-serif;
            font-weight: semi-bold
            letter-spacing: 5px

            @media only screen and (max-width: 767px){
                font-size: 150%
            }


        }
    
        li{
            display: block
            font-size: 130%
            color: white
            font-family: 'Cormorant Garamond', serif;
            font-weight: semi-bold
            letter-spacing: 1.5px
        }

        @media only screen and (max-width: 767px){
            opacity: 100%
        }

        
    }



    // Set Style of Skills Row (bg image and sizes)
    .row-skills{
        background: url('https://i.imgur.com/4UVSm6S.jpg') no-repeat;
        background-position: center
        background-size: 100% 85%; 
    }



    // Create inner borders of skills card
    .in-col{
        border-right: solid
        border-left: solid
        border-color: #807171
        border-width: 1px
        
        @media only screen and (max-width: 767px){
            border-top: solid
            border-bottom: solid
            border-color: white
            border-width: 1px    
        }
    }



    .col2{
        padding-top: 3%
        justify-content: center
        text-align: center
        
    }
    
    .figures{
        width: 80%
    }

    .caption{
        font-family: 'Cormorant Garamond', serif;
        color: black
        font-weight: semi-bold
        font-size: 1.5vw

        @media only screen and (max-width: 767px){
            font-size: 16px
        }
        
        

    }

    .row-dev{
        padding-top: 4%
    }

    .col-dev{
        justify-content: center
        text-align: left
        padding-top: 4%
        padding-left: 2%
        @media only screen and (max-width: 767px){
            text-align: center
         }

    }

    .title-dev{

        font-family: 'Oswald', sans-serif;
        font-size: 3vw
        letter-spacing: 2.5px
        font-weight: bold 
        line-height: 0px;
        @media only screen and (max-width: 767px){
            text-align: center
            font-size: 18px
         }
         
        span{
            color: #de7b49
        }
    }

    .text-dev{

        color: #2a2a2a
        font-family: 'Cormorant Garamond', serif;
        font-size: 2vw;
        letter-spacing: 2px;
        line-height: 30px;
        font-weight: bold;
        @media only screen and (max-width: 767px){
            text-align: center
            font-size: 16px
         }

    }


    
}
`;
