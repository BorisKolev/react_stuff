import React from "react"
import "./style.css"

export default function Meme()
{
    
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/30b1gx.jpg",
        }
    )

    const [allMemes, setAllMemes] = React.useState()

    React.useEffect(function() {
        
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemes(data))
        }, [])
    
    function getMemeImage()
    {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(previousValue => ({
                ...previousValue,
                randomImage: memesArray[randomNumber].url
        }))
    }

    function handleText(event)
    {
        const {name, value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">

                <input 
                    text="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    className="form--input"
                    onChange={handleText}/>

                <input 
                    text="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    className="form--input"
                    onChange={handleText}/>

                <button
                    onClick={getMemeImage}
                    className="form--button">
                        Get a new meme image 
                </button>
            
            </div>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text--top">{meme.bottomText}</h2>
                <h2 className="meme--text--bottom">{meme.topText}</h2>
            </div>
        </main>
    )
}