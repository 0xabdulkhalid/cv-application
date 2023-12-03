import { useState } from 'react'
import Button from './button'
import Arrow from '../assets/arrow-down.svg'
import AddNewFormSection from './addNewFormSection'

export default function SectionAccordion({
  title,
  logo,
  updateData,
  formData,
  isWrapped = true,
}) {
  const [accordion, setAccordion] = useState(!isWrapped)
  function updateAccordion() {
    setAccordion(!accordion)
  }

  return (
    <div className='capitalize mb-3 lg:m-0 shadow-md rounded-xl'>
      <Button
        tailwindClasses={`flex bg-white capitalize w-full relative z-10 items-center relative rounded-xl p-4 pl-12 font-bold text-xl ${
          accordion && 'rounded-b-none shadow-sm mb-1'
        } `}
        onClickFunction={updateAccordion}
      >
        <img
          src={logo}
          className='absolute left-4 w-5 h-4'
          alt=''
          aria-hidden='true'
        />

        {title}

        <img
          src={Arrow}
          className={`absolute transition-transform ease duration-300 right-4 ${
            accordion && 'rotate-180'
          }`}
          aria-hidden='true'
          alt=''
        />
      </Button>

      <AddNewFormSection
        sectionName={title}
        updateData={updateData}
        formData={formData}
        isActive={accordion}
        isGeneralForm={!isWrapped}
      />
    </div>
  )
}
