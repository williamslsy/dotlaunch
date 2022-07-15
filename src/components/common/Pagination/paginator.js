// shamelessly stolen from https://github.com/deoxxa/paginator/blob/master/index.js

// Paginator constructor
//
// `perPage` is the number of results per page, `length` is the number of
// pages to display. They default to `25` and `10` respectively.
function Paginator(perPage, length) {
  // You really should be calling this with `new Paginator`, but WHATEVER.
  if (!(this instanceof Paginator)) {
    return new Paginator(perPage, length);
  }

  // Woo, defaults!
  this.perPage = perPage || 25;
  this.length = length || 10;
}

// Build an object with all the necessary information for outputting pagination
// controls.
//
// (new Paginator(paginator.build(100, 2)
Paginator.prototype.build = function (totalResultsValue, currentPageValue) {
  // Ensure both totalResults and currentPage are treated as Numbers
  const totalResults = parseInt(totalResultsValue, 10);
  let currentPage = parseInt(currentPageValue, 10) || 1;

  // We want the number of pages, rounded up to the nearest page.
  const totalPages = Math.ceil(totalResults / this.perPage);

  // Obviously we can't be on a negative or 0 page.
  if (currentPage < 1) {
    currentPage = 1;
  }
  // If the user has done something like /page/99999 we want to clamp that back
  // down.
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  // This is the first page to be displayed as a numbered link.
  let firstPage = Math.max(1, currentPage - Math.floor(this.length / 2));

  // And here's the last page to be displayed specifically.
  let lastPage = Math.min(
    totalPages,
    currentPage + Math.floor(this.length / 2)
  );

  // This is triggered if we're at or near one of the extremes; we won't have
  // enough page links. We need to adjust our bounds accordingly.
  if (lastPage - firstPage + 1 < this.length) {
    if (currentPage < totalPages / 2) {
      lastPage = Math.min(
        totalPages,
        lastPage + (this.length - (lastPage - firstPage))
      );
    } else {
      firstPage = Math.max(
        1,
        firstPage - (this.length - (lastPage - firstPage))
      );
    }
  }

  // This can be triggered if the user wants an odd number of pages.
  if (lastPage - firstPage + 1 > this.length) {
    // We want to move towards whatever extreme we're closest to at the time.
    if (currentPage > totalPages / 2) {
      firstPage += 1;
    } else {
      lastPage -= 1;
    }
  }

  // First result on the page. This, along with the field below, can be used to
  // do "showing x to y of z results" style things.
  let firstResult = this.perPage * (currentPage - 1);
  if (firstResult < 0) {
    firstResult = 0;
  }

  // Last result on the page.
  let lastResult = this.perPage * currentPage - 1;
  if (lastResult < 0) {
    lastResult = 0;
  }
  if (lastResult > Math.max(totalResults - 1, 0)) {
    lastResult = Math.max(totalResults - 1, 0);
  }

  return {
    totalPages,
    pages: Math.min(lastPage - firstPage + 1, totalPages),
    currentPage,
    firstPage,
    lastPage,
    previousPage: currentPage - 1,
    nextPage: currentPage + 1,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
    totalResults,
    results: Math.min(lastResult - firstResult + 1, totalResults),
    firstResult,
    lastResult,
  };
};

export default Paginator;
