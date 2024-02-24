/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import getGifts from "../helpers/getGifs";


const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs