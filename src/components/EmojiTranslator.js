import React,{ useState, useEffect } from "react";
import translate from 'moji-translate';

const EmojiTranslator = () => {
    const [inputText,setInputText]=useState('')
    const [traslateText,setTranslateText]=useState('')
    const handleChange=(e)=>{
        setInputText(e.target.value)
    }
    useEffect(()=>{
        const handleTranslate= () =>{
            const words=inputText.match(/\w+|[^\w\s]/g);
            if (words){
                const translated = words.map((word) => {
                    if (translate.isMaybeAlreadyAnEmoji(word)){
                        return word
                    }
                    else{
                        const emojis=translate.getAllEmojiForWord(word);
                        if (emojis.length>0){
                            return emojis[Math.floor(Math.random()*emojis.length)]
                        }
                        else{
                            return word
                        }
                    }
                })
                setTranslateText(translated.join(' '))
            }
            }
        handleTranslate();
    },[inputText])
  return (
    <div>
        <h1>Emoji Translator</h1>
        <textarea 
        rows="4"
        cols="50"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text..."></textarea>
        <br/>
        <h1>To ✨emoji✨</h1>
        <br/>
        <p>Translate Text:</p>
        <div>{traslateText}</div>
    </div>
  )
}

export default EmojiTranslator;