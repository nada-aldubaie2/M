import {Pagination} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const PaginationC = ({getPages, pageCount}) => {
  const handlePageClick =(data)=>{
    getPages(data.selected+1)
  }
   return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={1}
    pageRangeDisplayed={4}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
    containerClassName={"pagination justify-content-center p-3"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    activeClassName={"active"}
  />
  );
}

export default PaginationC;
