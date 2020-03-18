import "../App.css";
import styled from "styled-components";

export const Styles = styled.div`
{


    // SetUp the First Screen Setting of About Page

    height: 100%;
    widht: 100%;
    background: rgb(211,204,227);
    background: linear-gradient(to bottom, rgba(211,204,227,1) 0%, rgba(234,233,235,1) 1.5%);

    margin: 0;
    overflow: auto;
    .container{
        margin-top: 5%
        margin-bottom: 5%
    }

    #row1{
        
        text-align:center
        justify-content:center
        

        h1{
        font-family: 'Lato', sans-serif;
        font-size: 3vw
        @media only screen and (max-width: 767px){
            font-size: 2.5vh
        }
        text-transform: uppercase;
        font-weight: bold
        text-shadow: 0px 5px 5px #666;
        letter-spacing: .3vw
        border-bottom: .4vh solid currentColor;
        border-width: .2vw
        display: inline-block
        }
    }

    #row2{
        margin-top: 3%
        jusitfy-content:center
        text-align: center
        
    }
    
    
// Style for Images and Img Container
    .inner{
        border: solid
        border-width: 0px
        border-radius: 20px
        position: relative
        overflow: hidden

        // Conditions to small screen
        @media only screen and (max-width: 767px){
            margin-top: 5%
        }

        &:hover{
            box-shadow: 5px 10px 20px 1px rgba(0,0,0, 1);
        }

    }

    .image{
        display: block
        transition: all 1s ease;
        position: relative
    }

    .header{
        font-family: 'Lato', sans-serif;
        font-size: 1.5vw
        @media only screen and (max-width: 767px){
            font-size: 2.5vh
        }
        text-transform: uppercase;
        font-weight: bold
        letter-spacing: 1.2px
        color: white
        opacity: 0%
        transition: all 1s ease;
    }

    .text{
        font-family: 'Lato', sans-serif;
        font-size: 1.5vw
        @media only screen and (max-width: 767px){
            font-size: 2.5vh
        }
        color: white
        transition: all 1s ease;
        opacity: 0%
    }

    .btn{
        background-color: rgba(0, 0, 0, 0);
        font-size: 1.2vw
        @media only screen and (max-width: 767px){
            font-size: 2.5vh
        }
        border-color: orange
        border-radius: 10px
        letter-spacing: 1.2px
        font-family: 'Lato', sans-serif;
        font-weight: bold
        transition: all 1s ease;
        opacity: 0%
    }
    #btn2{
        color:red
    }


    .overlay {
        position: absolute;
        top: 45%;
        left: 0;
        width: 100%;
        background: cover
        height: 100%
        transition: all 1s ease;
        background-color:black
        background-color:rgba(0, 0, 0, 0);

    }


// TRANSFORMATIONS WHEN HOVER //

    .inner:hover .image{
        transform: scale(1.3)
    }

    .inner:hover .overlay{
        background-color:rgba(0, 0, 0, 0.7);
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


    










    /*
    .card-text{
        visibility: hidden;
        transition: opacity .2s, visibility .2s;
    }
    .card-title{
        visibility: hidden
        transition: opacity .2s, visibility .2s;
    }

    .card:hover{
        .card-title,
        .card-text{
            visibility: visible
        }
        
    }
    */
 

}
`;
