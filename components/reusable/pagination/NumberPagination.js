import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function NumberPagination({ count }) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const params = new URLSearchParams(searchParams);

  //   const handleClick = (newPage:any) => {

  //     const newSearchParams = new URLSearchParams(searchParams.toString());
  //     newSearchParams.set('page', newPage);

  //     router.push(`${path}?${newSearchParams.toString()}`);

  //   };

  const handleClick = (event) => {
    const newQuery = { ...searchParams };
    if (event) {
      newQuery.page = Number(event);
    } else {
      newQuery.page = 1;
    }
    params.set("page", newQuery.page);
    router.push(`${path}?${params.toString()}`);
  };

  return (
    <div className="w-full flex items-center justify-center gap-10 p-20">
      <Pagination
        pageSize={20}
        current={page ? Number(page) : 1}
        total={Number(count)}
        onChange={handleClick}
      />
    </div>
  );
}