"use client";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center" aria-label="loading">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  )
}

export default Loading;