import { useState } from 'react'
import formSections from '../data/formSections'
import Button from './button'
import Trash from '../assets/trash.svg'

export default function SectionForm({
  section,
  sectionHandler,
  updateData,
  formData,
  sectionKey = 0,
  isGeneralForm = false,
}) {
  const [isSaved, setIsSaved] = useState(false)

  const defaultStyles =
    'rounded-md text-gray-600 w-full outline outline-2 outline-gray-200 py-1 px-2'

  function saveSection(e) {
    if (formData[`${section}-${sectionKey}`] === undefined)
      return e.preventDefault()

    const isAnyValueNull = formSections[section].some(
      (field) =>
        formData[`${section}-${sectionKey}`][field] === '' ||
        formData[`${section}-${sectionKey}`][field] === undefined,
    )

    if (isAnyValueNull) {
      e.preventDefault()
    } else {
      setIsSaved(true)
      sectionHandler()
    }
  }

  // Simple debounce function
  const debounce = (func, delay) => {
    let timeoutId
    return function (...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
  }

  // Debounce the updateInput function with a 5000ms (5 seconds) delay
  const debouncedUpdateInput = debounce((e) => {
    const data = {
      [e.target.id]: e.target.value,
    }

    updateData((prevData) => ({
      ...prevData,
      [`${section}-${sectionKey}`]: {
        ...prevData[`${section}-${sectionKey}`],
        ...data,
      },
    }))
  }, 700)

  function cancelSection(isAddNewActive = true) {
    sectionHandler(isAddNewActive, sectionKey)
    updateData(({ [`${section}-${sectionKey}`]: _, ...restData }) => restData)
  }

  function removeSelection() {
    cancelSection(false)
  }

  return !isSaved ? (
    <form className='rounded-xl bg-white shadow-md p-4 md:p-5 flex flex-col gap-4 rounded-t-none overflow-hidden'>
      {formSections[section].map((field) => (
        <div key={field}>
          <label htmlFor={field} className=''>
            {field.split('_').join(' ')}
          </label>
          <input
            className={`outline-2 outline-gray-300 bg-gray-100 block mt-1 ${defaultStyles}`}
            type='text'
            id={field}
            onChange={debouncedUpdateInput}
          />
        </div>
      ))}
      {!isGeneralForm && (
        <div className='flex flex-row-reverse gap-5 mt-2 font-bold'>
          <Button
            tailwindClasses={`bg-blue-100 outline-[#bbd8f9] ${defaultStyles}`}
            onClickFunction={saveSection}
          >
            Save
          </Button>

          <Button
            tailwindClasses={`bg-red-100 outline-red-200 ${defaultStyles}`}
            onClickFunction={cancelSection}
          >
            Cancel
          </Button>
        </div>
      )}
    </form>
  ) : (
    <div className='flex justify-between bg-white capitalize w-full border-2 mb-1 shadow-md p-3 px-4 pl-12 text-lg'>
      <p>{formData[`${section}-${sectionKey}`][formSections[section][0]]}</p>

      <Button onClickFunction={removeSelection}>
        <img src={Trash} alt='' />
      </Button>
    </div>
  )
}
