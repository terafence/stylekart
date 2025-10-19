"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import GetStarted from "./GetStarted";

const slides = [
  {
    id: 1,
    image: "/images/hero/1.png",
    tagline: "Luxury Looks, Styled Free",
  },
  {
    id: 2,
    image: "/images/hero/2.png",
    tagline: "No Rules. No Fees. Just Fashion",
  },
  {
    id: 3,
    image: "/images/hero/3.png",
    tagline: "Free Styling, Full Swagger",
  },
  {
    id: 4,
    image: "/images/hero/4.png",
    tagline: "Designer Looks, Zero Cost",
  },
  {
    id: 5,
    image: "/images/hero/5.png",
    tagline: "Style That Doesn't Cost a Thing",
  },
  {
    id: 6,
    image: "/images/hero/6.png",
    tagline: "Fashion Finds, On the House",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 50);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 50);
  };

  return (
    <section
      id="hero"
      className="relative isolate flex h-screen min-h-screen items-end overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-stone-50"
      aria-label="Hero carousel"
    >
      {/* Background images with smooth transitions */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              quality={100}
              className="object-cover object-center"
            />
            {/* Strong gradient overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Fixed bottom-center content container with consistent positioning */}
      <div className="relative z-10 w-full pb-32 px-6 text-center md:pb-40 lg:pb-44">
        <div className="mx-auto max-w-6xl">
          {/* Fixed height container for tagline to prevent dancing */}
          <div className="mb-10 flex h-32 items-center justify-center md:h-40 lg:h-48">
            <h1
              className={`text-4xl font-light tracking-tight text-white transition-opacity duration-700 drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 24px rgba(0, 0, 0, 0.6)",
              }}
            >
              {slides[currentSlide].tagline}
            </h1>
          </div>

          {/* Elegant divider with fixed position */}
          <div
            className={`mx-auto mb-10 h-px w-24 bg-white/80 transition-opacity duration-700 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* CTA Button with fixed position */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`group relative inline-block overflow-hidden bg-white px-12 py-4 text-sm font-semibold uppercase tracking-widest text-zinc-900 shadow-2xl transition-all duration-700 hover:bg-zinc-50 hover:shadow-white/20 md:px-16 md:py-5 md:text-base ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation dots with fixed position */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:bottom-16">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-12 bg-white shadow-lg shadow-white/30"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute right-6 top-6 z-20 text-sm font-light tracking-wider text-white md:right-12 md:top-12">
        <span className="text-2xl font-extralight drop-shadow-lg">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="mx-2 text-white/60">/</span>
        <span className="text-white/80">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Premium brand mark */}
      <div className="absolute left-6 top-6 z-20 md:left-12 md:top-12">
        <div className="text-2xl font-extralight tracking-tight text-white drop-shadow-lg">
          STUDIO
        </div>
        <div className="mt-1 text-[10px] font-light uppercase tracking-[0.3em] text-white/80">
          Contemporary
        </div>
      </div>

      {/* Get Started Modal */}
      <GetStarted isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;