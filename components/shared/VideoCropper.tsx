'use client';

import { useState, useCallback, useEffect } from 'react';
import { CldUploadWidget, CldVideoPlayer, getCldVideoUrl } from 'next-cloudinary';
import VideoUploader from './VideoUploader';
import SocialsFormat, { Social } from './SocialsFormat';

// Definir los tipos para los aspectos de recorte disponibles
type AspectRatio = '16:9' | '9:16' | '1:1' | '4:5' | 'original';

const socials: Social[] = [
    {
        id: "youtube",
        name: "Youtube",
        ratio: "16:9",
        image: {
            logo: "/assets/icons/youtube.svg",
            width: 45,
            height: 45,
        }
    },
    {
        id: "tiktok",
        name: "TikTok",
        ratio: "9:16",
        image: {
            logo: "/assets/icons/tiktok.svg",
            width: 35,
            height: 35,
        }
    },
    {
        id: "square",
        name: "Square",
        ratio: "1:1",
        image: {
            logo: "/assets/icons/square.svg",
            width: 45,
            height: 45,
        }
    }
]

// Interfaz para los datos del video subido
interface VideoData {
  public_id: string;
  secure_url: string;
  format: string;
  width: number;
  height: number;
  duration: number;
  resource_type: string;
  created_at: string;
}

const CloudinaryVideoCropper: React.FC = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>('original');

  useEffect(() => {
    if (videoData) {
      setIsUploading(false);
    }
  }, [videoData]);

  const getVideoUrl = () => {
    if (!videoData) return '';
    return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/ar_${selectedRatio},c_fill,g_auto/${videoData.public_id}.${videoData.format}`;
  };

  // Opciones para el widget de carga de Cloudinary
  const uploadOptions = {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    uploadPreset: 'jsm_creatify',
    resourceType: 'video',
    sources: ['local'] as const,
    multiple: false,
    maxFiles: 1,
    clientAllowedFormats: ['mp4', 'mov', 'avi', 'webm'],
    maxFileSize: 104857600, // 100MB en bytes
  };

  // Función para manejar la subida exitosa
  const handleUploadSuccess = useCallback((result: any) => {
    console.log('Video subido con éxito:', result);
    setVideoData({
      public_id: result.info.public_id,
      secure_url: result.info.secure_url,
      format: result.info.format,
      width: result.info.width,
      height: result.info.height,
      duration: result.info.duration,
      resource_type: result.info.resource_type,
      created_at: result.info.created_at,
    });
    setIsUploading(false);
  }, []);

  // Función para manejar errores de subida
  const handleUploadError = useCallback((error: any) => {
    console.error('Error al subir el video:', error);
    setErrorMessage('Error al subir el video. Por favor, inténtalo de nuevo.');
    setIsUploading(false);
  }, []);

  // Función para manejar el inicio de la subida
  const handleUploadStart = useCallback(() => {
    setIsUploading(true);
    setErrorMessage('');
  }, []);

  // Función para aplicar el recorte inteligente según la relación de aspecto seleccionada
  const getTransformationOptions = () => {
    if (!videoData) return {};

    const transformations = [];
    
    // Configurar la transformación según la relación de aspecto seleccionada
    switch (selectedRatio) {
      case '16:9':
        transformations.push({ aspectRatio: '16:9', crop: 'fill', gravity: 'auto' });
        break;
      case '9:16':
        transformations.push({ aspectRatio: '9:16', crop: 'fill', gravity: 'auto' });
        break;
      case '1:1':
        transformations.push({ aspectRatio: '1:1', crop: 'fill', gravity: 'auto' });
        break;
      case '4:5':
        transformations.push({ aspectRatio: '4:5', crop: 'fill', gravity: 'auto' });
        break;
      case 'original':
      default:
        // No aplicar transformaciones, mantener el aspecto original
        break;
    }

    return { transformations };
  };

  return (
    <div className="cloudinary-video-cropper">
      {/* Selección de relación de aspecto */}
      <div className="mb-4">
        <label className="text-dark-600 text-xl font-semibold mb-3">Choose a aspect ratio:</label>
        <div className="flex flex-wrap gap-x-5 my-6">
          {socials.map((social) => (
            <SocialsFormat
              key={social.id}
              social={social}
              onClick={() => setSelectedRatio(social.ratio)}
              className={`px-3 py-1 rounded ${
                selectedRatio === social.ratio 
                  ? 'scale-125' 
                  : 'scale-100'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Widget de carga de Cloudinary */}
      <CldUploadWidget
        uploadPreset="jsm_creatify"
        options={{
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            uploadPreset: 'jsm_creatify',
            resourceType: 'video',
            sources: ['local'] as const,
            multiple: false,
            maxFiles: 1,
            clientAllowedFormats: ['mp4', 'mov', 'avi', 'webm'],
            maxFileSize: 104857600, // 100MB en bytes
        }}
        onSuccess={handleUploadSuccess}
        onError={handleUploadError}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-blue-300"
            disabled={isUploading}
          >
            {isUploading ? 'Subiendo...' : 'Subir Video'}
          </button>
        )}
      </CldUploadWidget>

      {/* Mostrar errores */}
      {errorMessage && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {errorMessage}
        </div>
      )}

      {/* Reproductor de video con el recorte aplicado */}
      {videoData && (
        <div className="mt-6">
          <p className="text-green-600 mb-2">¡Video procesado correctamente!</p>
          
          <div className="mt-4">
            <video width="320" height="240" controls>
                <source src={getVideoUrl()} type="video/mp4"></source>
            </video>
            {/* <CldVideoPlayer
              id="video-player"
              width="640"
              height="360"
              src={videoData.public_id}
              transformation={getTransformationOptions()}
              colors={{
                accent: '#00a0f5',
                base: '#000000',
                text: '#ffffff'
              }}
              className="rounded overflow-hidden"
            /> */}
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Public ID: {videoData.public_id}</p>
            <p>Duración: {videoData.duration.toFixed(2)}s</p>
            <p>Dimensiones originales: {videoData.width}x{videoData.height}</p>
            <p>Relación de aspecto seleccionada: {selectedRatio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudinaryVideoCropper;