import "./App.css";
import Article from "./Article";
import { articles } from "./articles";
import Footer from "./Footer";
import Header from "./Header";
import ObserveAppear from "./ObserveSlideIn";

function App() {
  const articleNames = Object.keys(articles);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-8 p-6 md:p-8 slide-in-from-right text-lg relative z-negative">
        <ObserveAppear>
          {articleNames.map((articleName: string) => {
            const articleInfo = articles[articleName];
            return <Article article={articleInfo} key={articleInfo.header} />;
          })}
        </ObserveAppear>
      </div>
      <Footer />
    </>
  );
}

export default App;
