import Carousel from "react-bootstrap/Carousel";
import carouselData from "../../data/CarouselData";
import "./Carousel.css";

function CarouselF() {
  return (
    <Carousel>
      {carouselData.map((item, index) => (
        <Carousel.Item key={index} className="custom-slide">
          <div className="slide-content d-flex">
          <div className="image-container">
              <img src={item.src} alt={item.alt} className="slide-image" />
            </div>
            <div className="text-container">
              <h3 className="lable">{item.label}</h3>
              <p className="description">{item.description}</p>
            </div>
   
             </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselF;