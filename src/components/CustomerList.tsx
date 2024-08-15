import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface Props {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<Props> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div className="p-4">
      {customers.map(customer => (
        <div
          key={customer.id}
          className={`p-4 mb-2 cursor-pointer ${selectedCustomerId === customer.id ? 'bg-blue-200' : 'bg-white'} rounded-lg shadow-sm hover:bg-gray-100 transition`}
          onClick={() => onSelectCustomer(customer.id)}
        >
          <h2 className="text-lg font-semibold">{customer.name}</h2>
          <p className="text-sm text-gray-600">{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
