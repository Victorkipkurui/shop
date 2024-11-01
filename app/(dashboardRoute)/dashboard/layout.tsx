export const metadata = {
  title: 'Dashboard',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children, 
  expenses,
  notifications, 
  revenue,
}: {
  children: React.ReactNode,
  expenses: React.ReactNode
  notifications: React.ReactNode
  revenue: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
        <div>{expenses}</div>
        <div>{notifications}</div>
        <div>{revenue}</div>
      </body>
    </html>
  )
}