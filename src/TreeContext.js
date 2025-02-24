// TreeContext.js
import React, { createContext, useState } from 'react';

export const TreeContext = createContext();

export const TreeProvider = ({ children }) => {
  const [expandedNodes, setExpandedNodes] = useState({});

  const toggleNode = (nodeId) => {
    setExpandedNodes(prevState => ({
      ...prevState,
      [nodeId]: !prevState[nodeId]
    }));
  };

  return (
    <TreeContext.Provider value={{ expandedNodes, toggleNode }}>
      {children}
    </TreeContext.Provider>
  );
};