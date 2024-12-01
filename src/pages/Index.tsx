import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { BlogPosts } from "@/components/BlogPosts";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <Newsletter />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default Index;