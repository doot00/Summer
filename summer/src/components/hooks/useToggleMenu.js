import { useState } from "react";

export default function useToggleMenu(initialState = false) {
  const [isMenuOpen, setIsMenuOpen] = useState(initialState);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return { isMenuOpen, toggleMenu };
}
