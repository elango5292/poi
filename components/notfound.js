export default function Component() {
    return (
      <div className="flex flex-col pt-7 min-h-screen space-y-4 bg-black">
        <ColumnsIcon className="w-12 h-12 text-gray-400" />
        <h2 className="text-xl font-semibold text-gray-600">No Post Found</h2>
        <p className="text-gray-500">We couldn't find any posts. Try a different search.</p>
      </div>
    )
  }
  
  function ColumnsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="12" x2="12" y1="3" y2="21" />
      </svg>
    )
  }
  