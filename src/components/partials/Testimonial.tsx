"use client";

import { reviews } from "@/data/reviews";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import SectionTitle from "@/components/shared/SectionTitle";

const reviewSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  adaptiveHeight: true,
};

export default function Testimonial() {
  return (
    <>
      <SectionTitle>Client Reviews</SectionTitle>
      <div className="mt-16">
        <Slider {...reviewSettings}>
          {reviews.map((review, index) => (
            <div className="mb-6" key={index}>
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 overflow-hidden rounded-full ring-2 ring-neutral-200 dark:ring-neutral-600">
                  <Image
                    src={review.author.imageUrl}
                    height={96}
                    width={96}
                    alt={review.author.name}
                  />
                </div>
                <h6 className="mt-3 text-lg font-semibold">{review.author.name}</h6>
                <p className="text-sm text-gray-400 dark:text-gray-200">
                  {review.author.designation} at {review.author.company}.
                </p>
                <div className="mt-6 max-w-2xl rounded-2xl bg-white p-8 text-gray-600 shadow-lg dark:bg-gray-700 dark:text-gray-200">
                  {review.comment}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
