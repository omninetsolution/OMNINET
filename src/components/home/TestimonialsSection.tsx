import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Work From Home Professional",
    image: testimonial1,
    quote: "The guidance I received helped me understand exactly what internet speed I needed for my home office. Very knowledgeable and unbiased advice!",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Family of 5",
    image: testimonial2,
    quote: "They helped us navigate all the confusing cable TV packages and explained our streaming options. No pressure to choose anything specific - just honest guidance.",
    rating: 5
  },
  {
    name: "Robert Martinez",
    role: "Retired Teacher",
    image: testimonial3,
    quote: "As someone not tech-savvy, I appreciated their patient explanations about internet services. They made the whole process much less overwhelming.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            See how our independent guidance has helped others navigate connectivity decisions
          </p>
          <p className="text-sm text-muted-foreground italic">
            <strong>Not an ISP.</strong> These are reviews of our guidance services, not internet service quality.
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
