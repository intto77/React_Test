const RenderPropSample = ({ children }) => {
  //Props  함수형인 경우
  return <div>결과:{children(5)}</div>;
};

export default RenderPropSample;
