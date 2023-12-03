import { useState } from 'react'
import Button from './button'
import SectionForm from './sectionForm'
import Plus from '../assets/plus.svg'

export default function AddNewFormSection({
  sectionName,
  updateData,
  formData,
  isActive,
  isGeneralForm = false,
}) {
  const [addNew, setAddNew] = useState({
    isActive: false,
    count: [],
  })

  function toggleAddNew() {
    setAddNew((prevAddNew) => ({
      isActive: !prevAddNew.isActive,
      count: [...prevAddNew.count, prevAddNew.count.length + 1],
    }))
  }

  function handleSections(toggleIsActive = true, index = -1) {
    setAddNew((prevAddNew) => ({
      isActive: toggleIsActive ? !prevAddNew.isActive : prevAddNew.isActive,
      count:
        index >= 0
          ? prevAddNew.count.filter((i) => i !== index)
          : prevAddNew.count,
    }))
  }

  if (isGeneralForm) {
    return (
      <div className={`${!isActive && 'hidden'}`}>
        <SectionForm
          section={sectionName}
          updateData={updateData}
          isGeneralForm={true}
        />
      </div>
    )
  }

  return (
    <div className={`${!isActive && 'hidden'}`}>
      {addNew.count.map((i) => (
        <SectionForm
          key={i}
          sectionKey={i}
          section={sectionName}
          updateData={updateData}
          formData={formData}
          sectionHandler={handleSections}
        />
      ))}

      {!addNew.isActive && (
        <Button
          tailwindClasses='capitalize bg-white w-full rounded-xl shadow-md p-3 text-base rounded-t-none hover:rounded-xl'
          onClickFunction={toggleAddNew}
        >
          Add New <img src={Plus} className='inline ml-1' alt='' />
        </Button>
      )}
    </div>
  )
}
