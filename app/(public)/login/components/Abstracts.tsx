import Image from "next/image";

export default function LoginAbstracts() {
  return (
    <div className="hidden xl:flex grow flex items-center justify-center h-full">
      <div className="flex flex-col w-fit gap-2">
        <Image
          src={"/login-vector-writer.svg"}
          alt="login-vector-writer"
          width={600}
          height={500}
        />
        <div className="flex w-full justify-end gap-2 items-center">
          <Image
            src={"/logo-icon-bw.svg"}
            alt="logo-icon-bw"
            width={30}
            height={30}
          />
          <h1 className="font-extrabold text-2xl">ReviewMyArticle</h1>
        </div>
      </div>
    </div>
  );
}
