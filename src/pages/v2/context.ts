import { createContext, useContext } from 'react';

interface V2ContextType {
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
}

export const V2Context = createContext<V2ContextType | undefined>(undefined);

export const useV2Context = () => {
  const context = useContext(V2Context);
  if (!context) {
    throw new Error('useV2Context must be used within a V2Provider');
  }
  return context;
};
