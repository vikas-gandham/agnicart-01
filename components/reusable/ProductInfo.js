import { IoStar } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";

export default function ProductInfo({ data }) {
  return (
    <div className="w-full mx-auto grid grid-cols-5 items-start gap-x-10">
      <div className="grid grid-cols-2 items-center justify-center col-span-3">
        {data.images.map((item) => {
          return <img key={item.id} src={item.image} alt="" />;
        })}
      </div>
      <div className="flex flex-col gap-8 items-start justify-center col-span-2 w-full">
        <div className=" flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold">Agni Originals</h1>
            <div className="flex items-center justify-center gap-2">
              <IoStar size="1.2rem" color="#ffc107" />
              <span className="text-xl">5</span>
            </div>
          </div>
          <p className=" text-slate-500">{data.title}</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2">
            <span>&#8377;{data.price}</span>
            <span className=" text-slate-500">MRP</span>
            <strike className=" text-slate-500">
              &#8377;{data.reference_price}
            </strike>
            <span className="text-lg text-orange-500 font-semibold">
              70% OFF
            </span>
          </div>
          <span className=" text-slate-500">Includes all taxes</span>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Lime Green</h1>
          <a className=" cursor-pointer">
            <img
              src={data.featured_image}
              width="50"
              height="50"
              className=" border border-black rounded-full overflow-hidden"
            />
          </a>

          <div>
            <span className=" text-slate-700">Find your perfect match! </span>
            <a href="/" className=" cursor-pointer underline font-semibold">
              Ask your Expert Advisor
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <h1 className=" text-lg">Size</h1>
            <a className=" underline cursor-pointer">Size Chart</a>
          </div>
          <div>
            {data.variants.map((variant) => (
              <div
                key={variant.id}
                className="flex gap-6 px-6 py-3 overflow-x-auto scrollbar-thin scrollbar-webkit"
              >
                {variant.options.map((item) => (
                  <button
                    key={item.id}
                    className="border px-8 py-3 border-black rounded-full "
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <p className=" text-slate-700">
            Return or exchange not applicable for this item
          </p>
        </div>
        <div className=" flex items-center justify-center gap-4">
          <a className="border p-2 rounded-full bg-slate-100 cursor-pointer">
            <GoShareAndroid size="1.5rem" />
          </a>
          <a className="border p-2 rounded-full bg-slate-100 cursor-pointer">
            <CiHeart size="1.5rem" />
          </a>
          <button className="border px-8 py-3 bg-black text-white font-semibold">
            ADD TO BAG
          </button>
        </div>
        <div className=" flex flex-col gap-2 border px-6 py-4 border-slate-300 w-full">
          <div className="flex items-center justify-start gap-2">
            <BiSolidOffer />
            <span>1 Offer</span>
          </div>
          <span className="text-lg text-orange-500 font-semibold">70% OFF</span>
          <span>Buy Any One Or More Product And Get Flat 70% Off</span>
        </div>
        <div className=" flex items-center justify-around border px-6 py-4 border-slate-300 w-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <FiAward size="2rem" />
            <span>Athentic</span>
            <span>Product</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <TbBuildingStore size="2rem" />
            <span>Express Store </span>
            <span>Pickup</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <RiSecurePaymentFill size="2rem" />
            <span>Secure</span>
            <span>Payment</span>
            <span>Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
