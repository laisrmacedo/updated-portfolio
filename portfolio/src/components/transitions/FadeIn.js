import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './transitions.css';

const FadeIn = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <CSSTransition
      in={show}
      timeout={1000}
      classNames="fade"
      unmountOnExit
    >
      <>{children}</>
    </CSSTransition>
  );
};

export default FadeIn;