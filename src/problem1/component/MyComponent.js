import React from "react";

const MyComponent = (nestedObjects) => {
  console.log(nestedObjects);
  return (
    <>
      {Object.entries(nestedObjects).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <>
              <p>{`${key}: `}</p>
              <div style={{ paddingLeft: 50 }}>
                {/* <div>{`${value}`} </div> */}
                {<MyComponent nestedObjects={value} />}
              </div>
            </>
          );
        } else {
          return <p>{`${key}: ${value}`}</p>;
        }
      })}
      {/* <div> hello </div> */}
    </>
  );
};

export default MyComponent;
