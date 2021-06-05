import React from "react";

type RecursiveType = {
  name: string;
  items: any[];
};

function RecursiveComponent(recursiveItem: RecursiveType) {
  const hasChildren = recursiveItem.items && recursiveItem.items.length;

  return (
    <>
      {recursiveItem.name}
      {hasChildren &&
        recursiveItem.items.map((item: RecursiveType) => (
          <RecursiveComponent key={item.name} {...item} />
        ))}
    </>
  );
}

export default RecursiveComponent;
