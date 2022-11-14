import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export type ModalProps = {
  buttonClassName?: string;
  buttonLabel: string;
};

export default function Modal({ buttonLabel, buttonClassName }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={buttonClassName}>{buttonLabel}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-600 fixed inset-0" />
        <Dialog.Content className="bg-white max-w-[450px] max-h-96 fixed top-1/2 left-1/2 p-4 rounded">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Hello World</Dialog.Description>
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
