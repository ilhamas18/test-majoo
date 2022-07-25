import React from "react"

export const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="min-h-screen lg:mx-10 md:mx-6 mx-2">
        {children}
      </div>
    </div>
  )
}