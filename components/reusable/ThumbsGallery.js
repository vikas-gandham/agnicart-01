import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function ThumbsGallery({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [galleryNavOpen, setGalleryNavOpen] = useState(false);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const openGalleryNav = () => {
    setGalleryNavOpen(true);
  };
  const closeGalleryNav = () => {
    setGalleryNavOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 items-center justify-center col-span-3 w-full">
        {data &&
          data.images.map((item) => {
            return (
              <div key={item.id}>
                <button onClick={openGalleryNav}>
                  <img src={item.image} alt="" className="w-full h-full" />
                </button>
              </div>
            );
          })}
      </div>
      <div
        className={` bg-black bg-opacity-40 fixed top-0  bottom-0 left-0 right-0   z-[999] w-full ${
          galleryNavOpen ? "flex " : "hidden"
        } `}
      >
        <div className="w-[65%] mx-auto bg-white h-full p-5   ">
          <div className=" grid grid-cols-12 gap-x-6 items-start justify-center w-full">
            <div className=" col-span-1 h-[600px]">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={7}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper h-full col-span-1 "
              >
                {data &&
                  data.images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div className="">
                        <img
                          src={image.thumbnail}
                          className=" cursor-pointer"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className=" col-span-10 relative">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#000",
                }}
                ref={swiperRef}
                loop={true}
                spaceBetween={10}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                onSlideChange={() => console.log("slide change")}
                className="mySwiper2"
              >
                {data &&
                  data.images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div>
                        <img src={image.image} className="w-full h-full" />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <button
                onClick={handlePrev}
                className="absolute top-80 left-2  translate-y-40 z-20 border px-1 py-1 rounded-full bg-slate-400 hover:bg-slate-300 "
              >
                <GoChevronLeft size="3rem" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-80 translate-y-40 right-2  z-20 border px-1 py-1 rounded-full bg-slate-400 hover:bg-slate-300   "
              >
                <GoChevronRight size="3rem" />
              </button>
            </div>
            <div className="col-span-1">
              <button
                onClick={closeGalleryNav}
                className=" cursor-pointer border p-2 rounded-full "
              >
                <IoMdClose size="1.4rem" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
