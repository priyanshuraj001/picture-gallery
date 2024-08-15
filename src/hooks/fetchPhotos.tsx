import { useState, useEffect } from 'react';

const useFetchPhotos = (trigger: any) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    console.log('yes');
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const response = await fetch(`https://picsum.photos/v2/list?page=${randomPage}&limit=9&random=${Date.now()}`);
    const data = await response.json();
    setPhotos(data.map((photo: { download_url: string }) => photo.download_url));
  };

  useEffect(() => {
    fetchPhotos(); 
    const interval = setInterval(() => {
      fetchPhotos();
    }, 10000); 

    return () => clearInterval(interval);
  }, [trigger]);

  return photos;
};

export default useFetchPhotos;
