import { useCallback, useRef, useState } from 'react';
import Tab from './Tab/Tab';
import classes from './Tabs.module.scss';

const Tabs = ({ labels, children }) => {
  const tabsRef = useRef();

  const activeTabIndex = labels.findIndex(
    (label) => label.to === document.location.pathname
  );

  const [tabWidths, setTabWidths] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(activeTabIndex);

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
        {labels.map(({ label, to }, index) => (
          <Tab
            key={label + index}
            label={label}
            to={to}
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
      {children}
    </>
  );
};

export default Tabs;
