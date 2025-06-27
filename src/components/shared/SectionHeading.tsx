interface Props {
  subtitle: string;
  title: string;
}

const SectionHeading = ({ subtitle, title }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="sm:text-base text-[12px] capitalize font-medium">
        <span className="mr-1 text-muted font-normal">{subtitle}</span> {title}
      </p>
      <div className="flex items-center w-full h-[2px] bg-muted/10 rounded-full">
        <div className="sm:w-20 w-16 sm:h-1 h-[3px] bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
