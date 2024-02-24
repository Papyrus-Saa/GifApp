/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const GifItem = ({id, title, url}) => {
  return (
    <>
      
      <div className="itemsContainer">
        <p className="itemParagraph">{ title}</p>
        <img className="itemImg" src={url} alt={title} />
      </div>
    </>
  );
}

export default GifItem