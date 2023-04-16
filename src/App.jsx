import { useEffect, useState } from 'react'
import Logo from '../images/MyAnimeList_Logo.png'
import axios from 'axios'
import './App.css'

const api = axios.create({
  baseURL: 'https://server-anime-snactuary.onrender.com/api',
})

function App() {

  const [images, setImages] = useState([])
  const [dataLoaded, setdataLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [showGif, setShowGif] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const getImages = async (page) => {

    await api.get('/', { params: {page}}).then(res => {
      setImages([...images, ...res.data])
    }).catch(error => console.log(error))

    setdataLoaded(true)
  }

  useEffect(() => {
    getImages(currentPage)
  }, [currentPage])

  const newImage = (direction) => {
    if (direction === 1) {

      if (direction === 1 && images[currentImage].id === images.length - 1) {
        setCurrentPage(currentPage + 1)
      } 

      if (direction === 1 && images[currentImage].id === images.length) {
        setCurrentImage(0)

      } else {
        setCurrentImage(currentImage + 1)
      }
      
    } else {

      if (direction === -1 && images[currentImage].id === 1) {
        return
      } else {
        setCurrentImage(currentImage - 1)
      }

    }
  }

  const link = (image) => {
    const url = images[currentImage].url;
    window.location.href = url;
  }

  if (!dataLoaded) {
    return <div>Loading...</div>
  }

  return (
    
    <div className="container" onKeyDown={(e) => { if (e.key === 'ArrowLeft') { newImage(-1); } }} onKeyUp={(e) => { if (e.key === 'ArrowRight') { newImage(1); } }} tabIndex={0}>

      { dataLoaded && (
        <>
          <div className='body'>

            <div className='image' onMouseOver={() => setShowGif(true)} onMouseOut={() => setShowGif(false)}>

              {showGif ? (
                  <img src={images[currentImage].gif} />
                ) : (
                  <img src={images[currentImage].link} />    
                )
              }
            </div>
            
            <div className='description'>
              <p>{images[currentImage].description}</p>
            </div>

            <div className='title'>
              <div className='title_area'><h3>{images[currentImage].name}</h3></div>

              <div className='title_obj'>
                <div className='item1'> #{images[currentImage].id} </div>
                <div className='item2'> {images[currentImage].score} </div>
                <div className='item3'> <img className='obj-img' src={Logo} alt={images[currentImage].name} onClick={link}></img></div>
                <div className='item4'> EP.{images[currentImage].episodes} </div>
              </div>

            </div>

            <div className='nav'>
              <div onClick={() => newImage(-1)}><i class="fa-solid fa-arrow-left"></i></div>
              <div onClick={() => newImage(1)}><i class="fa-solid fa-arrow-right"></i></div>


            </div>
          </div>
        </>
      )}
    </div>
    
  )

}
export default App


