const Formulario = () => {

    return (
        <>
            <div className="w-1/2 contenedor">
                <p className="general-title">Calculadora de Grasa Corporal</p>
                <p className="title-second">El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tehido adiposo en el cuerpo de una persona.</p>
                <p className="title-third">Los valores requedidos por la fórmula son los siguientes:</p>

                <form>
                    <label className="genero">Género</label>
                    <div className="row">
                        <div className="column" >
                            <input type="radio" id="hombre" />
                            <label for="hombre" className="radios">Hombre</label>
                        </div>
                        <div className="column" >
                            <input type="radio" id="mujer" />
                            <label for="mujer"
                                className="radios">Mujer</label>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="altura" className="altura">
                            Altura (cm)</label>
                        <div className="space"></div>
                        <input
                            id="altura"
                            type="text"
                            placeholder="Escribe tu altura"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="altura" className="altura">
                            Peso (kg)</label>
                        <div className="space"></div>
                        <input
                            id="peso"
                            type="text"
                            placeholder="Escribe tu peso"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="cintura" className="altura">
                            Cintura (cm)</label>
                        <div className="space"></div>
                        <input
                            id="cintura"
                            type="text"
                            placeholder="Medida de tu cintura"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="cuello" className="altura">
                            cuello (cm)</label>
                        <div className="space"></div>
                        <input
                            id="cuello"
                            type="text"
                            placeholder="Medida de tu cuello"
                        />
                    </div>

                    <div className="row">
                        <div className="column" >
                            <button class="button-calcular">Calcular</button>
                        </div>
                        <div className="column" >
                            <button class="button-limpiar">Limpiar</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Formulario; 