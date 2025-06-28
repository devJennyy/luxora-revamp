import { CardContainer, CardItem } from "@/components/ui/3d-card";

const WobbleImages = () => {
  const ImageCard = ({
    src,
    className,
  }: {
    src: string;
    className: string;
  }) => (
    <CardContainer className="inter-var">
      <CardItem translateZ="100">
        <img src={src} className={`object-cover rounded-[50px] ${className}`} />
      </CardItem>
    </CardContainer>
  );
  return (
    <div className="lg:flex xl:w-1/2 hidden">
      <div className="flex flex-col gap-10 !mt-20">
        <ImageCard
          src="/images/login/three.jpg"
          className="xl:block hidden w-64 h-64 object-cover"
        />
        <ImageCard
          src="/images/login/two.jpg"
          className="xl:block hidden w-64 h-80 object-cover xl:!ml-10"
        />
      </div>
      <div className="flex flex-col gap-10">
        <ImageCard
          src="/images/login/one.gif"
          className="lg:block hidden xl:w-64 xl:h-80 lg:w-full lg:h-[669px] object-cover"
        />
        <ImageCard
          src="/images/login/four.jpg"
          className="xl:block hidden w-64 h-64 object-cover xl:!ml-10"
        />
      </div>
    </div>
  );
};

export default WobbleImages;
