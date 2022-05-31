function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

const CallFunc = () => {
  console.log("작업 시작");
  increase(0, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        increase(result, (result) => {
          console.log(result);
          console.log("작업완료");
        });
      });
    });
  });

  return (
    <div>
      <h1>콜백 함수</h1>
      <p></p>
    </div>
  );
};

export default CallFunc;
