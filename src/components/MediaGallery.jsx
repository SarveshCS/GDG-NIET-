import React, { useState } from "react"
import Masonry from "react-masonry-css"
import Modal from "./Modal"
import "@/components/CompCss/MediaGallery.css"

const galleryImages = [
  {
    src: "/images/events/GDG_Orientation_2024-25-Second_Year/GDG_Orientation_2024-25-Second_Year-main.jpg",
    alt: "GDG Cloud Event",
  },
  {
    src: "/images/events/GDG_Orientation_2024-25-First_Year/GDG_Orientation_2024-25-First_Year-main.jpg",
    alt: "GDG Community Event",
  },
  {
    src: "/images/events/Google_Cloud_Study_Jams_2023/Google_Cloud_Study_Jams_2023-main.jpg",
    alt: "Tech Workshop Session",
  },
  {
    src: "/images/events/innova_2024/INNOVA_2024-main.jpg",
    alt: "Developer Meetup",
  },
  {
    src: "/images/events/Google_Cloud_Study_Jams_2023_Swags_Distribution/Google_Cloud_Study_Jams_2023_Swags_Distribution-main.jpg",
    alt: "Coding Workshop",
  },
  {
    src: "/images/events/Google_Women_Engineers_Program_Cohort_6-2024/Google_Women_Engineers_Program_Cohort_6-2024-main.jpg",
    alt: "GDG Noida Event",
    customClass: "sixth-image", // Adding a custom class for the 6th image
  },
  {
    src: "/images/events/Git_and_GitHub_Workshop/Git_and_GitHub_Workshop-main.jpg",
    alt: "Tech Talk Session",
  },
  {
    src: "/images/events/Devfest_2023-New_Delhi/Devfest_2023-New_Delhi-main.jpg",
    alt: "Cloud Computing Workshop",
  },
  {
    src: "/images/events/Development_for_Collegiate_Women_in_Tech/Development_for_Collegiate_Women_in_Tech-main.jpg",
    alt: "Developer Conference",
  },
]

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="media-gallery">
      <div className="gallery-header">
        <h1>GDG NIET Gallery</h1>
        <p>Capturing moments of innovation and collaboration</p>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`image-item ${image.customClass || ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} />
          </div>
        ))}
      </Masonry>

      {selectedImage && <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}

export default MediaGallery
