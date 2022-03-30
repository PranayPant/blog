import PropTypes from 'prop-types'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function Dropzone({ handleDrop, accept }) {
   const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      console.log('onDrop')
      handleDrop(acceptedFiles, rejectedFiles, fileEvent)
   }, [])
   const { getRootProps, getInputProps } = useDropzone({
      onDrop: handleDrop,
      accept,
   })
   return (
      <div {...getRootProps()}>
         <input {...getInputProps()} />
         <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
   )
}

Dropzone.propTypes = {
   handleDrop: PropTypes.func.isRequired,
   accept: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
   ]).isRequired,
}
