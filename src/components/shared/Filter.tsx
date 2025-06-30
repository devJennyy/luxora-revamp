interface PriceRange {
  label: string;
  min: number;
  max: number;
}
interface Props {
  sizes: string[];
  colors: string[];
  prices: PriceRange[];
  collections: string[];
  tags: string[];
}

const Filter = ({ sizes, colors, prices, collections, tags }: Props) => {
  return (
    <div className="w-full xl:max-w-52 max-w-48 h-full">
      <p className="text-lg font-semibold">Filters</p>

      <div className="flex flex-col text-start gap-10 !mt-5">
        {/* Size */}
        <div className="flex flex-col gap-4">
          <p className="text-base font-medium">Size</p>
          <div className="flex xl:gap-3 gap-2 text-sm">
            {sizes?.map((size, index) => (
              <button
                key={index}
                className="flex justify-center items-center border w-11 h-11 cursor-pointer rounded-md hover:bg-primary hover:text-white active:bg-primary transition-default"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="flex flex-col gap-4">
          <p className="text-base font-medium">Colors</p>
          <div className="grid grid-cols-6 gap-2">
            {colors?.map((color, index) => (
              <button
                key={index}
                className={`xl:w-7 xl:h-7 w-6 h-6 rounded-full cursor-pointer border ${color} 
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Prices */}
        <div className="flex flex-col gap-4">
          <p className="text-base font-medium">Prices</p>
          <div className="flex flex-col items-start gap-3 text-secondary text-sm">
            {prices?.map((price, index) => (
              <button
                key={index}
                className="hover:text-primary cursor-pointer "
              >
                {price.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div className="flex flex-col gap-4">
          <p className="text-base font-medium">Collections</p>
          <div className="flex flex-col items-start gap-3 text-secondary text-sm">
            {collections?.map((collection, index) => (
              <button key={index} className="hover:text-primary cursor-pointer">
                {collection}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-4">
          <p className="text-base font-medium">Tags</p>
          <div className="flex items-start flex-wrap gap-3 text-secondary text-sm">
            {tags?.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
