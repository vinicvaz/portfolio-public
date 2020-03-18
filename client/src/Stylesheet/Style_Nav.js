import styled from "styled-components";
import "../App.css";
export const Styles = styled.div`{



  // NavBar Class Style
  .navbar {
    background-color: transparent;
    height: 8vh;
    margin-top: 4vh
    position: absolute

  }


  .scrolled{
    background-color: red
  }

  // Navbar Brand Style
  .navbar-brand{
    font-family: 'Lato', sans-serif;
    font-size: 3vw;
    font-weight:bold
    color: #bbb
    margin-right: 10px
    margin-left: 10px
    span{
      font-weight: normal
      margin-right:1px
  }
    
    &:hover {
      color: white;
    }
  }


  // Nav Links Styles
  #link{
    font-family: 'Lato', sans-serif;
    font-size: 1.5vw;
    color: #bbb
    margin-right: 10px
    margin-left: 10px
    
    

    &:hover {
      color: white;
    }
  }

  // Style for Active Link in NavBar
  .navbar-nav .nav-link.active {
    color: #bbb
    font-weight:bold
  }

  // Change Togle Icon Color
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }


  

}





  

  
`;
