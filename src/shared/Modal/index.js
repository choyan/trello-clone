export default function Modal({ open, children }) {
  return (
    open && (
      <section className="fixed top-0 left-0 bottom-0 h-full w-full overflow-hidden z-100 bg-white bg-opacity-10">
        <div className="bg-gray-100 my-16 mx-auto w-1/3 h-96 max-w-100 max-h-100 border border-gray-400 px-6 py-8 shadow-2xl rounded-md">
          {children}
        </div>
      </section>
    )
  );
}
