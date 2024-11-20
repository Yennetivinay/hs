import React, { useEffect,useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useParams } from 'react-router-dom'
import PDFViewer from './PDFViewer'

const MarkDownPage = () => {
  const [content,setContent]=useState()
  let {pageName} = useParams()
  useEffect(()=>{
    if(!pageName) {
      setContent("## Page not found")
      pageName = "home"
    }
  import(`../content/${pageName}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => setContent("## Page not found"));

  },[pageName])
  console.log('entered the markdown file')
  return (
    <div className="p-6 min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto bg-white p-8 ">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-extrabold text-blue-800 mt-6 mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold text-blue-600 mt-4 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-lg text-gray-700 my-4 leading-relaxed" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="font-bold text-black" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 my-4 text-gray-700" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="mb-2 text-gray-700" {...props} />
            ),
            img: ({alt,src})=>{
             
              if(alt === "PDF Viewer"){
                
                return <div className='w-full'>
                  <PDFViewer fileUrl={src}/>
                  </div>
              }
             
              return <img src={src} alt={alt}/>
            }
          }}
        />
      </div>
    </div>

  )
 
   
  
}

export default MarkDownPage
