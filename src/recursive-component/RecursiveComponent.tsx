import React from "react";

type RecursiveType = {
  name: string;
  items: any[];
};

const RecursiveComponent = (recursiveItem: RecursiveType) => {
  const hasChildren = recursiveItem.items && recursiveItem.items.length;

  return (
    <>
      {recursiveItem.name}
      {hasChildren &&
        recursiveItem.items.map(
          (item: JSX.IntrinsicAttributes & { name: any; items: any }) => (
            <RecursiveComponent key={item.name} {...item} />
          )
        )}
    </>
  );
};

export default RecursiveComponent;
