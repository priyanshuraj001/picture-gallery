import React from 'react';
import useFetchPhotos from '../hooks/fetchPhotos';
import PhotoGrid from './PhotoGrid';

interface Customer {
  id: number,
  name: string;
  title: string;
  address: string;
  detail: string;
}

interface Props {
  customer: Customer | null;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  const photos = useFetchPhotos(customer?.id);

  if (!customer) return <div className="p-4 text-center text-gray-500">Select a customer to see details.</div>;

  return (
    <div className="flex flex-col items-center max-w-full sm:w-5/6 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{customer.name}</h1>
      <p className="text-xl text-gray-700 mb-2">{customer.title}</p>
      <p className="text-md text-gray-600 mb-4">{customer.address}</p>
      <p className="text-sm text-gray-500 mb-6">{customer.detail}</p>

      <PhotoGrid photos={photos} />
    </div>
  );
};

export default CustomerDetails;
