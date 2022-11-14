import Modal from "./modal";

export default function ModalSignUp(props) {
  return (
    <Modal
      buttonLabel="Signup"
      buttonClassName="p-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-500 rounded"
      title="Sign Up"
    >
      Let&apos;s get started! 
      {' '}
      TBD LOGIN PROVIDERS HERE
    </Modal>
  );
}
