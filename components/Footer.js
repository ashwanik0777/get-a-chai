import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='bg-gray-900 text-white items-center flex flex-col justify-center py-4'>
        <p className="text-center mb-1">
          Developed By -
          <Link href="https://ashwanik0777.github.io/portfolio/">Ashwani Kushwaha</Link>
        </p>
        <p className='text-center'>copyright &copy; {currentYear} Get me a chai - All rights reserved!</p>
      </footer>

    </>
  )
}

export default Footer
