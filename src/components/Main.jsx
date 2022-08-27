import React, {useState, useEffect} from 'react'

const Main = () => { 
  const [meme, setMeme] = useState({
    toptext: '',
    bottomtext: '',
    randomImage: ''
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(resp => resp.json())
      .then(memesData => setAllMemes(memesData.data.memes))
  }, [])
    
  const getMemeImage = () => {
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
  }

  const handleChange = (event)=>{
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <main className='main-container'>
        <div className='form'>
            <input 
            className='input-el' 
            type="text"
            placeholder='Top text'
            name='toptext'
            value={meme.toptext}
            onChange = {handleChange} 
            />
            <input 
            className='input-el' 
            type="text"
            placeholder='Bottom text'
            name='bottomtext'
            value={meme.bottomtext}
            onChange = {handleChange} 
            />
            <button 
            className='btn'
            onClick={getMemeImage}
            >
              Get a new meme image
              </button> 
        </div>
        <div className='meme'>
          {meme.randomImage && <img className='memeimg' 
          src={meme.randomImage} 
          alt="meme-img" 
          />}
            <h2 className='top-text'>{meme.toptext}</h2>
            <h2 className='bottom-text'>{meme.bottomtext}</h2>
        </div> 
    </main>
  )
}

export default Main
