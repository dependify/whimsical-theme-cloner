import { GraduationCap, Book, Users, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Features = () => {
  const features = [
    {
      icon: <GraduationCap className="h-10 w-10 text-secondary" />,
      title: "Quality Education",
      description: "We build up understanding and knowledge of the Bible",
    },
    {
      icon: <Book className="h-10 w-10 text-secondary" />,
      title: "Biblical Foundation",
      description: "Deep study and understanding of scripture",
    },
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      title: "Community",
      description: "Strong support system for students",
    },
    {
      icon: <Target className="h-10 w-10 text-secondary" />,
      title: "Practical Ministry",
      description: "Hands-on experience in ministry",
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          We Are Here to Grow Your Ministry Exponentially
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};