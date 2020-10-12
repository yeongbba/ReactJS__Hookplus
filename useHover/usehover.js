export const useHover = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("hover", onHover);
    }
    return () => {
      if (element.current) element.current.removeEventListner("hover", onHover);
    };
  }, []);
  return element;
};
