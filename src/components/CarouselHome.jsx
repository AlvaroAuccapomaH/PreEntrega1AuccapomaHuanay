import { Carousel } from "@material-tailwind/react";


const CarouselHome = () => {

    return (
        <Carousel className="rounded-xl w-auto " autoplay={true} loop={true} style={{ maxHeight: '380px' }} >
            <img
                src="/PreEntrega1AuccapomaHuanay/Carousel1.jpg"
                alt="image 1"
                className="h-full w-full  md:h-auto md:w-auto"
            />
            <img
                src="/PreEntrega1AuccapomaHuanay/Carousel2.jpg"
                alt="image 2"
                className="h-full w-full  md:h-auto md:w-auto"
            />
            <img
                src="/PreEntrega1AuccapomaHuanay/Carousel3.jpg"
                alt="image 3"
                className="h-full w-full  md:h-auto md:w-auto"
            />
        </Carousel>
    )
}

export default CarouselHome
