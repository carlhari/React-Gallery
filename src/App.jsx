import React, { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const files = Array.from(e.target.elements.imageInput.files)
    const updatedList = [];


    files.forEach((file)=>{
      const reader = new FileReader;
      reader.onload = ()=>{
        updatedList.push(reader.result);

        if(updatedList.length === files.length){
          setImages((prev)=>[...prev, ...updatedList]);
        }
      }

      reader.readAsDataURL(file)
    })
    e.target.reset()
  };

  return (
    <div className="App">
      <div className="header">GALLERY</div>
      <form onSubmit={handleOnSubmit}>
        <input type="file" accept="image/*" multiple name="imageInput" required title='IMAGE'/>
        <button type="submit">UPLOAD</button>
      </form>

      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image}/>
        ))}
      </div>
    </div>
  );
}

export default App;
