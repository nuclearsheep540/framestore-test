import React, { useState } from 'react';

export default function Home() {
  const [name, setName] = useState("Matt")

  return (
    <body className='column'>
      <article className="message">
        <div className="message-header">
          <p>Hello {name}</p>
        </div>
        <div className="message-body">
          This is an example message
        </div>
      </article>
    </body>
  )
}
