import React, { useState } from "react"
import Masonry from "react-masonry-css"
import Modal from "./Modal"
import "@/components/CompCss/MediaGallery.css"

const galleryImages = [
  {
    src: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/GDG%20Cloud%20Noida.jpg",
    alt: "GDG Cloud Event",
    height: 300,
  },
  {
    src: "https://gdg.community.dev/api/assets/api/v1/chapter/1/event/b2c9c83c/photo/",
    alt: "GDG Community Event",
    height: 400,
  },
  {
    src: "https://gdg.community.dev/api/assets/api/v1/chapter/1/event/c1f9c83d/photo/",
    alt: "Tech Workshop Session",
    height: 350,
  },
  {
    src: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/WhatsApp%20Image%202023-09-16%20at%2012.24.47_OZxXwpk.jpeg",
    alt: "Developer Meetup",
    height: 280,
  },
  {
    src: "https://gdg.community.dev/api/assets/api/v1/chapter/1/event/d4f9c83e/photo/",
    alt: "Coding Workshop",
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/gdg%20noida.jpg",
    alt: "GDG Noida Event",
    height: 380,
  },
  {
    src: "https://gdg.community.dev/api/assets/api/v1/chapter/1/event/e5f9c83f/photo/",
    alt: "Tech Talk Session",
    height: 300,
  },
  {
    src: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/gdg%20cloud.jpg",
    alt: "Cloud Computing Workshop",
    height: 340,
  },
  {
    src: "https://gdg.community.dev/api/assets/api/v1/chapter/1/event/f6f9c83g/photo/",
    alt: "Developer Conference",
    height: 360,
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

      <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
        {galleryImages.map((image, index) => (
          <div key={index} className="image-item" onClick={() => setSelectedImage(image)}>
            <img src={image.src || "/placeholder.svg"} alt={image.alt} style={{ height: image.height }} />
          </div>
        ))}
      </Masonry>

      {selectedImage && <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}

export default MediaGallery

