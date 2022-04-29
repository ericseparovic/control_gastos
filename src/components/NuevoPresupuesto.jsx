const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Anade presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)} 
          />
        </div>

        <input type="submit" value="Anadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
