import React, {useState, useRef} from 'react'

export default function FileUploader({onUpload}){
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  function handleFiles(files){
    // mock progress
    setProgress(10)
    const id = setInterval(()=>{
      setProgress(p=>{
        if(p>=100){ clearInterval(id); onUpload && onUpload(); return 100 }
        return p+10
      })
    },200)
  }

  function onDrop(e){ e.preventDefault(); handleFiles(e.dataTransfer.files) }
  function onSelect(e){ handleFiles(e.target.files) }

  return (
    <div className="file-uploader" onDrop={onDrop} onDragOver={e=>e.preventDefault()}>
      <input ref={ref} type="file" onChange={onSelect} style={{display:'none'}} />
      <div className="upload-area" onClick={()=>ref.current.click()}>
        <div>Drag files here or click to upload</div>
        {progress>0 && <div className="upload-progress">Uploading {progress}%</div>}
      </div>
    </div>
  )
}
