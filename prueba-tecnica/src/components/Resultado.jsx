const Resultado = ({ resultados, setResultados }) => {

    console.log('componente resultado', resultados)
    console.log('resultado', resultados.resultado)

    const { resultado } = resultados;

    return (

        <>
            <div className="w-1/2">
                <p className="resultado">Tu resultado: {resultado} %</p>
            </div>
        </>

    )
}

export default Resultado; 