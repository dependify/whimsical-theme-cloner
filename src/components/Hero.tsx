import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-primary text-white py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 animate-fade-in">
            DUSOM trains & release into the world
          </h1>
          <p className="text-xl mb-10 text-gray-300">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
    </div>
  );
};