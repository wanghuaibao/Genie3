"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export function TestimonialsGridWithCenteredCarousel() {
  return (
    <section id="testimonials" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-20 overflow-hidden h-full">
      <div className="pb-20">
        <h2 className="text-4xl lg:text-6xl font-bold text-black dark:text-white text-center mb-4">
          Trusted by Creators Worldwide
        </h2>
        <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 text-center max-w-3xl mx-auto">
          Join thousands of content creators, marketers, and businesses who are revolutionizing their video content with AI.
        </p>
      </div>

      <div className="relative">
        <TestimonialsSlider />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-charcoal opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-white dark:from-black to-transparent"></div>
    </section>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {grid.map((testimonialsCol, index) => (
        <div key={`testimonials-col-${index}`} className="grid gap-4">
          {testimonialsCol.map((testimonial) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="flex gap-2 items-center mt-8">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <QuoteDescription className="font-semibold text-sm">{testimonial.name}</QuoteDescription>
                  <QuoteDescription className="text-xs opacity-70">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/30 shadow-sm hover:shadow-md transition-shadow duration-300 group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-sm font-medium dark:text-white text-black py-2 leading-relaxed",
        className
      )}
    >
      &ldquo;{children}&rdquo;
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal dark:text-neutral-400 text-neutral-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    quote:
      "This AI video generator has completely transformed our marketing strategy. We can now create professional videos in minutes instead of hours.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Marketing Director, TechCorp",
  },
  {
    name: "Marcus Rodriguez",
    quote:
      "As a content creator, this tool has been a game-changer. The quality of AI-generated videos is incredible and saves me so much time.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "YouTuber & Influencer",
  },
  {
    name: "Emily Watson",
    quote:
      "The ease of use is remarkable. I just type what I want and get stunning videos. It's like having a professional video team at my fingertips.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Social Media Manager",
  },
  {
    name: "David Park",
    quote:
      "Our startup couldn't afford expensive video production. This AI tool has enabled us to create compelling product demos on a budget.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "CEO, InnovateLab",
  },
  {
    name: "Lisa Thompson",
    quote:
      "The AI understands context amazingly well. Every video perfectly captures the essence of what I'm trying to communicate.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Creative Director",
  },
  {
    name: "James Wilson",
    quote:
      "I've tried many video tools, but none come close to this AI generator. The results are consistently impressive and professional.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Digital Marketing Consultant",
  },
  {
    name: "Anna Kowalski",
    quote:
      "This tool has democratized video creation. Anyone can now produce high-quality content without technical expertise.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Education Technology Specialist",
  },
  {
    name: "Michael Chang",
    quote:
      "The speed and quality are unmatched. We've reduced our video production timeline from weeks to hours.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Video Producer",
  },
  {
    name: "Sophie Martin",
    quote:
      "Revolutionary technology that's changing how we think about video content creation. Simply amazing results every time.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Brand Strategist",
  },
  {
    name: "Robert Kim",
    quote:
      "The AI generates videos that perfectly match our brand guidelines. It's like having an AI that knows our company inside out.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Brand Manager",
  },
  {
    name: "Jessica Lopez",
    quote:
      "Cost-effective and incredibly efficient. This AI has made professional video creation accessible to small businesses like ours.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Small Business Owner",
  },
  {
    name: "Alex Turner",
    quote:
      "The quality of output is consistently outstanding. This AI tool has become an essential part of our content creation workflow.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Content Strategy Lead",
  },
];

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const slicedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === slicedTestimonials.length ? 0 : (active) => active + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="absolute inset-0 mt-20 md:mt-60">
      <div className="max-w-4xl mx-auto relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-neutral-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-neutral-200 after:dark:bg-neutral-900 after:m-px before:-z-20 after:-z-20">
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-10"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="absolute inset-0 h-full -z-10">
                      <Image
                        className="relative top-11 left-1/2 -translate-x-1/2 rounded-full border-4 border-white shadow-lg"
                        src={item.src}
                        width={56}
                        height={56}
                        alt={item.name}
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="text-lg text-black dark:text-white md:text-xl font-medium leading-relaxed mb-4">
                      &ldquo;{item.quote}&rdquo;
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="font-semibold">{item.name}</span>
                      {item.designation && <span> • {item.designation}</span>}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {slicedTestimonials.map((item, index) => (
                <button
                  className={cn(
                    `px-4 py-2 rounded-full m-1.5 text-sm border transition duration-150 ease-in-out ${
                      active === index
                        ? "border-blue-500/50 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                        : "border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500"
                    }`
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="font-medium">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};