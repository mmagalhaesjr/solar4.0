import { useState } from 'react';
import CarouselContainer from 'styled-components';
import CarouselItem from 'styled-components';



const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <CarouselContainer>
      <CarouselItem>
        {items.map((item, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            {item}
          </div>
        ))}
      </CarouselItem>
      <button onClick={previousSlide}>Anterior</button>
      <button onClick={nextSlide}>Próximo</button>
    </CarouselContainer>
  );
};

export default Carousel;
