import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
    {
        src: '/img/quotes.png',
        altText: 'Slide 1',
        caption: '"Code Coach is amazing! I love how interactive it is."',
        subcaption: 'Albert Einstein, Code Coach Instructor'
    },
    {
        src: 'img/quotes.png',
        altText: 'Slide 2',
        caption: '"The inner enlightenment I received from Code Coach was truly spectacular!"',
        subcaption: 'Mahatma Ghandi, Code Coach Student'
    },
    {
        src: 'img/quotes.png',
        altText: 'Slide 3',
        caption: '"Scheduling my sessions with my coach couldn\'t be simpler."',
        subcaption: 'Michael Jordan, Code Coach Student'
    },
    {
        src: 'img/quotes.png',
        altText: 'Slide 4',
        caption: '"Paving the way for these young minds has truly been a pleasure."',
        subcaption: 'George Bush Sr., Code Coach Instructor'
    }
    ];


    const AboutCarousel = (props) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
      
        const slides = items.map((item) => {
          return (
            <CarouselItem className="text-center"
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} className="invert" height="50" width="50" />
              <CarouselCaption captionText={item.subcaption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
      
        return (
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
          </Carousel>
        );
      }

export default AboutCarousel;