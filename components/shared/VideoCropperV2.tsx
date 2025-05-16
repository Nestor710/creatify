// pages/components/VideoUploader.js
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import SocialsFormat, { Social } from './SocialsFormat';

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
];

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

export default function VideoUploader() {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>();
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadSuccess = (result: any) => {
    const info = result.info;
    // utilizar la transformación eager retornada
    console.log(selectedRatio);
    
    const transformed = info.secure_url.replace('upload', `/upload/ar_${selectedRatio},c_fill`);
    setVideoData({
      public_id: info.public_id,
      secure_url: transformed,
      format: info.format,
      width: info.width,
      height: info.height,
      duration: info.duration,
      resource_type: info.resource_type,
      created_at: info.created_at,
    });
    setIsUploading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Selecciona relación de aspecto:</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {socials.map((social) => (
          <SocialsFormat
            key={social.id}
            social={social}
            onClick={() => !isUploading && setSelectedRatio(social.ratio)}
            className={`transition-transform ${selectedRatio === social.ratio ? 'scale-125' : 'scale-100'} ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        ))}
      </div>

      <CldUploadWidget
        uploadPreset="jsm_creatify"
        options={{
          resourceType: 'video',
          uploadPreset: 'jsm_creatify',
          sources: ['local'],
          multiple: false,
          maxFiles: 1,
          clientAllowedFormats: ['mp4', 'mov', 'avi', 'webm'],
          maxFileSize: 104857600,
        }}
        onUploadAdded={() => setIsUploading(true)}
        onError={(err) => {
          console.error('Upload error:', err);
          setIsUploading(false);
        }}
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            disabled={isUploading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isUploading ? 'Subiendo...' : 'Subir video'}
          </button>
        )}
      </CldUploadWidget>

      {videoData && (
        <div className="mt-6">
          <h2 className="mb-2 font-medium">Video transformado:</h2>
          <video
            src={videoData.secure_url}
            controls
            className="max-w-full rounded shadow"
          />
        </div>
      )}
    </div>
  );
}
