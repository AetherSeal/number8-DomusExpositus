type ImageProps = {
  src: string;
  alt: string;
};
export default function GridImage({ src, alt }: ImageProps) {
  return (
    <div className="relative h-40">
      <img
        src={src}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover shadow-sm"
      />
    </div>
  );
}
