import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getPager(total, currentPage, itemPerPage) {
    
    const totalPage = Math.ceil(total / itemPerPage);
    if (currentPage < 0) {
      currentPage = 0;
    }

    if (currentPage > totalPage) {
      currentPage = totalPage;
    }

    let startPage: number, endPage: number;
    if (totalPage <= 5) {
        startPage = 0;
        endPage = totalPage;
    } else {
        if (currentPage <= 3) {
            startPage = 0;
            endPage = 5;
        } else if (currentPage + 2 >= totalPage) {
            startPage = totalPage - 5;
            endPage = totalPage;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }
    }

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = Math.min(startIndex + itemPerPage - 1, total - 1);

    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // console.log(pages);
    pages.pop();

    return {
        totalItems: total,
        currentPage: Number(currentPage),
        itemPerPage,
        totalPages: totalPage,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages
    };
  }

  setPage = (total, currentPage, itemPerPage) => {
    return this.getPager(total, currentPage, itemPerPage);
  }

  setNewCurrentPage = (changeToNewCurrentPage, currentPage ,callback) =>{
    if (Number(changeToNewCurrentPage) === currentPage) {
      return;
    }
    currentPage = changeToNewCurrentPage;
    callback(currentPage);
  }
}



