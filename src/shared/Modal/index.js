export default function Modal({ open, children }) {
  return (
    open && (
      <section className="fixed top-0 left-0 bottom-0 h-full w-full overflow-hidden z-100 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-gray-100 my-auto mx-auto w-1/3 max-w-100 max-h-100 border border-gray-400 shadow-2xl rounded-md">
          {children}
        </div>
      </section>
    )
  );
}
