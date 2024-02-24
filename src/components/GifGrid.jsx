/* eslint-disable react-hooks/exhaustive-deps */
import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

/* eslint-disable react/prop-types */
const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <p className="loading">Loading...</p>}

      <div className="card-grid">
        <h3 className="categoryTitle">{category}</h3>
        <div className="gridDiv">
          {images.map((image) => (
            <GifItem {...image} key={image.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GifGrid;
