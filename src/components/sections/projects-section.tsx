"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  techStack?: string[];
  cta?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "atlas-commerce",
    title: "Atlas Commerce",
    description:
      "Headless commerce interface with fast product browsing, cart persistence, and a refined checkout handoff.",
    href: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1600&auto=format&fit=crop",
    techStack: ["Next.js", "Stripe", "Tailwind"],
    cta: "View repo",
  },
  {
    id: "nova-dashboard",
    title: "Nova Analytics",
    description:
      "Responsive SaaS dashboard with KPI cards, segmented filters, and executive reporting views.",
    href: "https://vercel.com/",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    techStack: ["React", "shadcn/ui", "Charts"],
    cta: "Live demo",
  },
  {
    id: "pulse-mobile",
    title: "Pulse Habit App",
    description:
      "Mobile-first habit tracker concept with streak insights, onboarding, and motion-led microinteractions.",
    href: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
    techStack: ["Figma", "React", "Motion"],
    cta: "Case study",
  },
  {
    id: "studio-crm",
    title: "Studio CRM",
    description:
      "Client pipeline tool with stages, notes, ownership states, and a quiet admin experience.",
    href: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    techStack: ["Next.js", "Prisma", "Postgres"],
    cta: "View repo",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-28 md:py-36">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <div className="text-sm font-medium uppercase text-accent">
              Featured Projects
            </div>
            <h2 className="text-balance text-[clamp(2rem,7vw,3rem)] font-semibold leading-tight text-white">
              {title}
            </h2>
            <p className="max-w-2xl leading-8 text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[330px] pl-[20px] md:max-w-[410px] lg:max-w-[440px]"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl"
                >
                  <div className="group relative max-w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-card shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="block h-auto w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black via-black/[0.42] to-black/5" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 text-white sm:p-5 md:p-7">
                      <div className="mb-3 flex flex-wrap gap-2 md:mb-4">
                        {item.techStack?.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/[0.12] bg-white/[0.08] px-3 py-1 text-xs text-white/[0.72] backdrop-blur-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mb-2 max-w-full break-words text-[clamp(1.05rem,5vw,1.5rem)] font-semibold leading-tight md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-5 line-clamp-2 text-[clamp(0.82rem,3.5vw,0.95rem)] leading-6 text-white/[0.68] md:mb-7 md:line-clamp-3">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm font-medium text-accent">
                        {item.cta ?? "View project"}{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
