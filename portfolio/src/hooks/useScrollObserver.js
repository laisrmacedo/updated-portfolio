import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function useScrollObserver(targetRef) {
  const { visibleId, setVisibleId } = useContext(GlobalContext);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleId(entry.target.id);
          console.log(targetRef.current)
        }
      });
    };

    const options = {
      root: null, // Observe the viewport
      rootMargin: '0px',
      threshold: 0.4 // 60% of the element must be visible
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [setVisibleId, targetRef]);

  return visibleId;
}

