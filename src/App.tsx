import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetail';
import customersData from './customer.json';

const App: React.FC = () => {
  const [customers] = useState(customersData);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId) || null;

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className={`w-screen h-1/4 sm:h-screen text-center lg:w-1/4 overflow-y-auto border-r border-gray-300 bg-gray-50 md:border-r-0 md:border-b md:border-gray-300`}>
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
      </div>

      <div className={`flex-1 p-4 h-3/4 ${selectedCustomerId ? 'sm:flex sm:flex-col sm:justify-between' : 'g-gray-50'}`}>
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
