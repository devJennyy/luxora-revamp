interface Props {
  subtitle: string;
  title: string;
}

const SectionHeading = ({ subtitle, title }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-base capitalize font-medium">
        <span className="mr-1 text-muted font-normal">{subtitle}</span> {title}
      </p>
      <div className="flex items-center w-full h-[2px] bg-muted/10 rounded-full">
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
