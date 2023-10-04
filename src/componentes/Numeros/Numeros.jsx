import { StyledNumeros } from "./styled";
import { useState, useEffect } from "react";





    export default function Numeros() {
        const [scrollY, setScrollY] = useState(0);
        const [number1, setNumber1] = useState(0);
        const [number2, setNumber2] = useState(0);
        const [number3, setNumber3] = useState(0);
        const [animationActive, setAnimationActive] = useState(false);
    
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 4500) {
                setAnimationActive(true);
            }
        };
    
        useEffect(() => {
            let interval;
            if (animationActive) {
                interval = setInterval(() => {
                    setNumber1(prevNumber => {
                        if (prevNumber >= 15000) {
                            clearInterval(interval);
                            return prevNumber;
                        }
                        return prevNumber + 200;
                    });
                    setNumber2(prevNumber => {
                        if (prevNumber >= 600) {
                            clearInterval(interval);
                            return prevNumber;
                        }
                        return prevNumber + 10;
                    });
                    setNumber3(prevNumber => {
                        if (prevNumber >= 15000) {
                            clearInterval(interval);
                            return prevNumber;
                        }
                        return prevNumber + 200;
                    });
                }, 50);
            }
    
            return () => {
                clearInterval(interval);
            };
        }, [animationActive]);


    return (
        <StyledNumeros className={scrollY > 4500 ? 'rolagem' : ''}>
            <div id="titulo">
                <h1>NOSSOS NÚMEROS</h1>
            </div>
            <div id="container">
               
                <div className="containerTeto-circulo"> 
                
                <div id="circulo1" className="circulo">
                    <div className="circuloInterno">{number1}</div>
                </div>

                <h3>KWH GERADO/MÊS</h3>

                </div>

                <div className="containerTeto-circulo"> 
                
                <div id="circulo2" className="circulo">
                    <div className="circuloInterno">{number2}</div>
                </div>

                <h3>MÓDULOS INSTALADOS </h3>

                </div>

                <div className="containerTeto-circulo"> 
                
                <div id="circulo3" className="circulo">
                    <div className="circuloInterno">{number3}</div>
                </div>

                <h3>KWH GERADO/MÊS</h3>

                </div>

            </div>
        </StyledNumeros>
    )
}
