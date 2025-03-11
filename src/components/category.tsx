import { IPaper } from "@/interfaces/IPaper";

function PaperBlock({id, author, imageAlt,imageSrc, href, name}: IPaper) {
  return (
    <>
      <div className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img
            alt={imageAlt}
            src={imageSrc}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <a href={`${href}?id=${id}`}>
            <span className="absolute inset-0" />
            {author}
          </a>
        </h3>
        <p className="text-base font-semibold text-gray-900 mb-6">{name}</p>
      </div>
    </>
  );
}

export default PaperBlock;
