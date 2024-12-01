import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = [
  "/lovable-uploads/9ecda841-365d-4f92-af83-d36dc80bc9c8.png",
  "/lovable-uploads/a911d9e8-cf4e-49e8-bf03-e4286281b54d.png",
  "/lovable-uploads/f78ae933-afde-45dc-a682-d8700e1c4e34.png",
  "/lovable-uploads/b3b6c7ed-e90e-4ca8-b570-31a2da0b9939.png",
  "/lovable-uploads/8e331b16-9c02-46d8-a1b5-d92572a30f2d.png"
];

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Image Carousel */}
      <div className="absolute inset-0">
        <Carousel className="w-full h-full" opts={{ loop: true, duration: 50 }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="w-full h-[600px]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-20" />
          <CarouselNext className="z-20" />
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-[600px] flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 text-white animate-fade-in">
            DUSOM trains & release into the world
          </h1>
          <p className="text-xl mb-10 text-gray-200">
            Success stories are all around the DUSOM family. Join us and be part of this great commission.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-secondary hover:bg-secondary/90">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};