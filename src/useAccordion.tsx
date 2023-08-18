import { useEffect, useRef, useState } from 'react';

export function useAccordion() {
  const [open, setOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  const toggle = () => setOpen(open => !open);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current)
      setMaxHeight(open ? `${ref.current.scrollHeight}px` : "0px");
  }, [ref, open]);

  return [ref, maxHeight, toggle] as const;
}
