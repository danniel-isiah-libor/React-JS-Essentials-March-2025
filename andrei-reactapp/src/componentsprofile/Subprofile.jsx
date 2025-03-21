import React from 'react'

function Subprofile() {
  const Experiences = [
    {
      CompanyName: 'Inventive Media',
      Years: '2002-2003'
    },
    {
      CompanyName: 'Inventive Media2',
      Years: '2002-2003'
    },
    {
      CompanyName: 'Inventive Media3',
      Years: '2002-2003'
    },

  ]
  return (
    <div className="mt-10">
      <p className="text-start italic text-sm">Work Experience</p>
      <div className="text-xs text-gray-400">
        <ul className='px-4'>
          {
            Experiences.map((experience) => {
              return (
                <li className='flex justify-between'>
                  <p>{experience.CompanyName}</p>
                  <p>{experience.Years}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Subprofile