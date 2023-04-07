import { ChangeEvent } from 'react'

export default function Fader({
  onChange,
  min,
  max,
  step,
  value,
  label
}: {
  onChange: (value: string) => void
  min: number
  max: number
  step: number
  value: string
  label: string
}) {
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }
  return (
    <div>
      <label className="text-white">{label}</label>
      <input
        type="range"
        className="overflow-hidden appearance-none bg-neutral-900 h-6 w-full border-white border-2 cursor-pointer"
        min={min}
        max={max}
        step={step}
        onChange={_onChange}
        value={value}
      />
    </div>
  )
}