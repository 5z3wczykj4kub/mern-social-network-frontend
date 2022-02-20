import { useCallback, useRef, useState } from 'react';
import Tab from './Tab/Tab';
import classes from './Tabs.module.scss';

const Tabs = ({ labels, disabled, children }) => {
  const tabsRef = useRef();

  const [tabWidths, setTabWidths] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(disabled ? 2 : 0);

  const getTabWidth = useCallback(
    (tabWidth) => setTabWidths((prevTabWidths) => [...prevTabWidths, tabWidth]),
    []
  );

  const translateX =
    tabWidths.reduce((p, q, i) => {
      const r = i < selectedTabIndex ? p + q : p + 0;
      return r;
    }, 0) + 1; // `+ 1` add border width (1px);

  return (
    <>
      <div ref={tabsRef} className={classes.tabs}>
        {labels.map(({ label, disabled }, index) => (
          <Tab
            key={label + index}
            label={label}
            disabled={disabled}
            index={index}
            getTabWidth={getTabWidth}
            setSelectedTabIndex={setSelectedTabIndex}
          />
        ))}
      </div>
      <div className={classes.line}>
        <div
          className={classes.lineHighlight}
          style={{
            width: selectedTabIndex !== -1 ? tabWidths[selectedTabIndex] : 0,
            transform: `translateX(${translateX}px)`,
          }}
        ></div>
      </div>
      {children(selectedTabIndex, setSelectedTabIndex)}
    </>
  );
};

export default Tabs;
