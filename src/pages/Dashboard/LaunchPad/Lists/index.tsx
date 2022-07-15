import React, { useEffect, useState } from 'react';
import { Card } from '../../../../components/common/Card';
import { Link } from 'react-router-dom';
import { LaunchPadCard } from '../../../../components/layout/LaunchComponent/LaunchPadCard';
import { lists, ListsType } from './demo-data';
import { Input, InputContainer } from '../../../../components/common/Inputs';
import { SecondaryButton } from '../../../../components/common/Button';
import { LaunchpadFilter } from '../../../../components/layout/LaunchComponent/LaunchpadFilter';
import { TabSelector } from '../../../../components/common/Tabs/TabSelector';
import { TabPanel, useTabs } from '../../../../components/common/Tabs';
import { NoData } from '../../../../components/layout/NoData';
import { LaunchPadLoader } from '../../../../components/common/CardLoader';
import { Pagination } from '../../../../components/common/Pagination';

const LaunchpadLists = () => {
  const [filterOption, setFilterOption] = useState<string>('');
  const [selectedTab, setSelectedTab] = useTabs(['allPools', 'myPools']);

  //sample pagination data
  const [paginatedList, setPaginatedList] = useState<ListsType[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const getTotalPages = () => {
    const main = Math.floor(lists.length / itemsPerPage);
    const remainder = lists.length % itemsPerPage > 0 ? 1 : 0;
    return main + remainder;
  };
  const itemsPerPage = 3;
  const totalItems = lists.length;
  const totalPages = getTotalPages();

  const paginateList = () => {
    // This implementation is incorrect, I did not have enough time to create the demo implementation since you would retrieve the data from the blockchain.
    // All that is required is to use the page number after calling goToPage() to get the data for that page from the blockchain.
    setPaginatedList(
      lists.slice(
        itemsPerPage - currentPage * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
  };
  // Sample data ends

  const selectFilterOption = (option: string) => {
    setFilterOption(option);
    // Perform request to server
  };

  const goToPage = (pageNumber: number) => {
    // console.log(pageNumber);
    setCurrentPage(pageNumber);
    // Make request to blockchain with the page number
  };

  useEffect(() => {
    paginateList();
  }, [filterOption, currentPage]);

  return (
    <div>
      <div className="py-10">
        <h3 className="text-2xl md:text-3xl font-bold">Current PreSales 🔥</h3>
      </div>
      <nav className="flex mx-auto justify-center mb-8">
        <TabSelector
          isActive={selectedTab === 'allPools'}
          onClick={() => setSelectedTab('allPools')}
        >
          All Pools
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'myPools'}
          onClick={() => setSelectedTab('myPools')}
        >
          My Pools
        </TabSelector>
      </nav>
      <Card className="mb-10">
        <InputContainer className="flex flex-col md:flex-row md:space-x-2">
          <Link className="hidden md:block" to="/app/launchpad/create">
            <SecondaryButton>Create Pool</SecondaryButton>
          </Link>
          <Input type="text" placeholder="Enter Token Address" />
        </InputContainer>
        <LaunchpadFilter
          selected={filterOption}
          onSelect={selectFilterOption}
        />
      </Card>
      <div>
        <TabPanel hidden={selectedTab !== 'allPools'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedList?.map((list) => (
              <Link to={`/app/launchpad/lists/${list.id}`} key={list.id}>
                <LaunchPadCard list={list} />
              </Link>
            ))}
          </div>
          {/* Launchpad items loader component */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
            <LaunchPadLoader />
          </div> */}
          <Pagination
            currentPage={currentPage} // The currently active page from the blockchain
            totalItems={totalItems} // Total amount of items in retrieved from the blockchain
            perPage={itemsPerPage} // Number of items per page
            totalPages={totalPages} // Total number of expected pages
            onPageClick={({ page }) => goToPage(page)}
          />
        </TabPanel>
        <TabPanel hidden={selectedTab !== 'myPools'}>
          <NoData />
        </TabPanel>
      </div>
    </div>
  );
};

export default LaunchpadLists;
