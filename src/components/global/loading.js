import React from "react"
import Image from "next/image"

export function Loading() {
  return (
    <div className="flex items-center justify-center mt-[15rem]">
      <Image src="/loading.gif" width={40} height={40} alt="Loading" />
    </div>
  )
}