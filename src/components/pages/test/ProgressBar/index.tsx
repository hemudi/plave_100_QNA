interface ProgressBarProps {
  percentage?: number;
}

const MIN_PERCENTAGE = 0;
const MAX_PERCENTAGE = 100;

const getCurrentPercentage = (percentage: number) =>
  Math.max(Math.min(percentage, MAX_PERCENTAGE), MIN_PERCENTAGE);

const ProgressBar = ({ percentage = 0 }: ProgressBarProps) => {
  return (
    <div className="h-2  w-full overflow-hidden rounded border-2 border-solid border-black bg-slate-300">
      <div
        className={`h-full bg-blue-600 text-left`}
        style={{
          width: `${getCurrentPercentage(percentage)}%`,
        }}
      >
        <span></span>
      </div>
    </div>
  );
};

export default ProgressBar;
