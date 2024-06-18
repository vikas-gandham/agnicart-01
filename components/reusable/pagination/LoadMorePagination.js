export default function LoadMorePagination({
  handlePagination,
  isLoading,
  hasNext,
}) {
  const handleClick = () => {
    if (!isLoading && hasNext) {
      handlePagination("LOADMORE", "next");
    }
  };
  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        disabled={isLoading || !hasNext}
        className="text-black border p-2 font-semibold"
      >
        {isLoading ? "Loading" : "Load More"}
      </button>
    </div>
  );
}
