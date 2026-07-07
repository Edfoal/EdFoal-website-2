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
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
  onItemClick?: (id: string) => void;
}

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items = [],
  onItemClick,
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

    // Mouse wheel and trackpad scroll handler
    const container = carouselApi.rootNode();
    const handleWheel = (e: WheelEvent) => {
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

      if (isHorizontalScroll) {
        // Prevent default browser behavior for horizontal scroll on the cards
        e.preventDefault();

        const delta = e.deltaX;
        if (Math.abs(delta) > 5) {
          if (delta > 0) {
            carouselApi.scrollNext();
          } else if (delta < 0) {
            carouselApi.scrollPrev();
          }
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      carouselApi.off("select", updateSelection);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [carouselApi]);

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-[max(32px,4vw)]">
        <div className="mb-8 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="flex max-w-3xl flex-col gap-3 text-center md:text-left">
            <h2 className="text-[clamp(2rem,9vw,3rem)] font-bold leading-[1.05] tracking-tight text-zinc-950 md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base md:mx-0 md:text-lg">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 disabled:pointer-events-auto disabled:opacity-40"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 disabled:pointer-events-auto disabled:opacity-40"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            dragFree: true,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="ml-0 gap-4 px-4 sm:gap-5 sm:px-6 md:gap-8 md:px-8 lg:px-[max(32px,4vw)] 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="w-[min(84vw,20rem)] shrink-0 grow-0 basis-auto snap-start pl-0 sm:w-84 md:w-92"
              >
                <a 
                  href={item.href} 
                  onClick={(e) => {
                    if (onItemClick) {
                      e.preventDefault();
                      onItemClick(item.id);
                    }
                  }}
                  className="group block overflow-hidden rounded-3xl border border-zinc-200/50 transition-all duration-500 hover:shadow-2xl sm:rounded-4xl"
                >
                  <div className="group relative h-full min-h-96 max-w-full overflow-hidden rounded-3xl sm:min-h-104 sm:rounded-4xl md:aspect-3/4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 z-10 h-full bg-linear-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 group-hover:via-black/55" />
                    <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start p-5 text-white sm:p-6 md:p-8">
                      <div className="mb-2 text-lg font-bold leading-snug tracking-wide transition-colors group-hover:text-blue-300 sm:text-xl">
                        {item.title}
                      </div>
                      <div className="mb-5 line-clamp-3 text-xs font-normal leading-relaxed text-zinc-300 md:mb-6 md:text-sm">
                        {item.description}
                      </div>
                      <div className="mt-1 flex w-full items-center border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider transition-colors group-hover:text-blue-300">
                        Read case study{" "}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-7 flex justify-center gap-2.5 sm:mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index ? "w-6 bg-blue-600" : "w-2 bg-zinc-300 hover:bg-zinc-400"
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
