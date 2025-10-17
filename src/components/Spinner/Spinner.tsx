export function Spinner() {
  return (
    <div className='flex items-center justify-center' data-testid='spinner'>
      <div className='animate-spin h-6 w-6 border-2 border-transparent border-t-[var(--primary)] rounded-full'></div>
    </div>
  )
}
