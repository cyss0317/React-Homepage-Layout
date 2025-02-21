import Article from "./Article";
import { articles } from "./articles";
import ObserveAppear from "./ObserveSlideIn";

export default function Body() {
  const articleNames = Object.keys(articles);

  return (
    <div className="flex flex-col gap-8 p-6 md:p-8 slide-in-from-right text-lg relative z-negative">
      <ObserveAppear>
        {articleNames.map((articleName: string) => {
          const articleInfo = articles[articleName];
          return <Article article={articleInfo} key={articleInfo.header} />;
        })}
      </ObserveAppear>
    </div>
  );
}
