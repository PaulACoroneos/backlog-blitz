import Modal from "./modal";

export default function ModalLogin(props) {
  return (
    <Modal
      buttonLabel="Login"
      buttonClassName="p-2 bg-blue-400 hover:bg-blue-300 active:bg-blue-300  rounded"
      title="Login"
    >
      Let&apos;s get started!
      TBD LOGIN PROVIDERS HERE
    </Modal>
  );
}
