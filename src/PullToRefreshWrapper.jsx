import React, { useState } from 'react';
import PullToRefresh from 'react-pull-to-refresh';

const PullToRefreshWrapper = ({ Component }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setRefreshKey(prevKey => prevKey + 1);
        resolve();
      }, 1000);
    });
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <Component key={refreshKey} />
    </PullToRefresh>
  );
};

export default PullToRefreshWrapper;