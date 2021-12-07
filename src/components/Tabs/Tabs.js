import { useRef, useState, useCallback } from 'react';

import Tab from './Tab/Tab';

import classes from './Tabs.module.scss';

const Tabs = (props) => {
  const tabsRef = useRef();

  const [tabWidths, setTabWidths] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const getTabWidth = useCallback(
    (tabWidth) => setTabWidths((prevTabWidths) => [...prevTabWidths, tabWidth]),
    []
  );

  const onTabSelectHandler = (index) => setSelectedTabIndex(index);

  const translateX = tabWidths.reduce((p, q, i) => {
    const r = i < selectedTabIndex ? p + q : p + 0;
    return r;
  }, 0);

  return (
    <>
      <div ref={tabsRef} className={classes.tabs}>
        {props.labels.map((label, index) => (
          <Tab
            key={label + index}
            label={label}
            index={index}
            getTabWidth={getTabWidth}
            onTabSelect={onTabSelectHandler}
          />
        ))}
      </div>
      <div className={classes.line}>
        <div
          className={classes.lineHighlight}
          style={{
            width: tabWidths[selectedTabIndex],
            transform: `translateX(${translateX}px)`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Tabs;
