import { createContext, useContext, useState, ReactNode } from "react";

interface ContactDialogContextType {
  openDialog: () => void;
  closeDialog: () => void;
  isOpen: boolean;
}

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(undefined);

export const ContactDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <ContactDialogContext.Provider value={{ openDialog, closeDialog, isOpen }}>
      {children}
    </ContactDialogContext.Provider>
  );
};

export const useContactDialog = () => {
  const context = useContext(ContactDialogContext);
  if (!context) {
    throw new Error("useContactDialog must be used within ContactDialogProvider");
  }
  return context;
};

