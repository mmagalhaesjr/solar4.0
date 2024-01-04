import { StyledNumeros } from "./styled";
import { useState, useEffect } from "react";





export default function Numeros() {
    const [scrollY, setScrollY] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [animationActive, setAnimationActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
        if (window.scrollY > 3200) {
            setAnimationActive(true);
        }
    };

    useEffect(() => {
        let interval;
        if (animationActive) {
            interval = setInterval(() => {
                setNumber1(prevNumber => {
                    const newNumber = prevNumber + 10000;
                    return newNumber >= 600000 ? 600000 : newNumber;
                });
    
                setNumber2(prevNumber => {
                    const newNumber = prevNumber + 25;
                    return newNumber >= 1500 ? 1500 : newNumber;
                });
            }, 50);
        }

        return () => {
            clearInterval(interval);
        };
    }, [animationActive]);



    return (
        <StyledNumeros className={scrollY > 3000 ? 'rolagem' : ''}>

            <div id="container">

                <div id="titulo">
                    <h1>NOSSOS NÚMEROS</h1>
                </div>

                <div id="containerAnimacao">
                    <div className="bolhas">
                        <span style={{ '--i': 11 }}></span>
                        <span style={{ '--i': 40 }}></span>
                        <span style={{ '--i': 2 }}></span>
                        <span style={{ '--i': 18 }}></span>
                        <span style={{ '--i': 22 }}></span>
                        <span style={{ '--i': 7 }}></span>
                        <span style={{ '--i': 38 }}></span>
                        <span style={{ '--i': 11 }}></span>
                        <span style={{ '--i': 70 }}></span>
                        <span style={{ '--i': 1 }}></span>
                        <span style={{ '--i': 38 }}></span>
                        {/* <span style={{ '--i': 8 }}></span>
                    <span style={{ '--i': 43 }}></span>
                    <span style={{ '--i': 99 }}></span>
                    <span style={{ '--i': 29 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 5 }}></span>
                    <span style={{ '--i': 73 }}></span>
                    <span style={{ '--i': 24 }}></span>
                    <span style={{ '--i': 29 }}></span>
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 58 }}></span>
                    <span style={{ '--i': 84 }}></span>
                    <span style={{ '--i': 29 }}></span> */}
                    </div>

                    <div className="cxCirculo">
                        <div id="circulo1" className="circulo">
                            <div className="circuloInterno"><p>{number1.toLocaleString()}</p></div>
                        </div>

                        <div className="fundoTexto">
                            <h3>KWH GERADO/MÊS</h3>
                        </div>
                    </div>

                    <div className="cxCirculo">
                        <div id="circulo2" className="circulo">
                            <div className="circuloInterno"><p>{number2.toLocaleString()}</p></div>
                        </div>

                        <div className="fundoTexto">
                            <h3>MÓDULOS INSTALADOS </h3>
                        </div>
                    </div>
                </div>
            </div>
        </StyledNumeros>
    )
}
