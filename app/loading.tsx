export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-2 border-warm-300 border-t-charcoal rounded-full animate-spin" />
        <p className="mt-4 font-sans text-sm text-stone uppercase tracking-widest">Loading</p>
      </div>
    </div>
  )
}
