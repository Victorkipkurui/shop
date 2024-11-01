import React from 'react'
import "../../globals.css"

const dashboardPage = ({ 
  expenses,
  notifications, 
  revenue,
}: {
  children: React.ReactNode,
  expenses: React.ReactNode
  notifications: React.ReactNode
  revenue: React.ReactNode
}) => {
  return (
 <html>
  <body>
    <div>{revenue}</div>
    <div>{notifications}</div>
    <div>{expenses}</div>
  </body>
 </html>
  )
}

export default dashboardPage