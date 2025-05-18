import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const GetStartedBtn = () => {

    const buttonChevronRef = useRef(null);
    const hoverButtonAnimation = [
		"translate-x-1",
		"scale-125",
		"transition-all",
		"duration-500",
	];

	const handleMouseEnter = () => {
		if (buttonChevronRef.current) {
			const element = buttonChevronRef.current as HTMLElement;
			hoverButtonAnimation.forEach(className => {
				element.classList.add(className);
			});
		}
	};

	const handleMouseLeave = () => {
		if (buttonChevronRef.current) {
			const element = buttonChevronRef.current as HTMLElement;
			hoverButtonAnimation.forEach(className => {
				element.classList.remove(className);
			});
		}
	};

    const router = useRouter();

  return (
    <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => router.push("/sign-in")}
        className="px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 hover:scale-105 duration-500 transition-all flex items-center justify-center"
    >
        Get Started <ChevronRight ref={buttonChevronRef} className="ml-2" size={16} />
    </button>
  )
}

export default GetStartedBtn