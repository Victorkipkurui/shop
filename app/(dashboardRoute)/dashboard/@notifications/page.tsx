import Card from '@/app/components/card'
import Link from 'next/link'
import React from 'react'

const notifications = () => {
  return (
    <>
      <Card>
        <div className='p-5'>notifications</div>
       <Link href="/dashboard/archived" className='hover:text-blue-700'>Archived</Link>
      </Card>
    </>
  )
}

export default notifications