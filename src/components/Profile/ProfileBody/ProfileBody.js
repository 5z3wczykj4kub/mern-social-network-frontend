import { useState, useCallback } from 'react';

import Tabs from '../../Tabs/Tabs';
import Tab from '../../Tabs/Tab/Tab';

import classes from './ProfileBody.module.scss';

const ProfileBody = () => {
  const [tabWidths, setTabWidths] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const getTabWidth = useCallback(
    (tabWidth) => setTabWidths((prevTabWidths) => [...prevTabWidths, tabWidth]),
    []
  );
  const selectTab = () => setSelectedTabIndex;

  return (
    <div className={classes.profileBody}>
      <Tabs tabWidths={tabWidths}>
        <Tab label="Posts" getTabWidth={getTabWidth} />
        <Tab label="Friends" getTabWidth={getTabWidth} />
        <Tab label="Images" getTabWidth={getTabWidth} />
      </Tabs>
    </div>
  );
};

export default ProfileBody;
