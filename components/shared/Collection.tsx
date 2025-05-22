"use client";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { transformationTypes } from "@/constants";
import { IImage } from "@/lib/database/models/image.model";
import { formUrlQuery } from "@/lib/utils";

import { Button } from "../ui/button";
import { ViewToggle } from "../ui/ViewToggle";
import { useState } from "react";
import { Edit } from "lucide-react";

export const Collection = ({
  images,
  totalPages = 1,
  page,
}: {
  images: IImage[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<"card" | "table">("card");
  const [isAnimating, setIsAnimating] = useState(false);

  // PAGINATION HANDLER
  const onPageChange = (action: string) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  // Variantes para contenedores con animaciones escalonadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.02,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.01,
        staggerDirection: -1
      }
    }
  };

  // Variantes mejoradas para elementos individuales
  const itemVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: 10,
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: i * 0.01
      }
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 22,
        delay: i * 0.01
      }
    }),
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    }
  };

  // Manejador de cambio de vista con animación
  const handleViewChange = (newMode: "card" | "table") => {
    if (newMode === viewMode || isAnimating) return;
    
    setIsAnimating(true);
    // Pequeño retraso para la transición
    setTimeout(() => {
      setViewMode(newMode);
      setTimeout(() => setIsAnimating(false), 5);
    }, 5);
  };

  return (
    <>
      <div className="collection-heading">
        <h2 className="h2-bold text-dark-600">Recent Edits</h2>
        <ViewToggle 
          viewMode={viewMode}
          onChange={handleViewChange}
          disabled={isAnimating}
        />
      </div>

      {images.length > 0 && viewMode === "table" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="w-full pb-5"
        >
          <div className="grid grid-cols-4">
            <p className="col-span-1 p-20-semibold">Title</p>
            <p className="col-span-1 p-20-semibold">Type</p>
            <p className="col-span-1 p-20-semibold">Date</p>
            <p className="col-span-1 p-20-semibold">Actions</p>
          </div>
        </motion.div>
      )}

      {images.length > 0 ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <motion.ul
              className={`${viewMode === "card" ? "collection-list" : "space-y-2"}`}
              style={{ listStyle: 'none', padding: 0, margin: 0 }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.publicId}
                  custom={index}
                  variants={itemVariants}
                  layout
                  layoutId={`image-${image._id}`}
                  className={viewMode === "card" ? "mb-6" : "mb-2"}
                >
                  {viewMode === "card" ? (
                    <Card image={image} />
                  ) : (
                    <Table image={image} />
                  )}
                </motion.div>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="collection-empty">
          <p className="p-20-semibold">Empty List</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent className="flex w-full">
            <Button
              disabled={Number(page) <= 1}
              className="collection-btn"
              onClick={() => onPageChange("prev")}
            >
              <PaginationPrevious className="hover:bg-transparent hover:text-white" />
            </Button>

            <p className="flex-center p-16-medium w-fit flex-1">
              {page} / {totalPages}
            </p>

            <Button
              className="button w-32 bg-orange-gradient bg-cover text-white"
              onClick={() => onPageChange("next")}
              disabled={Number(page) >= totalPages}
            >
              <PaginationNext className="hover:bg-transparent hover:text-white" />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

const Card = ({ image }: { image: IImage }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <li>
      <Link href={`/transformations/${image._id}`} className="collection-card">
        <div className="relative h-52 w-full rounded-[10px] overflow-hidden">
          {!imageError ? (
            <CldImage
              src={image.publicId}
              alt={image.title}
              width={image.width || 400}
              height={image.height || 300}
              {...image.config}
              loading="lazy"
              className="h-52 w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 rounded-[10px]">
              <p className="text-gray-500">No se pudo cargar la imagen</p>
            </div>
          )}
        </div>
        <div className="flex-between mt-3">
          <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
            {image.title}
          </p>
          <Image
            src={`/assets/icons/${
              transformationTypes[
                image.transformationType as TransformationTypeKey
              ].icon
            }`}
            alt={image.title}
            width={24}
            height={24}
          />
        </div>
      </Link>
    </li>
  );
};

const Table = ({ image }: { image: IImage }) => {
  const type = {
    "restore": "Restore",
    "removeBackground": "Remove Background",
    "fill": "Fill",
    "remove": "Remove Object",
    "recolor": "Recolor"
  };

  return (
    <>
      <div className="grid grid-cols-4 hover:bg-gray-50 p-2 rounded-lg transition-colors">
        <p className="col-span-1 p-20-semibold mr-3 line-clamp-1 text-dark-600 capitalize">
          {image.title}
        </p>
        <p className="col-span-1 p-20-semibold mr-3 line-clamp-1 text-dark-600">
          {type[image.transformationType as keyof typeof type]}
        </p>
        <p className="col-span-1 p-20-semibold mr-3 line-clamp-1 text-dark-600">
          {image.createdAt?.toString().split("T")[0]}
        </p>
        <p className="col-span-1 p-20-semibold mr-3 line-clamp-1 text-dark-600">
          <Link href={`/transformations/${image._id}/update`}>
            <Edit className="size-5 text-orange-500" />
          </Link>
        </p>
      </div>
      <hr className="my-1 border-orange-500" />
    </>
  );
};