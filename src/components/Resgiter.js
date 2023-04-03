import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Register(){
        const [name, setName] = useState("");
        const [qtt, setQtt] = useState(0);
        const [image, setImage] = useState("");
        const [desc, setDesc] = useState("");
      
        function handleSubmmit(event) {
          event.preventDefault();
          const body = {
            name,
            qtt: Number(qtt),
            image,
            desc,
          };
          axios
            .post(`${process.env.REACT_APP_URL}/add-product`, body)
            .then((response) =>{ 
              console.log(response.data)
              alert("produto adicionado com sucesso")
            })
            .catch((err) => console.log(err));
        }
      
        return (
          <>
          <Header/>
       
          <Container>
            <form>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <input
                type="text"
                placeholder="amount"
                value={qtt}
                onChange={(e) => {
                  setQtt(e.target.value);
                }}
              ></input>
              <input
                type="text"
                placeholder="Image"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              ></input>
              <input
                type="text"
                placeholder="Description"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></input>
            </form>
            <button onClick={handleSubmmit}>submmit</button>
          </Container>
          </>
    )
}

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  padding: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-bottom: 10px;
  }
`;