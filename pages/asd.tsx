import { PagingController } from '../components/PagingController';
import usePagination from '../hooks/usePagination';

export default function Asd() {
  const {
    array,
    backward,
    forward,
    paging: { firstPage, page, pageCount, setPage },
  } = usePagination(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
    0,
    2
  );
  return (
    <div>
      <div className="flex items-start gap-2 min-h-[60vh]">
        {array.map((value, index) => {
          return (
            <div className="px-20 py-10 border" key={`${value}-${index}`}>
              {value}
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-between px-10">
        <div>
          <button onClick={backward}>{'<'}</button>
        </div>
        <div className="flex gap-2">
          <PagingController
            currentPage={page}
            pageCount={pageCount}
            pageNeighbours={2}
            onClick={(value) => {
              setPage(value);
            }}
            className={(value) => {
              return `border py-1 px-2 ${value === page ? 'bg-blue-400' : ''}`;
            }}
          />
        </div>
        <div>
          <button onClick={forward}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}
