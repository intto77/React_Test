import { useState, useCallback } from "react";
import NewList from "./component/NewsList";
import Categories from "./component/Categories";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewList category={category} />
    </>
  );
};

export default App;
