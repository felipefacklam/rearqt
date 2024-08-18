import Image from "next/image";

interface ArticleSecondaryProps {
  title1: string;
  title2: string;
  text: string;
  image1: string;
}
export default function ArticleSecondary(props: ArticleSecondaryProps) {
  return (
    <div className="flex justify-center bg-green-primary w-screen h-[500px] text-gold-primary drop-shadow-md border-2 border-y-gold-primary">
      <Image
        src={props.image1}
        width={400}
        height={400}
        alt="image"
        className="drop-shadow-2xl bg-slate-50 rounded-tl-large rounded-sm my-10 scale-95 hover:scale-100 ease-in duration-200"
      />
      <div className="flex flex-col gap-14 justify-center items-center w-[500px] p-12">
        <div className="flex">
          <h2 className="text-3xl text-gold-primary underline underline-offset-4 drop-shadow-2xl">
            {props.title1}
            <span className="text-3xl text-brown-primary drop-shadow-2xl">
              {" "}
              {props.title2}
            </span>
          </h2>
        </div>
        <p className="text-xl  text-brown-primary text-justify drop-shadow-2xl">
          {props.text}
        </p>
      </div>
    </div>
  );
}
