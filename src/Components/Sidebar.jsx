import React, { useState } from 'react';
import { Table } from './Table';
import { Navbar } from './Nav';
import { SideList } from './Sidebarlist';

const Sidebar = () => {
  const [open, setOpnen] = useState(false);

  function handleclick() {
    setOpnen(!open);
  }
  return (
    <>
      <Navbar handleClick={handleclick} open={open}/>
      <SideList handleClick={handleclick} open={open} />
      <div className="md:p-4 bg-gray-100 h-screen overflow-auto lg:ml-64">
        <div className="rounded-lg :border-gray-700 mt-14 lg:mt-0">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
