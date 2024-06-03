import PLP from "@/components/PLP/PLP";

async function getProductsData() {
  try {
    const res = await fetch(
      "https://devapi.agnicart.com/api/stores/1f0bcd4b/products/"
    );
    if (!res.ok) throw new Error("Something went wrong with fetching Api");
    const data = await res.json();
    return data.results;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.log(error.message);
    }
  }
}

async function getFiltersData() {
  try {
    const res = await fetch(
      "https://devapi.agnicart.com/api/stores/1f0bcd4b/variants/"
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
  const products = await getProductsData();
  const filters = await getFiltersData();
  return (
    <div className=" overflow-y-auto max-h-screen no-scrollbar bg-white">
      <PLP products={products} filters={filters} />
    </div>
  );
}
