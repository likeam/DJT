"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./CurvedImageCarousel.module.css";

interface CarouselItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  altText: string;
}

interface CurvedImageCarouselProps {
  items: CarouselItem[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function CurvedImageCarousel({
  items,
  autoRotate = true,
  rotationInterval = 5000,
}: CurvedImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // const goToSlide = (index: number) => {
  //   setActiveIndex(index);
  // };

  // Auto-rotation with pause on hover
  useEffect(() => {
    if (!autoRotate || isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [activeIndex, autoRotate, isHovered, rotationInterval]);

  return (
    <div
      className={styles.carouselWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {items.map((item, index) => {
            // Calculate position relative to active item
            let position = index - activeIndex;

            // Handle circular positioning
            if (position > Math.floor(items.length / 2))
              position -= items.length;
            if (position < -Math.floor(items.length / 2))
              position += items.length;

            // Calculate styles based on position
            const translateZ =
              position === 0 ? 400 : 250 - Math.abs(position) * 100;
            const rotateY = position * 30;
            const opacity = position === 0 ? 1 : 0.6 - Math.abs(position) * 0.2;
            const scale = position === 0 ? 1 : 0.8 - Math.abs(position) * 0.1;
            const leftOffset = position * 100;

            return (
              <div
                key={item.id}
                className={`${styles.carouselItem} ${
                  position === 0 ? styles.activeItem : ""
                }`}
                style={{
                  transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) translateX(${leftOffset}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: items.length - Math.abs(position),
                  display: Math.abs(position) > 2 ? "none" : "block",
                }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={item.imageUrl}
                    alt={item.altText}
                    fill
                    className={styles.carouselImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Description for left item */}
                {position === -1 && (
                  <div
                    className={`${styles.descriptionBox} ${styles.leftDescription}`}
                  >
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                )}

                {/* Description for right item */}
                {position === 1 && (
                  <div
                    className={`${styles.descriptionBox} ${styles.rightDescription}`}
                  >
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className={styles.navButtonPrev}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </button>
      <button
        className={styles.navButtonNext}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

// Simple SVG icons for buttons
function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  );
}
