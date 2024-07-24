import React, { useState, useEffect } from 'react';
import Loader from './loader';

const withLoader = (WrappedComponent: React.ComponentType) => {
  const HOC = (props: any) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        {loading ? <Loader /> : <WrappedComponent {...props} />}
      </>
    );
  };

  return HOC;
};

export default withLoader;
