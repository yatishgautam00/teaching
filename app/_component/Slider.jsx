import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Slider() {
  const imgUrl = ["/slider1.jpg","/slider2.jpg","/slider3.jpg"]
  return (
    <Carousel>
      <CarouselContent>
        {imgUrl.map((url,index)=>(
          <CarouselItem key={index}>
            <Image src={url} alt="sliders" width={1000} height={400} className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Slider;
