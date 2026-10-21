import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
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
  );
}

export default App;
