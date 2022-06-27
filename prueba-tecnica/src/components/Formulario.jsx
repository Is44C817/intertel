import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ resultados, setResultados }) => {
    const [genero, setGenero] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [cintura, setCintura] = useState('')
    const [cuello, setCuello] = useState('')
    const [resultado, setResultado] = useState('')


    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([genero, altura, cintura, cuello].includes('')) {
            console.log('Hay al menos un campo vacio')
            setError(true)
            return;
        }
        let res;
        if (genero === 'H') {
            res = ((495 / (1.0234 - 0.19055 * Math.log10(10) * (cintura - cuello)) + 0.15456 * Math.log10(10) * altura)) - 450
            console.log('resultado H', res)
            setResultado(res)

        } else {
            res = ((495 / (1.29579 - 0.35004 * Math.log10(10) * (cintura + peso - cuello)) + 0.22100 * Math.log10(10) * altura)) - 450
            console.log('resultado M', res)
            setResultado(res)
        }

        setError(false)

        const objetoCalculadora = {
            genero,
            altura,
            peso,
            cintura,
            cuello,
            resultado
        }

        setResultados([...resultados, objetoCalculadora])

        //reinicar formulario
        setGenero('')
        setAltura('')
        setPeso('')
        setCintura('')
        setCuello('')
        setResultado('')

    }

    return (
        <>
            <div className="w-1/2 contenedor">
                <p className="general-title">Calculadora de Grasa Corporal</p>
                <p className="title-second">El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tehido adiposo en el cuerpo de una persona.</p>
                <p className="title-third">Los valores requedidos por la fórmula son los siguientes:</p>

                <form onSubmit={handleSubmit}>

                    {error && (
                        <Error />
                    )}
                    <label className="genero">Género</label>
                    <div className="row">
                        <div className="column" >
                            <input type="radio" id="hombre"
                                value="H"
                                name="genero"
                                onChange={(e) => setGenero(e.target.value)} />
                            <label for="hombre" className="radios">Hombre</label>
                        </div>
                        <div className="column" >
                            <input type="radio" id="mujer"
                                value="M"
                                name="genero"
                                onChange={(e) => setGenero(e.target.value)} />
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
                            <button class="button-limpiar"
                                onclick="limpiar()">Limpiar</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Formulario; 