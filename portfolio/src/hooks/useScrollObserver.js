import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function useScrollObserver(targetRef) {
  const { visibleId, setVisibleId } = useContext(GlobalContext)
  const [isScrollStoped, setIsScrollStoped] = useState(true)
  
  useEffect(() => {
    const navContainer = document.querySelector('#navContainer')
    if(navContainer.addEventListener("scroll", (event) => event.isTrusted)){
      setIsScrollStoped(false)
    }
  },[isScrollStoped])


  
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && isScrollStoped) {
          setVisibleId(targetRef.current.id)
        }
      })
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
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
  }, []);

  return visibleId;
}
