import React from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

const PaginatedBlog = () => {
  const [items, setBlogs] = useState();

  //   useEffect(() => {
  //     fetch("./data.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBlogs(data);
  //       });
  //   }, []);
  console.log(items);
  const itemsPerPage = 10;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items?.length / itemsPerPage));
      });
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  function Items({ currentItems }) {
    return (
      <>
        {currentItems ? (
          currentItems?.map((item) => (
            <div>
              <h3>Item #{item.title}</h3>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </>
    );
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginatedBlog;
