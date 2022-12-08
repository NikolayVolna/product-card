import React from "react";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <div>
      <div
        className="fixed top-0 left-0 bottom-0 w-full bg-black/50"
        onClick={onClose}></div>
      <div className="absolute top-32 left-1/2 w-[500px] -translate-x-1/2 rounded bg-white p-5 text-black">
        <h1 className="mb-2 text-center text-2xl">{title}</h1>
        {children}
      </div>
    </div>
  );
}
