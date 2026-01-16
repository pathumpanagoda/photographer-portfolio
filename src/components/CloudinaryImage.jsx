import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
// import { auto } from '@cloudinary/url-gen/actions/resize'; // Not currently used, commented out to avoid conflict or removed
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import cld from '../cloudConfig';

const CloudinaryImage = ({ publicId, src, alt, className, width, height, ...props }) => {
  // If publicId is provided, use Cloudinary
  if (publicId) {
    const myImage = cld.image(publicId);

    // Apply basic optimizations
    myImage.delivery(format(autoFormat()));
    myImage.delivery(quality(autoQuality()));

    if (width) {
        // You might want to adjust resize strategy based on needs
       // myImage.resize(auto().width(width).gravity(autoGravity())); 
       // For now, let's keep it simple or allow downstream resizing via CSS if not strictly enforcing backend resize
    }

    return (
      <AdvancedImage 
        cldImg={myImage} 
        alt={alt} 
        className={className} 
        {...props} 
      />
    );
  }

  // Fallback to standard img tag if no publicId (e.g. Unsplash URLs)
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      width={width}
      height={height}
      {...props} 
    />
  );
};

export default CloudinaryImage;
