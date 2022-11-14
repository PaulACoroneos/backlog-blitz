import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";
import cx from "classnames";

export type ModalProps = {
  buttonClassName?: string;
  buttonLabel: string;
  children?: React.ReactNode;
  title?: string;
  titleClassName?: string;
};

export default function Modal({
  buttonLabel,
  buttonClassName,
  children,
  title,
  titleClassName,
}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={buttonClassName}>{buttonLabel}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-600 fixed inset-0 opacity-90 overflow-auto" />
        <Dialog.Content className="bg-white fixed p-4 rounded w-[50vw] top-[50%] left-[50%]">
          <Dialog.Title
            className={cx("text-center text-xl pb-2 border-b-2 mb-2", {
              titleClassName: !!titleClassName,
            })}
          >
            {title}
            <Dialog.Close asChild>
              <button className="absolute right-0 pr-4 pt-2" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description>{children}</Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
