import { getPaginationData } from "@/components/PLP/PLP";
import { useEffect, useState } from "react";

export default function OnScrollPagination(props) {
  const { next, setNext, isInfiniteScrollEnabled, setProducts, product } =
    props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [next, isLoading, isInfiniteScrollEnabled]);

  const handleScroll = async () => {
    if (!isLoading && isInfiniteScrollEnabled && next) {
      const scrollThreshold = 500;
      const scrolledToBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - scrollThreshold;
      if (scrolledToBottom) {
        setIsLoading(true);
        const { data, errors } = await getPaginationData(next);
        if (errors) {
          console.error("Error fetching paginated data:", errors);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...data.results]);
          setNext(data.next);
        }
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="text-center">
      {isLoading && <div className="loading">Loading..</div>}
    </div>
  );
}
