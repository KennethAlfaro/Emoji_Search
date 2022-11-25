import '../../App.css';
import data from '../../emoji-list.json'
import React from 'react'
import {EmojiContainer} from '../EmojiContainer'
import { EmojiNotFound } from '../EmojiNotFound';




export function FilterByKeyword() {

  const [emoji, setEmoji] = React.useState()

  const handleLocalChange = (emojiSent) => {
    if (emojiSent !== ''){
      const searchedEmoji = data.filter(element => element.keywords.includes(emojiSent.target.value))
      setEmoji(searchedEmoji.at(0))
    }
    else
    setEmoji(null)
  }

  return (
    <div className="App">
      <input placeholder='Search by keyword'
      onChange={handleLocalChange}></input>
      
      {emoji? (
        <EmojiContainer props={emoji}></EmojiContainer>

      ):(
        <EmojiNotFound></EmojiNotFound>
      )}
    </div>
  );
    
}