import { useState, useEffect } from "react";

const Formulario = () => {

    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [cintura, setCintura] = useState('')
    const [cuello, setCuello] = useState('')

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([altura, peso, cintura, cuello].includes('')) {
            console.log('Hay al menos un campo vacio')
            setError(true)
            return;
        }

        setError(false)
    }

    return (
        <>
            <div className="w-1/2 contenedor">
                <p className="general-title">Calculadora de Grasa Corporal</p>
                <p className="title-second">El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tehido adiposo en el cuerpo de una persona.</p>
                <p className="title-third">Los valores requedidos por la fórmula son los siguientes:</p>

                <form onSubmit={handleSubmit}>

                    {error && (
                        <div>
                            <p className="error">Todos los campos son obligatorios</p>
                        </div>
                    )}
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
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
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
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
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
                            value={cintura}
                            onChange={(e) => setCintura(e.target.value)}
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
                            value={cuello}
                            onChange={(e) => setCuello(e.target.value)}
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