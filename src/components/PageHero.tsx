import Image from 'next/image';

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <div className="relative w-full flex flex-col">
      <div className="relative w-full h-[60vh] min-h-[380px] sm:min-h-[440px] md:h-[65vh] md:min-h-[480px] flex items-center overflow-hidden bg-[#0E1B2D]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {image.startsWith('/') ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center opacity-70"
              priority
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
            />
          )}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2D] via-[#0E1B2D]/60 to-[#0E1B2D]/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 md:px-16 flex flex-col items-center text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-2 leading-tight">
            {title}
          </h1>
          <h2 className="text-[#c5a365] text-[10px] md:text-sm font-semibold tracking-[0.2em] uppercase">
            {subtitle}
          </h2>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="w-full bg-[#3fa2f6] py-6 z-20 shadow-sm relative">
        <p className="text-xl md:text-3xl text-center text-white font-medium tracking-wide">
          Be an Achiever... not a performer
        </p>
      </div>
    </div>
  );
}
