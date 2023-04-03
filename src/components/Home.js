
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import deleteIcon from "../assets/imgs/trash-outline.svg"
import { Link } from "react-router-dom";


export default function Home(){
  const [products, setProducts] = useState([]);
  const [reload,setReload] = useState(false)
  const [selected, setSelected] = useState(false)
 // const [cont, setCont] = useState(0);
 const URL_DELETE =  `${process.env.REACT_APP_URL}/delete`
 const URL_PATCH = `${process.env.REACT_APP_URL}/update`
  useEffect(()=>{
    axios
    .get(`${process.env.REACT_APP_URL}/get-product`)
    .then((response) => { 
    console.log(response.data)
    setProducts(response.data)})
    .catch((err) => console.log(err));
  },[reload])

 function countPlus(id){
  console.log(id)
  axios.patch(`${process.env.REACT_APP_URL}/product-plus/${id}`)
  .then((response)=>{
    setReload(!reload)
    console.log(response.data)
  })
  .catch((e)=>{
    console.log(e.response)
   })

 }
 function countLess(id){
  console.log(id)
  axios.patch(`${process.env.REACT_APP_URL}/product-less/${id}`)
  .then((response)=>{
    setReload(!reload)
    console.log(response.data)
  })
  .catch((e)=>{
    console.log(e.response)
   })

 }
 function deleteProduct(id){
  console.log('olha o ', id)
   axios.delete(`${process.env.REACT_APP_URL}/delete/${id}`)
   .then((response)=>{
    setReload(!reload)
    console.log(response.data)
    alert("Produto deletado")
   })
   .catch((e)=>{
    console.log(e.response)
   })
 }

return (
    <>
    <Header/>
    <Style>
      {products.map((el)=>{return(
         <Box key={el.id} > 
         <img  src = {el.image} />
          <p>{el.name}</p> 
          <div className="buttonsQuantity">
            <button onClick={() => countLess(el.id)}>-</button>
              {el.qtt}
              <button onClick={() => countPlus(el.id)}>+</button>
            </div>
            <img onClick={()=>deleteProduct(el.id)} class="delete" src = {deleteIcon}/>
         </Box>
         )
         } ) }
 
    </Style>
     </>
)
}

const Style = styled.div`
margin-top: 80px;
  display: flex;
  padding: 100px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

`

const Box = styled.div`
width: 200;
height: 300px;
background-color: #fff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-right: 15px;
margin-top: 15px;
flex-direction: column;
padding: 20px;

img{
  width: 150px;
  height:150px
  0px
}

/*
:hover{
  cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
}
*/

.buttonsQuantity{
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 20px;
        cursor:pointer;
       
      
    }
   
.delete{
  margin-top: 10px;
  width:30px;
  height: 20px;

}
`