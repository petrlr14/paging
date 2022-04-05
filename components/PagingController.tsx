import { useMemo } from 'react';
import { range } from '../utils/paging';

enum EllipseArrow {
  'LEFT' = Infinity,
  'RIGHT' = -Infinity,
}

interface Props {
  className: (value: number) => string;
  onClick: (value: number) => void;
  pageCount: number;
  forward: () => void;
  backward: () => void;
  currentPage: number;
  pageNeighbours?: number;
}

export function PagingController({
  pageCount,
  className,
  onClick,
  backward,
  forward,
  currentPage,
  pageNeighbours,
}: Props) {
  const getBlocksToRender = useMemo(() => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (pageCount > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(pageCount - 1, currentPage + pageNeighbours);
      let _array = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = pageCount - endPage > 1;
      const spillOffset = totalNumbers - (_array.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        _array = [EllipseArrow.LEFT, ...extraPages, ..._array];
      }
      if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        _array = [..._array, ...extraPages, EllipseArrow.RIGHT];
      }
      if (hasLeftSpill && hasRightSpill) {
        _array = [EllipseArrow.LEFT, ..._array, EllipseArrow.RIGHT];
      }
      return [1, ..._array, pageCount];
    }
    return range(1, pageCount);
  }, [currentPage, pageCount, pageNeighbours]);

  return (
    <>
      <div>
        <button className="border py-1 px-2" onClick={backward}>
          {'<'}
        </button>
        {currentPage !== 1 && (
          <button onClick={() => onClick(1)} className="border py-1 px-2">
            {'<<'}
          </button>
        )}
      </div>
      <div>
        {getBlocksToRender.map((value, index) => {
          if (value === EllipseArrow.LEFT || value === EllipseArrow.RIGHT) {
            return <span key={`${value}-paging-button-${index}`}>...</span>;
          }
          return (
            <button
              key={`${value}-paging-button-${index}`}
              className={className(value)}
              onClick={() => onClick(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div>
        {currentPage !== pageCount && (
          <button
            onClick={() => onClick(pageCount)}
            className="border py-1 px-2"
          >
            {'>>'}
          </button>
        )}
        <button className="border py-1 px-2" onClick={forward}>
          {'>'}
        </button>
      </div>
    </>
  );
}
