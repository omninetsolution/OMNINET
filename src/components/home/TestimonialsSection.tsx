import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Work From Home Professional",
    image: testimonial1,
    quote: "Since switching to OMNINET SOLUTIONS, my video calls never buffer and my uploads are lightning fast. Game changer for remote work!",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Streaming Enthusiast",
    image: testimonial2,
    quote: "We have 5 people streaming different things at once and it handles everything perfectly. Best internet we have ever had.",
    rating: 5
  },
  {
    name: "Robert Martinez",
    role: "Retired Teacher",
    image: testimonial3,
    quote: "The installation was quick and professional. The customer support is always helpful when I have questions. Highly recommend!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied customers who made the switch
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary transition-colors duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
