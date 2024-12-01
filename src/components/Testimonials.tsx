import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "John D.",
      role: "Graduate 2023",
      content: "DUSOM has transformed my understanding of ministry and equipped me for service.",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah M.",
      role: "Current Student",
      content: "The community and support here is incredible. I'm growing every day.",
      image: "/placeholder.svg",
    },
    {
      name: "David R.",
      role: "Alumni",
      content: "The practical ministry experience I gained here is invaluable.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Students Say About DUSOM
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-none">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};