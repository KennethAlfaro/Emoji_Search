import React from 'react'
import './style.css'

export const EmojiContainer = (props) => {
  console.log(props.props)
  return (
    <section>
      <aside>
      <h1><span> {props.props.symbol}</span></h1>
      <hr/>
      <article>
       <h1>{props.props.title}</h1>
       <hr id='barraTitulo'/>
       <h2>{props.props.keywords}</h2>
       </article>
      </aside>
    </section>
  )
}


