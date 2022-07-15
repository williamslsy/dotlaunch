import React, { useEffect } from 'react';

import classNames from 'classnames';
import styled from 'styled-components';

import Paginator from './paginator';

const PageLinks = styled.div.attrs(() => ({
  className: `flex space-x-2`,
}))`
  button {
    font-size: 1rem;
    border: 1px solid ${(props) => props.theme.colors.primaryText}20;
    padding: 0.5rem;
    border-radius: 8px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;

    &:hover {
      background: #c4c4c450;
    }

    &.current {
      background: ${(props) => props.theme.colors.primaryBlue};
      color: #ffffff;
    }
  }
`;

const PAGE_RANGES = 5;
interface IPaginationProps {
  currentPage: number;
  totalPages?: number;
  totalItems: number;
  perPage?: number;
  onPageClick: (page: { page: number }) => void;
}

const createPageNumbers = (start = 1, end: number): number[] => {
  const pages = [];
  for (let i = start; i <= end; i += 1) {
    pages.push(i);
  }
  return pages;
};

export const Pagination = ({
  currentPage = 1,
  perPage = 15,
  totalPages,
  totalItems,
  onPageClick,
}: IPaginationProps) => {
  const { firstPage, lastPage, hasPreviousPage, hasNextPage } = new Paginator(
    perPage,
    PAGE_RANGES
  ).build(totalItems, currentPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, totalPages]);

  return (
    <div className="flex mt-10 py-20">
      <div className="w-full">
        <nav className="flex justify-start">
          <PageLinks>
            {hasPreviousPage && (
              <button
                className={classNames('prev page-numbers', {
                  disabled: !hasPreviousPage,
                })}
                onClick={() => onPageClick({ page: currentPage - 1 })}
                type="button"
              >
                <i className="las la-angle-left"></i>
              </button>
            )}
            {createPageNumbers(firstPage, lastPage).map((page) => (
              <button
                key={page}
                className={classNames('page-numbers', {
                  'current disabled': page === currentPage,
                })}
                disabled={page === currentPage}
                onClick={() => onPageClick({ page })}
                type="button"
              >
                {page}
              </button>
            ))}
            {hasNextPage && (
              <button
                className={classNames('next page-numbers', {
                  disabled: !hasNextPage,
                })}
                onClick={() => onPageClick({ page: currentPage + 1 })}
                type="button"
              >
                <i className="las la-angle-right"></i>
              </button>
            )}
          </PageLinks>
        </nav>
      </div>
    </div>
  );
};
