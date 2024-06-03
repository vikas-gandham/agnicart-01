import ProductInfo from "../reusable/ProductInfo";

export default function PDP({ info }) {
  return (
    <div className="w-full lg:w-[80%] mx-auto ">
      <ProductInfo data={info} />
    </div>
  );
}
