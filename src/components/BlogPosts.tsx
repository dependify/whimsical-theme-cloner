import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const BlogPosts = () => {
  const posts = [
    {
      title: "No Limitations in Ministry",
      excerpt: "Discover how to overcome ministry challenges...",
      image: "/placeholder.svg",
    },
    {
      title: "The One-year step you need",
      excerpt: "Learn about our comprehensive program...",
      image: "/placeholder.svg",
    },
    {
      title: "The Principles of Pastoral Leadership",
      excerpt: "Essential leadership principles for ministry...",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Read The Latest Articles from Our Blog Post
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
                <button className="text-secondary font-semibold mt-4 hover:underline">
                  Read more →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};