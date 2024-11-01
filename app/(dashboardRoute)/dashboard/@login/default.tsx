import Card from '@/app/components/card'
import Link from 'next/link'
import React from 'react'

const defaultlogin = () => {
  return (
    <>
      <Card>
        <Link href="/login" className='p-5'>Login to Continue</Link>
      </Card>
    </>
  )
}

export default defaultlogin