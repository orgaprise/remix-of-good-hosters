const logos = [
  { name: "Google Cloud", svg: "https://www.gstatic.com/devrel-devsite/prod/v0e0f589edd85502a40d78d7d0825db8ea5ef3b99ab4070381ee86977c9168730/cloud/images/cloud-logo.svg" },
  { name: "AWS", svg: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Microsoft Azure", svg: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
  { name: "DigitalOcean", svg: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg" },
  { name: "Cloudflare", svg: "https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg" },
  { name: "Heroku", svg: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Heroku_logo.svg" },
  { name: "IBM Cloud", svg: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle", svg: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Vercel", svg: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
  { name: "Netlify", svg: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg" },
  { name: "Railway", svg: "https://railway.app/brand/logo-light.svg" },
  { name: "Render", svg: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_08bc8be7f16e10489e2abe32a8655b1a/render.png" },
];

const LogoSlider = () => {
  return (
    <section className="py-12 bg-background border-y border-border/50 overflow-hidden" aria-label="Trusted hosting providers">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-wider">
          Trusted by leading hosting providers
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" aria-hidden="true" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll" role="list" aria-label="Partner logos">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8">
          {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 h-10 w-32 flex items-center justify-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                role="listitem"
              >
                <img
                  src={logo.svg}
                  alt={`${logo.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                  width={128}
                  height={40}
                />
                {logo.name === "Vercel" && (
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">Vercel</span>
                )}
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-16 px-8" aria-hidden="true">
          {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 h-10 w-32 flex items-center justify-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.svg}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                  width={128}
                  height={40}
                />
                {logo.name === "Vercel" && (
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">Vercel</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
