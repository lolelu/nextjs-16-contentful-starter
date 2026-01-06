"use client";

import Image, { ImageLoader, ImageLoaderProps, ImageProps } from "next/image";

const contentfulLoader: ImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

type ContentfulImageProps = Omit<ImageProps, "src"> & {
  src?: string;
};

export function ContentfulImage({ ...props }: ContentfulImageProps) {
  return (
    <Image
      loader={contentfulLoader}
      {...props}
      alt={props.alt}
      src={props?.src || "./placeholder.svg"}
    />
  );
}
