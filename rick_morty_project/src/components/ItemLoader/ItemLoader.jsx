import React, { createRef, Fragment, PureComponent } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

const LOADING = 1;
const LOADED = 2;
let itemStatusMap = {};

const isItemLoaded = (index) => !!itemStatusMap[index];

const loadMoreItems = (startIndex, stopIndex) => {
  for (let index = startIndex; index <= stopIndex; index++) {
    itemStatusMap[index] = LOADING;
  }
  return new Promise((resolve) =>
    setTimeout(() => {
      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = LOADED;
      }
      resolve();
    }, 2500)
  );
};

class Row extends PureComponent {
  render() {
    const { index, style } = this.props;
    
    let label;
    if (itemStatusMap[index] === LOADED) {
      label = `Row ${index}`;
    } else {
      label = "Loading...";
    }
    return (
      <div className="ListItem" style={style}>
        {label}
      </div>
    );
  }
}

export default function ItemLoader() {
  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={1000}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="List"
          height={1000}
          itemCount={1000}
          itemSize={30}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={300}
        >
          {Row}
        </List>
      )}
    </InfiniteLoader>
  );
}
