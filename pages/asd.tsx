import { PagingController } from '../components/PagingController';
import usePagination from '../hooks/usePagination';

export default function Asd() {
  const {
    backward,
    forward,
    paging: { page, pageCount, setPage },
  } = usePagination(12000, 1);
  return (
    <div>
      <div className="flex items-start gap-2 min-h-[60vh]">
        {[].map((value, index) => {
          return (
            <div
              className="px-20 py-10 border bg-blue-300"
              key={`${value}-${index}`}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        <PagingController
          currentPage={page}
          pageCount={pageCount}
          pageNeighbours={4}
          backward={backward}
          forward={forward}
          onClick={(value) => {
            setPage(value);
          }}
          className={(value) => {
            return `border py-1 px-2 ${value === page ? 'bg-blue-400' : ''}`;
          }}
        />
      </div>
    </div>
  );
}
