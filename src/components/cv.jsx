import Phone from '../assets/phone.svg'
import Location from '../assets/location.svg'
import Mail from '../assets/mail.svg'

function Image({ src }) {
  return <img src={src} alt='' className='inline mr-1 w-4 h-4' />
}

export default function Cv({ data, pdfTarget }) {
  function formatData() {
    const filter = (category) =>
      Object.keys(data).filter((key) => key.includes(category))

    return {
      education: filter('edu'),
      experience: filter('exp'),
    }
  }

  const groupedData = formatData()

  console.log('formattedData ', groupedData)

  return (
    <section
      ref={pdfTarget}
      className='mt-8 max-w-[1240px] max-h-[1754px] lg:m-0 shadow-md bg-white aspect-[1/1.41] text-cyan-950'
    >
      {data['general-0'] && (
        <div className='bg-cyan-700 text-white p-8 px-10'>
          <p className='font-bold text-6xl'>{data['general-0']['name']}</p>
          <div className='flex gap-8 mt-6'>
            <p>
              <Image src={Mail} /> {data['general-0']['email']}
            </p>
            <p>
              <Image src={Phone} />
              {data['general-0']['phone']}
            </p>

            <p>
              <Image src={Location} />
              {data['general-0']['address']}
            </p>
          </div>
        </div>
      )}

      {['education', 'experience'].map((category) => {
        if (groupedData[category].length < 1) return

        return (
          <div className='mx-5 mt-6' key={category}>
            <div className='bg-[#dbe9ed] text-center capitalize p-3 font-bold text-2xl py-2 text-cyan-900'>
              {category}
            </div>

            {groupedData[category].map((category) => {
              const info = data[category]

              return (
                <div
                  key={category}
                  className='grid text-[1.02rem] grid-cols-[10rem,1fr] gap-6 mt-4 px-2'
                >
                  <div>
                    <p>
                      {info['date_from']} {info['date_until'] && '-'}{' '}
                      {info['date_until']}
                    </p>
                    <p>{info['location']}</p>
                  </div>

                  <div>
                    <p className='font-bold text-xl'>
                      {info['position_title'] || info['title_of_study']}
                    </p>
                    <p>{info['school_name'] || info['company_name']}</p>
                    <p className='mt-2'>{info['description']}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </section>
  )
}
