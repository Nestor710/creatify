"use client"

import Image from "next/image"

export type SocialId = "youtube" | "tiktok" | "square";

export type SocialName = "Youtube" | "TikTok" | "Square";

type AspectRatio = '16:9' | '9:16' | '1:1' | '4:5' | 'original';

export interface Social {
  id: SocialId;
  name: SocialName;
  ratio: AspectRatio;
  image: {
    logo: any;
    width: number;
    height: number;
  };
}

const SocialsFormat = ({social, onClick, className }: {social: Social, onClick: () => void, className?: string}) => {

  const getColorBySocialNetwork = (name: string) => {
      const socialNewtwork = name.toLowerCase();
      const commonClass = 'text-white bg-gradient-to-br';
      switch (socialNewtwork)  {
        case 'youtube':
          return `${commonClass} from-red-500 to-red-900`;
        case 'tiktok':
          return `${commonClass} from-black via-gray-800 to-pink-600`;
        default:
          return `${commonClass} from-gray-400 to-gray-600`;
      }
  };

  return (
      <button 
          aria-label={social.ratio ?? social.name}
          className={`${getColorBySocialNetwork(social.name)} ${className} w-18 sm:w-20 py-1 flex flex-col items-center justify-center rounded-lg shadow-lg transition duration-500 hover:scale-125`}
          onClick={onClick}
          >
          {social.image?.logo && (
              typeof social.image.logo === 'string' ? (
                <Image src={social.image.logo} alt={social.name} width={social.image.width} height={social.image.height} />
              ) : (
                <social.image.logo />
              )
          )}
          <span className=" lowercase text-lg">{social.ratio}</span>
      </button>
  )
}

export default SocialsFormat