import axios from 'axios';

// Using direct values since we're using an unsigned upload preset
const CLOUD_NAME = "daxuicszc";
const UPLOAD_PRESET = "gdg_exhib";

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export const uploadToCloudinary = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', 'gdg-projects');

    console.log('Uploading to Cloudinary with preset:', UPLOAD_PRESET);

    const response = await axios.post(CLOUDINARY_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });

    if (!response.data.secure_url) {
      throw new Error('Upload failed - no URL received');
    }

    console.log('Upload successful:', response.data);
    return response.data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    if (error.response) {
      console.error('Cloudinary error details:', error.response.data);
      throw new Error(`Upload failed: ${error.response.data.error?.message || 'Unknown error'}`);
    }
    throw new Error('Failed to upload image: ' + error.message);
  }
}; 