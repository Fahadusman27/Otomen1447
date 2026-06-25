/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/animate-ui/components/buttons/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

type EmblaControls = {
  selectedIndex: number;
  scrollSnaps: number[];
  prevDisabled: boolean;
  nextDisabled: boolean;
  onDotClick: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

type DotButtonProps = {
  selected?: boolean;
  label: string;
  onClick: () => void;
};

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const useEmblaControls = (
  emblaApi: EmblaCarouselType | undefined,
): EmblaControls => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateSelectionState = (api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  };

  const onInit = React.useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
    updateSelectionState(api);
  }, []);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    updateSelectionState(api);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on('reInit', onInit).on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  };
};

function MotionCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    // 2. UBAH DI SINI: CSS variable disesuaikan agar slide mengambil 100% layar (basis-full)
    <div className="w-full space-y-4 [--slide-size:100%] [--slide-spacing:0px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slideContent, index) => {
            const isActive = index === selectedIndex;

            return (
              <motion.div
                key={index}
                className="mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
              >
                {/* 3. UBAH DI SINI: Menghilangkan border box dan merender konten section Anda */}
                <motion.div
                  className="size-full w-full"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.95, // Animasi zoom out sedikit saat digeser
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={transition}
                >
                  {slideContent}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigasi Bawah */}
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-16 pb-10">
        <Button size="icon" onClick={onPrev} disabled={prevDisabled} className="rounded-full bg-zinc-800 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black">
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex flex-wrap justify-center items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              label={`Bagian ${index + 1}`}
              selected={index === selectedIndex}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>

        <Button size="icon" onClick={onNext} disabled={nextDisabled} className="rounded-full bg-zinc-800 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black">
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function DotButton({ selected = false, label, onClick }: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      // Tombol dots disesuaikan warnanya dengan tema emas Anda
      className="flex cursor-pointer select-none items-center justify-center rounded-full border border-[rgba(200,169,110,0.3)] bg-zinc-900 text-[var(--accent)] text-xs font-semibold"
      animate={{
        width: selected ? 80 : 16,
        height: selected ? 32 : 16,
        backgroundColor: selected ? 'rgba(200,169,110,0.1)' : 'rgba(24,24,27,1)',
      }}
      transition={transition}
    >
      <motion.span
        layout
        initial={false}
        className="block whitespace-nowrap px-3 py-1"
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0,
          filter: selected ? 'blur(0)' : 'blur(4px)',
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.button>
  );
}

export { MotionCarousel };