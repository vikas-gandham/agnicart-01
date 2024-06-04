import PLP from "@/components/PLP/PLP";

async function getProductsData(searchParams) {
  const { page } = searchParams;
  try {
    const res = await fetch(
      `https://devapi.agnicart.com/api/stores/1f0bcd4b/products/?variants=${
        searchParams.variants || ""
      }&${page && `page=${page}`}`
    );
    if (!res.ok) throw new Error("Something went wrong with fetching Api");
    const data = await res.json();
    return data;
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
  const { searchParams } = props;
  console.log(props, "props");
  const products = await getProductsData(searchParams);
  const filters = await getFiltersData();
  console.log(products, "sdsfdfdfgdf");
  return (
    <div className=" overflow-y-auto max-h-screen no-scrollbar bg-white">
      <PLP products={products} filters={filters} />
    </div>
  );
}
