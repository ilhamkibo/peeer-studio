"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      style={{ y: reducedMotion ? 0 : 16 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ProjectImage({
  image,
  alt,
  label,
}: {
  image: StaticImageData;
  alt: string;
  label: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  function close() {
    dialog.current?.close();
    setOpen(false);
  }
  return (
    <>
      <button
        className="project-image"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${label.toLowerCase()} image`}
        aria-haspopup="dialog"
      >
        <Image src={image} alt={alt} sizes="(max-width: 700px) 92vw, 52vw" />
        <span className="image-action">
          View image <span aria-hidden="true">↗</span>
        </span>
      </button>
      <dialog
        ref={dialog}
        className="image-dialog"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        aria-label={label}
      >
        <div className="dialog-heading">
          <span>{label}</span>
          <button onClick={close} autoFocus aria-label="Close image">
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        {open && (
          <Image src={image} alt={alt} sizes="95vw" className="dialog-image" />
        )}
      </dialog>
    </>
  );
}
