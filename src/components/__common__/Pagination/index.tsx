import { ArrowRight, ArrowLeft } from 'lucide-react';
import './style.scss';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: any) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage((p: number) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
      >
        <ArrowLeft size={12} />
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() =>
          setCurrentPage((p: number) => Math.min(totalPages, p + 1))
        }
        disabled={currentPage === totalPages}
      >
        <ArrowRight size={12} />
      </button>
    </div>
  );
};
