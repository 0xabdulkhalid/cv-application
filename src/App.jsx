import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import Form from './components/form'
import Cv from './components/cv'
import sampleData from './data/sampleData'

function App() {
  const [cvData, setCvData] = useState(sampleData)
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className='min-h-screen text-cyan-950 bg-gray-200 p-2 lg:flex lg:gap-4 lg:p-4'>
      <Form formData={cvData} setFormData={setCvData} savePdf={handlePrint} />
      <Cv data={cvData} pdfTarget={componentRef} />
    </div>
  )
}

export default App
