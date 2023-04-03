import styled from "styled-components";
import logo from "../assets/imgs/uenf.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Style>
       <Link to={"/"} > 
         <div className="right">
        <img src={logo} />
        </div>
      </Link> 
    </Style>
  );
}

const Style = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  a{
    text-decoration: none;
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left{
    p{
        margin-right: 20px;
        color: var(--maincolor);
        font-weight: 700;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        
    }
  }
  p:hover{
    filter: brightness(1.5);
    cursor: pointer;
    text-decoration: underline;
    /* transition: 0.5s; */
  }
  h1 {
    font-family: "Righteous", cursive;
    font-size: 42px;
    color: #ff6961;
  }
  img {
    width: 200px;
    height: 70px;
    margin: 5px;
  }
`;