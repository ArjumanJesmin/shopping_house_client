/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Image from "next/image";
import img from "@/assets/img.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import slides from "@/slides.json";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 3;

export function CardSection() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(slides.length / ITEMS_PER_PAGE);

  // Get the current page's slides
  const paginatedSlides = slides.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg md:min-w-full my-8 gap-4"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-[400px] items-center justify-center rounded-lg">
          <Image
            src={img}
            alt="image"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            className="h-full w-full rounded-lg"
          />
        </div>
      </ResizablePanel>

      <ResizablePanel defaultSize={70}>
        <ResizablePanelGroup direction="horizontal" className="gap-4">
          {paginatedSlides?.map((slide: any, index: number) => (
            <ResizablePanel key={index} defaultSize={25}>
              <Card className="h-[400px] w-full flex flex-col">
                <CardHeader>
                  <CardTitle>{slide.title || "Card Title"}</CardTitle>
                  <CardDescription>
                    {slide.description || "Card Description"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative flex-grow">
                  {/* Add Image inside the card */}
                  <Image
                    src={slide.image}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </CardContent>
                <CardFooter>
                  <p>{slide.footer || "Card Footer"}</p>
                </CardFooter>
              </Card>
            </ResizablePanel>
          ))}
        </ResizablePanelGroup>

        {/* Pagination Controls */}
        <Pagination className="mt-4">
          {/* Previous Button */}
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            aria-disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Previous
          </PaginationPrevious>

          <PaginationContent>
            {/* Dynamic page number display */}
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => handlePageChange(i + 1)}
                  className={currentPage === i + 1 ? "font-bold" : ""}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>

          {/* Next Button */}
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Next
          </PaginationNext>
        </Pagination>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
