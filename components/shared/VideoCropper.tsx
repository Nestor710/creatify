'use client';

import { useState, useCallback, useEffect, useTransition } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import SocialsFormat, { Social } from './SocialsFormat';
import 'next-cloudinary/dist/cld-video-player.css';
import { Button } from '../ui/button';
import { toast } from '../ui/use-toast';
import { useCreditBalanceStore } from '@/store/creditBalance';
import { updateCredits } from '@/lib/actions/user.actions';
import Image from 'next/image';

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

const CloudinaryVideoCropper = ({userId}: { userId: string }) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>();
  const [isVideoProcessing, setIsVideoProcessing] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition()

  const { setCredit } = useCreditBalanceStore()

  const handleUploadSuccess = useCallback( (result: any) => {
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
    setIsVideoProcessing(true);

    toast({
      title: 'Video uploaded successfully',
      description: '5 credit was deduted from your account',
      duration: 5000,
      className: 'success-toast'
    })

    startTransition(async () => {
      console.log(userId);
      
      const credits = await updateCredits(userId, -5)
      setCredit(credits.creditBalance)
    })

    
    setTimeout(() => {
      setIsVideoProcessing(false);
    }, 5000);
  }, [userId, setCredit]);

  const handleUploadError = useCallback((error: any) => {
    setErrorMessage('Error al subir el video. Por favor, inténtalo de nuevo.');
    setIsUploading(false);
    toast({
      title: 'Something went wrong while uploading!',
      description: 'Please try again',
      duration: 5000,
      className: 'error-toast'
    })
  }, []);

  useEffect(() => {
    if (videoData) {
      setIsVideoProcessing(true);
      
      setTimeout(() => {
        setIsVideoProcessing(false);
      }, 3000);
    }
  }, [selectedRatio, videoData]);

  const handleDownload = () => {
    if (!videoData) return;
    const downloadUrl = videoData.secure_url.replace(
      '/upload/',
      `/upload/ar_${selectedRatio},c_fill,fl_attachment/`
    );
    const link = document.createElement('a');
    link.href = downloadUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cloudinary-video-cropper">
      <div className="mb-4">
        <div className="grid grid-cols-2 justify-between">
          <div>
            <label className="text-dark-600 text-xl font-semibold mb-3">Choose a aspect ratio:</label>
            <div className="flex flex-wrap gap-x-5 my-6">
              {socials.map((social) => (
                <SocialsFormat
                  key={social.id}
                  social={social}
                  onClick={() => {
                    if (!isUploading && !isVideoProcessing) {
                      setSelectedRatio(social.ratio as AspectRatio);
                    }
                  }}
                  className={`px-3 py-1 rounded ${
                    selectedRatio === social.ratio 
                      ? 'scale-125' 
                      : 'scale-100'
                  } ${(isUploading || isVideoProcessing) ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
              ))}
            </div>
          </div>
          <div>
            <label className="text-dark-600 text-xl font-semibold mb-3">Upload a video:</label>
            <CldUploadWidget
              uploadPreset="jsm_creatify"
              options={{
                  resourceType: 'video',
                  sources: ['local'] as const,
                  multiple: false,
                  maxFiles: 1,
                  clientAllowedFormats: ['mp4', 'mov', 'avi', 'webm'],
                  maxFileSize: 104857600,
              }}
              onSuccess={handleUploadSuccess}
              onError={handleUploadError}
            >
              {({ open }) => (
                <Button 
                    type="button"
                    onClick={() => open()}
                    className="submit-button capitalize mt-5"
                    disabled={isUploading || isVideoProcessing || !selectedRatio}
                >
                    {isUploading ? 'Uploading...' : isVideoProcessing ? 'Processing...' : 'Upload'}
                </Button>
              )}
            </CldUploadWidget>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {errorMessage}
        </div>
      )}

      {isVideoProcessing && videoData && (
        <div className="mt-4 p-3 bg-orange-100 border border-orange-400 text-orange-700 rounded-xl animate-pulse">
          <p className="font-medium">Processing video... Please wait while we apply the transformations.</p>
          <p className="text-sm mt-1">This may take a moment depending on the size of the video.</p>
        </div>
      )}

      {videoData && !isVideoProcessing && (
        <div className="mt-10 flex flex-col">
          <div className="flex items-center justify-between">
            <label className="text-orange-600 text-xl font-semibold mb-3">Transformed video:</label>
            <Button
              className="bg-orange-500/80 hover:bg-orange-600 transition-colors duration-500 ease-in-out text-white rounded-full"
              type="button"
              onClick={handleDownload}
            >
              <span className="mr-3">
                Download
              </span>
              <Image src="/assets/icons/download.svg" alt="Download" width={24} height={24} />
            </Button>
          </div>
          <div>
            <video
              controls
              src={videoData.secure_url.replace('upload', `/upload/ar_${selectedRatio},c_crop,c_fill`)}
              className="max-w-full rounded-xl shadow-lg shadow-orange-300 hover:shadow-orange-600 transition-shadow duration-500 ease-in-out"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudinaryVideoCropper;