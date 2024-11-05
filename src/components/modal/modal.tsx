import { useModalStore } from "../../stores/ModalStore";

export default function Modal({ children }: { children: React.ReactNode }) {
  const isOpen = useModalStore((state) => state.isOpen);
  const setModal = useModalStore((state) => state.setModal);
  return (
    <>
      {isOpen ? (
        <article
          className="bg-black/90 fixed top-0 bottom-0 left-0 right-0"
          onClick={() => setModal(!isOpen)}
        >
          <div className="absolute top-1/2 left-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-8 max-w-[60vw] overflow-auto bg-slate-100">
            {children}
          </div>
        </article>
      ) : null}
    </>
  );
}
