
import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/layout/Container";

const designoptions = () => {
    const [searchWord, setSearchWord] = useState("")
    const handleChange = (e) => {
      e.preventDefault();
      setSearchWord(e.target.value)
    }
  return <Container space padding>
<input  id="search " name="q" onChange={handleChange} value={searchWord}/>
</Container>;
};



export default designoptions;
