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
    // Margin to all rows
    .row{
        margin-left: 3vw
        margin-right: 3vw
      }
    #row1{
        
        text-align:center
        justify-content:center
        

        h1{
        font-family: 'Lato', sans-serif;
        font-size: 3vw
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
    
    .cards{

        #inner{
        overflow: hidden;
        }
    }

    .card-img-top{
        transition: all 1s ease;
        &:hover{
            transform: scale(1.5)
        }
    }
    
    
    .card{
        background-color: white
        box-shadow: 5px 10px 20px 1px rgba(0,0,0, 0.8);
        border-color: #ece7f7
        border-radius: 8px
        &:hover{
        box-shadow: 5px 10px 20px 1px rgba(0,0,0, 1) !important;
        }
    }


    #title{
        font-weight: bold
        font-family: 'Lato', sans-serif;
        font-size: 1.6vw
    }
    #text{
        font-family: 'Lato', sans-serif;
        font-size: 1.4vw;
        
    }

    #button{
        background-color: black
        font-family: 'Lato', sans-serif;
        font-weight: bold
        font-size: 1.2vw
        border-color: black

        &:hover{
            background-color: #bbb
            color: black
            border-color:#bbb
        }
    }
    #body{
        background-color:#ece7f7
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
