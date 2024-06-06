import PDP from "@/components/PDP/PDP";

async function getProductInfo(params) {
  try {
    const res = await fetch(
      `https://devapi.agnicart.com/api/stores/8e23257b/products/${params.uid}/`
    );
    if (!res.ok) throw new Error("Something went wrong with fetching Api ");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.log(error.message);
    }
  }
}

export default async function Page(props) {
  const { params } = props;
  console.log(props, "props");
  const productInfo = await getProductInfo(params);

  return (
    <div>
      <PDP info={productInfo} />
    </div>
  );
}
