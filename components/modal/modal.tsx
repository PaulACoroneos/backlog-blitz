import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";

export type ModalProps = {
  buttonClassName?: string;
  buttonLabel: string;
  children?: React.ReactNode;
  title?: string;
  titleClassName?:string;
};

export default function Modal({
  buttonLabel,
  buttonClassName,
  children,
  title,
  titleClassName
}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={buttonClassName}>{buttonLabel}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-600 fixed inset-0 opacity-90" />
        <Dialog.Content className="bg-white max-h-96 fixed top-1/4 left-1/4 p-4 rounded max-w-[450px] w-[90vw] translate-y-1/2 translate-x-1/2">
          <Dialog.Title className={titleClassName}>{title}</Dialog.Title>
          <Dialog.Description>{children}</Dialog.Description>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
