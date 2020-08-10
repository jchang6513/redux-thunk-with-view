import React, { useEffect, useState } from 'react';
import viewStates from './viewStates';

export const connectViewStates = <P extends object>(Comp: React.FunctionComponent<P>) => (props: P) => {
  const [,setState] = useState();
  const handleUpdate = () => setState({});

  useEffect(() => {
    const unsubscribe = viewStates.subscribe(handleUpdate);
    return unsubscribe;
  }, [])
  return <Comp {...props} viewStates={viewStates.getState()}/>;
}

