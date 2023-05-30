import { DetailsDivProps } from '@/types';
import { createPortal } from 'react-dom'
import { FC, useEffect, useState } from 'react';


export const Portal: FC<DetailsDivProps> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [])

  return createPortal(children, container)
};
