'use client';

import { useState, useEffect } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

// Importamos CSS
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.css';

// Importamos plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginMediaPreview from 'filepond-plugin-media-preview';

// Registramos los plugins
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginMediaPreview
);

const VideoUploader = ({
  onVideoSelect = (file: File) => {},
  maxFileSize = '100MB',
  className = ''
}) => {
  const [files, setFiles] = useState([]);

  // Manejador de cambio de archivos
  const handleUpdateFiles = (fileItems: any) => {
    setFiles(fileItems);
    
    // Si hay archivos y existe la función de callback
    if (fileItems.length > 0 && onVideoSelect) {
      // Pasamos el archivo al componente padre para procesarlo con Cloudinary
      onVideoSelect(fileItems[0].file);
    }   
  };

  return (
    <div className={`video-uploader ${className}`}>
      <FilePond
        files={files}
        onupdatefiles={handleUpdateFiles}
        allowMultiple={false}
        maxFiles={1}
        maxFileSize={maxFileSize}
        acceptedFileTypes={['video/*']}
        name="video"
        labelIdle='Arrastra y suelta tu video o <span class="filepond--label-action">Busca</span>'
        labelFileTypeNotAllowed="Formato de video no soportado"
        fileValidateTypeLabelExpectedTypes="Se esperan archivos de video"
        labelMaxFileSizeExceeded="El video es demasiado grande"
        labelMaxFileSize="El tamaño máximo es {filesize}"
        credits={false}
        // Inhabilitamos el procesamiento del servidor ya que lo manejaremos con Cloudinary
        server={null}
        instantUpload={false}
        allowRevert={true}
      />
    </div>
  );
};

export default VideoUploader;