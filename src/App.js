import { useState } from 'react';

function InfiniteImageGallery() {
  const [images, setImages] = useState([]);

  function loadImages() {
    const  load  = Math.floor(Math.random() * 1000) + 1;
    for(let i = 0; i < load; ++i) {
      setImages((prevImages) => [
        ...prevImages,
        { id: i, src: `https://picsum.photos/600?random=${i}` },
      ]);
    }
  }

  return (
    <div className="myApp">
      <h1>Infinite Image Gallery</h1>
      <div className="container">
        {images.map((image) => (
          <img key={image.id} src={image.src} alt="Random" />
        ))}
      </div>
      <button id="load-more" onClick={loadImages}>
        Load More Images
      </button>
      <style>
        {`
          .container {
            postion:absolute;
            align-item:center;
            object-fit: contain;
            display: flex;
            flex-wrap: wrap;
            mix-blend-mode:darken;
            justify-content: center;
            margin-top: 20px;
            background-color:#31dbf2;
          }

          img {
            width: 350px;
            height: 300px;
            margin: 10px;
            flex:shrink;
            object-fit:contain;
            transition: infinite-linear .2s ease-in-out;

          }

          #load-more {
            align-item:center;
            margin-top:20px;
            object-fit:cover;
            display:flex;
            margin: 20px auto;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #120A56;
            color:#C4F3FC;
            cursor:pointer;
          }
        `}
      </style>
    </div>
  );
}

export default InfiniteImageGallery;