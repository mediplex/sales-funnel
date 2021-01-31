import { useState } from "react";
import Image from "next/image";

import SwiperCore, { EffectFade, Navigation, Thumbs, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Zoom]);

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/zoom/zoom.min.css";

export const Gallery = () => {
  return (
    <>
      <div className="root">
        <figure className="image">
          <img className='is-1x1' src="/images/placeholder.png" alt="expanded belt" />
        </figure>
        {/* Main */}
        {/* <Swiper slidesPerView={1} direction="horizontal" zoom navigation>
        <SwiperSlide>
          <figure className="image is-square">
            <img
              src="/images/expanded-belt.webp"
              alt="expanded belt"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="image">
            <Image
              src="/images/expanded-belt.webp"
              alt="expanded belt"
              height={640}
              width={640}
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="image">
            <Image
              src="/images/expanded-belt.webp"
              alt="expanded belt"
              height={640}
              width={640}
            />
          </figure>
        </SwiperSlide>
      </Swiper> */}

        {/* Thumbs */}
        {/* <Swiper
        slidesPerView={10}
        spaceBetween={100}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide>
          {({ isActive }) => (
            <figure
              className="image is-128x128"
              style={{ border: isActive ? "solid" : "" }}
            >
              <Image
                src="/images/expanded-belt.webp"
                alt="expanded belt"
                layout="fill"
                unsized
              />
            </figure>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <figure
              className="image is-128x128"
              style={{ border: isActive ? "solid" : "" }}
            >
              <Image
                src="/images/expanded-belt.webp"
                alt="expanded belt"
                layout="fill"
                unsized
              />
            </figure>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <figure
              className="image is-128x128"
              style={{ border: isActive ? "solid" : "" }}
            >
              <Image
                src="/images/expanded-belt.webp"
                alt="expanded belt"
                layout="fill"
                unsized
              />
            </figure>
          )}
        </SwiperSlide>
      </Swiper> */}
      </div>
      <style jsx>{`
        .root {
          max-width: 640px;
          margin: auto;
        }
      `}</style>
    </>
  );
};
