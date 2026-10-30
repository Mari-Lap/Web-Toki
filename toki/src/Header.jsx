function Header() {
  const [cont, setCont] = useState(1); //salvenme

  return (
    <div>
      <div className="navegador">
        <button className="btn-imagen" onClick={() => setCont(1)}>
          <img src={logo} alt="Toki - Inicio" />
        </button>
        <button onClick={() => setCont(2)}>Sobre nosotros</button>
        <button onClick={() => setCont(3)}>Sobre nuestro proyecto</button>
        <button className="btn-imagen" onClick={() => setCont(4)}>
          <img src={carrito} alt="Comprar producto" style={{ height: "80px", width: "80px" }} />
        </button>
      </div>

      <div className="cuerpo">
        {cont === 1 && <Main_Index />}
        {cont === 2 && <Main_Us />}
        {cont === 3 && <Main_Proyecto />}
        {cont === 4 && <Main_Comprar />}
      </div>
    </div>
  );
}

export default Header;
