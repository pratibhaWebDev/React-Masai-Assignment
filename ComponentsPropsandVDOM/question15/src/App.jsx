import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const blogs = [
  {
    title: "Mastering JavaScript",
    content: "JavaScript is a powerful language for web development."
  },
  {
    title: "React in Indian Startups",
    content: "React is widely used in many Indian tech companies."
  },
  {
    title: "Career in Web Development",
    content: "Explore job roles and growth in web development."
  }
];

function App() {
  const [selectblog, setSelectblog] = useState(null)

  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Blog Titles</h1>
        <ul>
          {blogs.map((blog, index) => (
            <li
              key={index}
              onClick={() => setSelectblog(blog)}
              style={{ cursor: 'pointer', color: 'blue', marginBottom: '10px' }}
            >
              {blog.title}
            </li>
          ))}
        </ul>

        <hr />

        {selectblog ? (

          <div>

            <h2>{selectblog.title}</h2>
            <p>{selectblog.content}</p>
          </div>
        ) : (<p><em>Select a blog to read</em></p>)}
      </div>
    </>
  )
}

export default App
