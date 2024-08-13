import { BgAnimateButton } from "./BgAnimateButton"
const roundings = ["full", "xl", "2xl", "3xl", "sm"]
const gradients = [
  "sunrise",
  "ocean",
  "candy",
  "default",
  "forest",
  "sunset",
  "nebula",
]
const animations = ["spin", "pulse", "spin-slow", "spin-fast"]

export const BgAnimateDemo = () => {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex min-h-[500px] flex-col justify-center space-y-4 rounded-lg border border-dashed px-12 md:px-24">
        {/* Roundings Grid */}

        <div className="grid grid-cols-3 gap-4">
          {roundings.slice(0, 2).map((rounding, i) => (
            <BgAnimateButton
              // @ts-ignore
              gradient={gradients[i + 1]}
              key={rounding}
              // @ts-ignore
              rounded={rounding}
            >
              {rounding}
            </BgAnimateButton>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {roundings.slice(2, 5).map((rounding, i) => (
            <BgAnimateButton
              // @ts-ignore
              gradient={gradients[i + 1]}
              key={rounding}
              // @ts-ignore
              rounded={rounding}
            >
              {rounding}
            </BgAnimateButton>
          ))}
        </div>

        {/* animations Grid */}
        <div className="grid grid-cols-4 gap-4">
          {animations.map((animations, i) => (
            <BgAnimateButton
              key={animations}
              // @ts-ignore
              gradient={gradients[i + 2]}
              variant="ghost"
              // @ts-ignore
              animation={animations}
            >
              {animations}
            </BgAnimateButton>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BgAnimateDemo
