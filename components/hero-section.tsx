import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[#f5f5f5] overflow-hidden flex items-center justify-center px-6">
      <h1 className="absolute top-1/2 -translate-y-1/2 text-[140px] md:text-[200px] font-extrabold text-blue-600 tracking-tight select-none">
        FULLSTACK
      </h1>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <h2 className="flex gap-48 text-4xl md:text-7xl font-extrabold italic tracking-[0.15em] absolute top-1/4 -translate-y-1/2">
          <span className="">
            Paulo
          </span>
          <span className="not-italic font-extrabold tracking-[0.15em]">
            Victor
          </span>
        </h2>

        <div className="relative w-70 md:w-95 mb-6">
          <Image
            src="/images/6cf05b6ff6c054e7454b1969e87231c6-removebg-preview.png"
            alt="Profile"
            width={500}
            height={500}
            className="grayscale object-contain"
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-sm text-gray-600 text-left max-w-55 hidden md:block">
        <p>
          Specialized in web design, UX/UI, Webflow, and front-end development.
        </p>
      </div>

      <div className="absolute bottom-10 right-10 text-sm text-gray-600 text-right max-w-55 hidden md:block">
        <p>
          Build a credible, conversion-focused website that shows your ideal client exactly how you can help them.
        </p>
      </div>
    </section>
  )
}