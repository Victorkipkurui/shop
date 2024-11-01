import Card from '@/app/components/card'
import Link from 'next/link'
import React from 'react'

const Archivednotifications = () => {
  return (
    <>
      <Card>
        <div className='p-5'> Archived notifications</div>
       <Link href="/dashboard" className='hover:text-blue-700'>Default</Link>
      </Card>
    </>
  )
}

export default Archivednotifications