import Button from './button'

export default function PdfSaver({ makePdf }) {
  return (
    <Button
      onClickFunction={makePdf}
      tailwindClasses='bg-cyan-700 lg:w-52 lg:mt-6 mx-auto px-4 py-3 my-3 rounded-md shadow-xl shadow-gray-400 text-lg font-bold text-white'
    >
      Save as PDF
    </Button>
  )
}
