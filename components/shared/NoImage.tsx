import Image from "next/image";

export default function NoImage({
  sizes,
}: {
  sizes?: { w: number; h: number };
}) {
  return (
    <div className="flex items-center justify-center rounded-sm bg-(--input-stroke) h-full">
      <Image
        src={"/no-image.svg"}
        alt="no-image"
        height={sizes?.h ?? 40}
        width={sizes?.w ?? 40}
      />
    </div>
  );
}
