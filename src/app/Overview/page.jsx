"use client"
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
function Overview() {
  return (
    <div className="fixed inset-0 bg-transparent z-50 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold">This is a modal!</h2>
        <p>Click outside or press the button to close.</p>
        <Link href={"/"} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Close
        </Link>
      </div>
    </div>
  )
}

export default Overview