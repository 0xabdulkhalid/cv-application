export default function Button({
  tailwindClasses = '',
  onClickFunction,
  children,
}) {
  return (
    <>
      <button
        onClick={onClickFunction}
        className={`transition-transform ease-in active:scale-95 lg:hover:scale-[1.02] ${tailwindClasses}`}
      >
        {children}
      </button>
    </>
  )
}
