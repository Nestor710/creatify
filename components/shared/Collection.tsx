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
import { Archive, Edit } from "lucide-react";

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
      <div className="collection-heading">
        <h2 className="h2-bold text-dark-600">Recent Edits</h2>
        {/* {hasSearch && <Search />} */}
        {
          images.length > 0 && <ViewToggle 
            viewMode={viewMode}
            onChange={setViewMode}
          />
        }
      </div>

      <div>
        {
          images.length > 0 && viewMode === "table" && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
              className="w-full pb-5"
            >
              <div className="grid grid-cols-4">
                <p className="col-span-1 p-20-semibold">Title</p>
                <p className="col-span-1 p-20-semibold">Type</p>
                <p className="col-span-1 p-20-semibold">Date</p>
                <p className="col-span-1 p-20-semibold">Actions</p>
              </div>
            </motion.div>
          )
        }
      </div>

      {images.length > 0 ? (
        <motion.ul
          className={`${viewMode === "card" ? "collection-list" : ""}`}
          // opcional: usar `layout` si queremos animaciones de layout automático
          layout
          style={{ listStyle: 'none', padding: 0, margin: 0 }} // ajustar estilos si es necesario
        >
          <AnimatePresence>
            {images.map((image) => {
              if (viewMode === "card") {
                return (
                  <motion.div
                    key={image.publicId}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
                    style={{ marginBottom: '1rem' }}
                    layout
                  >
                    <Card image={image} />
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    key={image.publicId}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
                    style={{ marginBottom: '1rem' }}
                    layout
                  >
                    <Table image={image} />
                  </motion.div>
                );
              }
            })}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="collection-empty flex-center">
          <div className="flex-center flex-col gap-2">
            <Archive height={50} width={50} />
            <p className="p-20-semibold text-orange-500">No items yet</p>
            <p className="p-16-medium text-dark-600">Start creating your transformations now</p>
          </div>
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
  return (
    <li>
      <Link href={`/transformations/${image._id}`} className="collection-card">
        <CldImage
          src={image.publicId}
          alt={image.title}
          width={image.width}
          height={image.height}
          {...image.config}
          loading="lazy"
          className="h-52 w-full rounded-[10px] object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        />
        <div className="flex-between">
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
      <div className="grid grid-cols-4">
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