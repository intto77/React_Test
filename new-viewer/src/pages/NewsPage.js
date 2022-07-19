import { useParams } from "react-router-dom";
import Categories from "../component/Categories";
import NewList from "../component/NewsList";

const NewsPage = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용.
  const category = params.category || "all";

  return (
    <>
      <Categories />
      <NewList category={category} />
    </>
  );
};

export default NewsPage;
