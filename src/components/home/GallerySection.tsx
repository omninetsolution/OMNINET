import galleryGaming from "@/assets/gallery-gaming.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryStreaming from "@/assets/gallery-streaming.jpg";
import gallerySmarthome from "@/assets/gallery-smarthome.jpg";
import galleryEducation from "@/assets/gallery-education.jpg";
import galleryRouter from "@/assets/gallery-router.jpg";
import gallerySports from "@/assets/gallery-sports.jpg";
import galleryVideocall from "@/assets/gallery-videocall.jpg";

const galleryItems = [
  { image: galleryGaming, title: "Gaming Excellence", span: "col-span-2 row-span-2" },
  { image: galleryOffice, title: "Remote Work", span: "col-span-1 row-span-1" },
  { image: galleryStreaming, title: "Mobile Streaming", span: "col-span-1 row-span-1" },
  { image: gallerySmarthome, title: "Smart Home", span: "col-span-1 row-span-1" },
  { image: galleryEducation, title: "Online Learning", span: "col-span-1 row-span-1" },
  { image: galleryRouter, title: "Premium Equipment", span: "col-span-1 row-span-1" },
  { image: gallerySports, title: "Live Sports", span: "col-span-1 row-span-1" },
  { image: galleryVideocall, title: "Video Conferencing", span: "col-span-2 row-span-1" },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powering Your <span className="text-gradient">Lifestyle</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how our customers use high-speed connectivity every day
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <p className="text-foreground font-bold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
