import { ArticleType } from "./articles";

interface ArticleProps {
  article: ArticleType;
}

export default function Article(props: ArticleProps) {
  const { article } = props;

  return (
    <section
      id={article.title.toLowerCase()}
      className="scroll-mt-20 invisible"
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-3xl text-bold">{article.header}</h2>
        {article.photoPosition === "left" && (
          <div className="flex gap-10 flex-col md:flex-row md:gap-4">
            <div className="basis-1/2 shrink">
              <img
                src={article.photoUrl}
                alt={article.photoAlt}
                className="rounded-lg h-auto object-cover"
              />
            </div>
            <p className="basis-1/2">{article.description}</p>
          </div>
        )}
        {article.photoPosition === "right" && (
          <div className="flex gap-10 flex-col md:flex-row md:gap-4">
            <p className="basis-1/2">{article.description}</p>
            <div className="basis-1/2 shrink">
              <img
                src={article.photoUrl}
                alt={article.photoAlt}
                className="rounded-lg h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
