"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const onEsc = (e: any) => {
    console.log(e, "e");
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const modalBgClass =
    theme === "dark" ? "bg-indigo-500 text-white" : "bg-gray-400 text-black";

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div className="absolute inset-0 z-1 flex items-center justify-center bg-transparent bg-opacity-50">
      <div
        className={`p-6 rounded-md shadow-xl w-[90%] min-h-[30rem] max-w-md relative flex flex-col justify-center items-center transition-all ${modalBgClass}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:cursor-pointer"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.getElementById("modal-root")!);
};

export default Modal;
