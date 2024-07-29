
'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@nextui-org/react";
import { Text } from "@/app/componentes/inputs/text";
import { Password } from "@/app/componentes/inputs/password";
import React, { useRef, useEffect, useState } from "react";


import axios from 'axios';




export default function Home() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    // try {
    //   // Realiza la petición POST a la API
    //   const response = await axios.post('/api/login', {
    //     usuario,
    //     password,
    //   });

    //   // Maneja la respuesta de la API
    //   console.log(response.data);
    //   // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
    // } catch (error) {
    //   console.error('Error al iniciar sesión:', error);
    //   // Aquí podrías mostrar un mensaje de error
    // }
  };
  const handleChange = (e) => {
    setUsuario(e.target.value);
};

  function handleClick() {
    console.log("On click")
    alert("on click")
  }
  return (
    <>
      <section className='form-login'>
        <h5>Formulario Login</h5>

        <Text
          type="text"
          name="usuario"
          id="usuario"
          value="usuario"
          onChange={handleChange}
          placeholder="Enter your User"
          className="form-login-user"
        />



        {/* <Text></Text> */}
        <Password></Password>
        <Button color="primary" className="buttonEnviar" onClick={handleClick}>
          Ingresar
        </Button>
        <p><a href="#">¿Olvidastes tu Contraseña?</a></p>
      </section>
    </>
  );
}
