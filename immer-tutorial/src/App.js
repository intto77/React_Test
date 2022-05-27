const App = () => {
  const object = {
    somewhere: {
      deep: {
        inside: 3,
        array: [1, 2, 3, 4],
      },
      bar: 2,
    },
    foo: 1,
  };
  console.log(object.somewhere.deep.array);
  // //somewhere .deep.insede 값을 4로 바꾸기
  // let nextObject = {
  //   ...object,
  //   somewhere: {
  //     ...object.somewhere,
  //     deep: {
  //       ...object.somewhere.deep,
  //       inside: 4,
  //     },
  //   },
  // };
  // console.log(nextObject.somewhere.deep.inside);

  //some here.deep.array에 5추가하기
  let nextObject = {
    ...object,
    somewhere: {
      ...object.somewhere,
      deep: {
        ...object.somewhere.deep,
        array: object.somewhere.deep.array.concat(5),
      },
    },
  };
  console.log(nextObject.somewhere.deep.array);
  return (
    <div>
      <div>immer를 사용하지 않고 불변성 유지</div>
    </div>
  );
};

export default App;
