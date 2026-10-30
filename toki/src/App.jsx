import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import anfto from './assets/anfto.jpg';
import mafto from './assets/mafto.jpeg';
import frfto from './assets/frfto.jpg';
import kefto from './assets/kefto.jpg';
import dafto from './assets/dafto.jpg';
import carrito from './assets/minimalist-shopping-cart-icon-on-a-transparent-background-perfect-for-illustrating-ecommerce-retail-or-online-shopping-concepts-png-382940380.png';
import logo from './assets/Toki-nw-logo.svg';
import proto from './assets/proto.png';

function Main_Index() {
  return (
    <>
      <main>
        <div className="prin">
          <div className="titulos">
            <h2>Somos 5M.U.D.</h2>
            <p>
              Somos un grupo de estudiantes de la E.S.E.T.P. 724 quienes buscan con este proyecto, el ayudar a personas con dificultades en comunicarse con sus adultos responsables
            </p>
          </div>
          <div className="titulos">
            <h2>Nuestro equipo</h2>
            <p>
              Nuestro grupo esta conformado por: Angelina Mastrota en el rol de lider, Mariano Lapeire en el rol de desarrollador, Francisco Jimenez en el rol de tecnico, Dago Gimenez en el rol de Comunicacion y finanzas, Keanu Elisainzin en el rol de diseño grafico
            </p>
          </div>
          <div className="titulos">
            <h2>Sobre nuestro producto</h2>
            <p>
              Nuestro producto es un dispositivo de comunicacion silenciosa con un publico objetivo juvenil, que busca mejorar la comunicacion del usuario con su el adulto responsable dandole algo mas de independencia y confianza sin depender tanto de algun adulto en todas las situaciones
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )

}

function Main_Us() {
  return(
    <>
    <main class="prin">
        <div class="cara-cabecera">
            <h1>¿Quienes somos nosotros?</h1>
            <h4>Somos un grupo conformado por 5 estudiantes de 6to año de la escuela secundaria E.S.E.T.P. 724, de lo cual los integrantes son:</h4>
        </div>
        <div class="cara-grupo">
            <img src={anfto} alt="Fto de Angie" />
            <h3>Angelina Mastrota Riviere</h3>
            <p>Cumple dentro del equipo la funcion de lider con los roles de Belbin:</p>
            <ul>
                <li>Investigadora de recursos</li>
                <li>Impulsora</li>
            </ul>
        </div>
        <div class="cara-grupo">
            <img src={mafto} alt="Fto de Mariano" />
            <h3>Mariano Amir Lapeire Bellini</h3>
            <p>Cumple la funcion de desarrollaror y programador con los roles de Belbin:</p>
            <ul>
                <li>Finalizador</li>
                <li>Implementador</li>
            </ul>
        </div>
         <div class="cara-grupo">
             <img src={frfto} alt="Fto de Francisco" />
             <h3>Francisco Andres Jimenez</h3>
             <p>Cumple con el rol de tecnico y robotico con los roles de Belbin:</p>
             <ul>
                 <li>Cerebro</li>
              </ul>
         </div>
         <div class="cara-grupo">
             <img src={kefto} alt="Fto de Keanu" />
             <h3>Keanu Steven Elisaincin</h3>
             <p>Cumple como diseñador y encargado de markething con los roles de Belbin:</p>
             <ul>
                 <li>Especialista</li>
                  <li>Coordinador</li>
             </ul>
          </div>
         <div class="cara-grupo">
             <img src={dafto} alt="Fto de Dago" />
              <h3>Dago Luka Gimenez</h3>
             <p>Cumple como comunicador y encargado de teseroria con los roles de Belbin:</p>
              <ul>
                  <li>Monitor Evaluador</li>
                  <li>Cohesionador</li>
              </ul>
          </div>
      </main>
      <Footer/>
    </>
  )
}

function Main_Comprar() {
  return(
    <>
        <div class="compras-front">
            <h1>¿Como conseguir nuestro producto?</h1>
            <h2>Para conseguir nuestro producto, es a traves del contacto directo con algun miembro del proyecto de manera directa o mediante la red social de Toki</h2>
            <img src={carrito} alt="Compras" />
        </div>
        <Footer/>
    </>
  )
}

function Main_Proyecto() {
  return(
    <>
        <div class="toki-presentacion">
        <div className='toki-presentacion'>
          <h2>¿Que es TOKI?</h2>
          <p>Por 5 M.U.D</p>
          <img src={logo} alt="Toki logo" style={{ width: "200px", height: "auto" }} />
        </div>
        </div>
        <div class="toki-presentacion">
            <h4>
                TOKI es un proyecto escolar grupal de la Secundaria 724 "Presidente de la Nación Arturo Umberto Illía", que busca crear un dispositivo de inclusión para personas con dificultades del habla o que padecen algún trastorno del espectro autista, y que necesiten comunicarse dentro de un ambiente determinado únicamente con su adulto de confianza. Además, desarrollamos una aplicación que vincula el teléfono del adulto con el dispositivo del usuario, para que las alertas lleguen directamente a su celular y se lleve un registro de las interacciones, con el objetivo de mejorar la experiencia y adaptarla a las necesidades de cada persona. 
            </h4>
            <h4>A continuacion una imagen del prototipo</h4>
            <img src={proto} width="250px"></img>
        </div>
        <Footer/>
    </>
  )
}




function App() {
  return (
    <>
     <Header />
    </>
  );
}

export default App;
