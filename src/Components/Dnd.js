import React, { useCallback }from 'react';
import { useDropzone } from 'react-dropzone';
import '../Style.css';
import Table from "./Table";


function Dnd(props) {
  const [files, setFiles] = React.useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles([...files, Object.assign({}, acceptedFiles)]);
  }, [files]);

  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, application/pdf'
  });
  
  return (
    <>
      <div {...getRootProps()} className='dropContainer'>
        <input {...getInputProps()} />
        <div>Clique ou arraste seus arquivos.</div>
     </div>
     <Table tableProps={files}/>
    </>
    
  )
}


export default Dnd;