import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Newsletter Subscription</h2>
          <p className="mb-8">Stay updated with our latest news and announcements</p>
          <form className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-primary"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};