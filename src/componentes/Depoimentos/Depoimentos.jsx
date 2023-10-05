import { useRef } from "react";
import { StyledDepoimentos } from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Depoimentos() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, // Desabilita as setas do slick
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext(); // Move o carrossel para a próxima página
  };

  return (
    <StyledDepoimentos>
      <div id="titulo">
        <h1 >DEPOIMENTOS</h1>
      </div>

      <div id="container">
        <Slider {...settings} ref={sliderRef}>
          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"> <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG14.png" alt="" /></div>
              <h2>Pikachu</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quia repellendus sed, corrupti nam nostrum voluptate consequatur
                explicabo aspernatur illo nulla at molestiae nesciunt vel quasi,
                eum praesentium quis. Quaerat.</p>
            </div>
            </div>
            <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://th.bing.com/th/id/R.ad0ee7e79d062ab11be53abe2ce807e5?rik=fR3DZJq%2ffk%2bt7w&riu=http%3a%2f%2ffc09.deviantart.net%2ffs70%2fi%2f2013%2f082%2f7%2f5%2f004_charmander_by_pklucario-d5z1g9v.png&ehk=HubTBnnIXfVt%2bVeVmT2ml8QF6fyOuMeGuM%2fad798MrI%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
              <h2>charmander</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quia repellendus sed, corrupti nam nostrum voluptate consequatur
                explicabo aspernatur illo nulla at molestiae nesciunt vel quasi,
                eum praesentium quis. Quaerat.</p>
            </div>
            </div>
            <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://th.bing.com/th/id/R.a2132926c22d6dc4b7e3811aad1454d1?rik=ovdFDHtg6rYY6A&pid=ImgRaw&r=0" alt="" /></div>
              <h2>Bubblesaur</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quia repellendus sed, corrupti nam nostrum voluptate consequatur
                explicabo aspernatur illo nulla at molestiae nesciunt vel quasi,
                eum praesentium quis. Quaerat.</p>
            </div>
            </div>
            <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://mestrepokemon.com/wp-content/uploads/2019/11/Squirtle-Pok%C3%A9dex.jpg" alt="" /></div>
              <h2>squirtle</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quia repellendus sed, corrupti nam nostrum voluptate consequatur
                explicabo aspernatur illo nulla at molestiae nesciunt vel quasi,
                eum praesentium quis. Quaerat.</p>
            </div>
            </div>
            <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://th.bing.com/th/id/R.902b7393cd8e79f35d96ff3d6dfd919d?rik=FCweedFB%2fzN4Bg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fgHc7McU.jpg&ehk=HWCjdOsOsITPZJJkXKG4ia8aPfhBXxQ9rowu4Toxw70%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
              <h2>charizard</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quia repellendus sed, corrupti nam nostrum voluptate consequatur
                explicabo aspernatur illo nulla at molestiae nesciunt vel quasi,
                eum praesentium quis. Quaerat.</p>
            </div>
            </div>
            <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://th.bing.com/th/id/R.4e5daabdd05d0e95390eb1b4441f7149?rik=WFx1r%2bbhhvi2mQ&riu=http%3a%2f%2fwww.lepetitshaman.com%2fwp-content%2fuploads%2f2016%2f07%2fmewtwo-pokemon-go.jpg&ehk=sBUfJTabzsTUAAEm3wD6gZAAuSksGGUTkfjBzsiHgg0%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
              <h2>mil two </h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quia repellendus sed, corrupti nam nostrum voluptate consequatur
                explicabo aspernatur illo nulla at molestiae nesciunt vel quasi,
                eum praesentium quis. Quaerat.</p>
            </div>
            </div>
        </Slider>

      </div>
      <button onClick={handleNextClick}>Próxima</button>

    </StyledDepoimentos>
  );
}
