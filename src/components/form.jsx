import SectionAccordion from './sectionAccordion'
import User from '../assets/user.svg'
import Graduation from '../assets/graduation.svg'
import Briefcase from '../assets/briefcase.svg'
import PdfSaver from './pdfSaver'

export default function Form({ formData, setFormData, savePdf }) {
  return (
    <div className='lg:w-[30rem] lg:flex lg:flex-col lg:gap-3'>
      <SectionAccordion
        title={'general'}
        logo={User}
        updateData={setFormData}
        formData={formData}
        isWrapped={false}
      />
      <SectionAccordion
        title={'education'}
        logo={Graduation}
        formData={formData}
        updateData={setFormData}
      />
      <SectionAccordion
        title={'experience'}
        logo={Briefcase}
        formData={formData}
        updateData={setFormData}
      />
      <PdfSaver makePdf={savePdf} />
    </div>
  )
}
