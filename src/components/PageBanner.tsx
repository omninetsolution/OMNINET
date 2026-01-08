import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: ReactNode;
}

const PageBanner = ({ title, subtitle, backgroundImage, children }: PageBannerProps) => {
  return (
    <section 
      className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      <div className="relative container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageBanner;
