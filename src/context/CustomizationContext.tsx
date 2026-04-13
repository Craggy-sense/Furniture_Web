"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Selection } from "@/types";

interface CustomizationContextType {
  selection: Selection;
  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
  resetSelection: () => void;
  productId: string | null;
  setProductId: (id: string | null) => void;
}

const defaultSelection: Selection = {
  woodType: "",
  size: "",
  legStyle: "",
  finish: "",
  notes: "",
};

const CustomizationContext = createContext<CustomizationContextType | undefined>(undefined);

export function CustomizationProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<Selection>(defaultSelection);
  const [productId, setProductId] = useState<string | null>(null);

  // Sync with local storage if needed, but for now just state
  const resetSelection = () => setSelection(defaultSelection);

  return (
    <CustomizationContext.Provider value={{ selection, setSelection, resetSelection, productId, setProductId }}>
      {children}
    </CustomizationContext.Provider>
  );
}

export function useCustomization() {
  const context = useContext(CustomizationContext);
  if (context === undefined) {
    throw new Error("useCustomization must be used within a CustomizationProvider");
  }
  return context;
}
