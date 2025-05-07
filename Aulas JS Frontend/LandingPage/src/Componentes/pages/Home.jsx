import { BottomNavigationAction } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"
import Banner from "../Banner/Banner";

export const Home = () => {
  return (
    <section>
      <h1>TechSolutions</h1>
      <Banner></Banner>
      <br></br>
      <br></br>
      <i style={{fontSize:'20px'}}>Sua próxima revolução automotiva começa aqui.</i>
      <br></br>
      <Link to='/projeto'><BottomNavigationAction sx={{marginRight:'-75px'}}/>Saiba Mais</Link>
    </section>
  );
};
