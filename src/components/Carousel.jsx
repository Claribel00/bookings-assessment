import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const url1 = "https://media.gamestop.com/i/gamestop/10154139/Sony-PlayStation-4-Pro-1TB-Console-White?$pdp2x$"
  const url2 = "https://www.avsforum.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.avsforum.com/attachments/best-ps4-games-avs-jpg.3021601/"
  const url3 = "https://9to5toys.com/wp-content/uploads/sites/5/2017/03/ps-now.jpg?resize=1024,488"

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <Image src={url1} style={{ height: "400px" }} fluid className="d-block mx-auto" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={url2} style={{ height: "400px" }} fluid className="d-block mx-auto" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={url3} style={{ height: "400px" }} fluid className="d-block mx-auto" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;