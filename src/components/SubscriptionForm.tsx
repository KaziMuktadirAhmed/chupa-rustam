'use client'

import React from 'react'

const SubscriptionForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Subscription form submitted')
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email"
        className="bg-gray-800 text-white border border-gray-700 rounded-l px-4 py-2 focus:outline-none focus:ring-primary focus:border-primary"
        required
      />
      <button
        type="submit"
        className="bg-primary text-white rounded-r px-4 py-2 hover:bg-primary/90 transition-colors"
      >
        Subscribe
      </button>
    </form>
  )
}

export default SubscriptionForm
