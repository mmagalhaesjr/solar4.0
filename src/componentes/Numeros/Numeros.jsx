import { StyledNumeros } from "./styled";
import { useState, useEffect } from "react";



export default function Numeros() {

    const [scrollY, setScrollY] = useState(0);
    const [number, setNumber] = useState(0);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const handleScroll = () => {
      setScrollY(window.scrollY);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber === 100) {
          clearInterval(interval);
          // Pausar a animação quando atingir 100, se necessário
        }
        return prevNumber < 100 ? prevNumber + 1 : prevNumber;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);


    return (
        <StyledNumeros className={scrollY > 4500 ? 'rolagem' : ''}>
            <div id="titulo">
                <h1>NOSSOS NÚMEROS</h1>
            </div>
            <div id="container">
               
                <div className="containerTeto-circulo"> 
                
                <div id="circulo1" className="circulo">
                    <div className="circuloInterno">{number}</div>
                </div>

                <h3>KWH GERADO/MÊS</h3>

                </div>

                <div className="containerTeto-circulo"> 
                
                <div id="circulo1" className="circulo">
                    <div className="circuloInterno">{number}</div>
                </div>

                <h3>MÓDULOS INSTALADOS </h3>

                </div>

                <div className="containerTeto-circulo"> 
                
                <div id="circulo1" className="circulo">
                    <div className="circuloInterno">{number}</div>
                </div>

                <h3>KWH GERADO/MÊS</h3>

                </div>

            </div>
        </StyledNumeros>
    )
}
