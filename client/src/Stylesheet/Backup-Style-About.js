import "../App.css";
import styled from "styled-components";

export const Styles = styled.div`
{
    // SetUp the First Screen Setting of About Page
   
    height: 100%;
    widht: 100%;
    
    background: #D3CCE3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #E9E4F0, #D3CCE3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    margin:0;
    overflow:auto




    // Margin to all rows
    .row{
        margin-left: 1vw
        margin-right: 1vw
      }

    // Style of Row1 (About Me row)
    #row1{
        display: inline-block;
        justify-content: center;
        text-align: left 
        

        h1{
          
          text-transform: uppercase;
          text-shadow: 0px 5px 5px #666;
          letter-spacing: .3vw
          border-bottom: .4vh solid currentColor;
          border-width: .2vw
          display: inline-block
          margin-top: 5vh
          font-size: 3vw
          font-weight: bold
          font-family: 'Lato', sans-serif;
          
          
          
        }
        span{
          font-size: 1.8vw
          letter-spacing: 0.1vw;
          font-weight: bold
          font-family: 'Lato', sans-serif; 
          

        }
        p{
          font-size: 1.2vw
          letter-spacing: 0.1vw;
          line-height: 2em
          font-weight: bold
          font-family: 'Lato', sans-serif; 
        }

    }

@media only screen and (min-width: 768px){

    // Set Style to Skills Title Column
    #title-Skills{
      display: inline
      text-align: center
    h1{
        text-shadow: 0px 5px 5px #666;
        letter-spacing: .3vw
        margin-top: 0
        border-bottom: .4vh solid currentColor;
        border-width: .2vw
        display: inline-block
        font-size: 3vw
        font-weight: bold
        font-family: 'Lato', sans-serif;

      }
      
    }


    // Style for Languages Column
    #languages{
          padding:0px
          display: inline-block

          p{
            
            margin-left: 1%vw
            font-size: 1.2vw
            letter-spacing: 1.2px;
            line-height: 2em
            font-weight: bold
            font-family: 'Lato', sans-serif;
            
           
          }
       }

      //Style for Extra Skills column
      #extra{
        
        text-align: left
        display: inline-block;
        margin-left: 8%
    
        p{
          padding-left: 30%
          font-size: 1.2vw
          letter-spacing: 0.08vw;
          line-height: 2em
          font-weight: bold
          font-family: 'Lato', sans-serif;
          
         
        }
      }
}

     

      //Set Style to This Site Title Column
      #title-Site{
          padding:0

        h1{
            text-shadow: 0px 5px 5px #666;
            letter-spacing: .3vw
            margin-top: 0
            border-bottom: .4vh solid currentColor;
            border-width: .2vw
            display: inline-block
            font-size: 3vw
            font-weight: bold
            font-family: 'Lato', sans-serif;

        }
          p{
            font-size: 1.2vw
            letter-spacing: 0.1vw;;
            line-height: 2em
            font-weight: bold
            font-family: 'Lato', sans-serif; 
          }
          a{
            font-size: 1.2vw
            letter-spacing: 0.1vw;
            line-height: 2em
            font-weight: bold
            font-family: 'Lato', sans-serif; 
            color: currentColor
            text-decoration: underline
            
            &:hover{
              color:blue
            }
      
            }
        }
          
      }


    #lgs{
      justify-content:left
      text-align: left
    }

    // Styles to Icons
      .fas,
      .fab{
          font-size: 2vw
          span{
              font-size: 1.5vw
              margin-left: 1.3vw
              font-weight: bold
              font-family: 'Lato', sans-serif;
          }
      }


// Responsive Styles to Skills Columns
@media only screen and (max-width: 767px){

      // Set Style to Skills Title Column
      #title-Skills{
        
        text-align: center
        padding: 0
        

        i{
          padding: 1vw
        }
        
      h1{
          
          text-shadow: 0px 5px 5px #666;
          letter-spacing: .3vw
          margin-top: 0
          border-bottom: .4vh solid currentColor;
          border-width: .2vw
          display: inline-block
          font-size: 3vw
          font-weight: bold
          font-family: 'Lato', sans-serif;
  
        }
        
      }
  
  
      // Style for Languages Column
      #languages{

            text-align: center
            margin-top: -5%
           
            
            p{
              margin-left: 1vw
              font-size: 1.2vw
              letter-spacing: 0.08vw;
              line-height: 2em
              font-weight: bold
              font-family: 'Lato', sans-serif;
              
              
            }
          }
  
        //Style for Extra Skills column
        #extra{
          
          text-align: center
          margin-top: -5%
          
      
          p{
            margin-left: 1vw
            font-size: 1.2vw
            letter-spacing: 0.08vw;
            line-height: 2em
            font-weight: bold
            font-family: 'Lato', sans-serif;
            
            
          }
        }
}



}
`;
