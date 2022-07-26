export interface StepItemProps {
  icon: "step1" | "step2" | "step3";
  title: string;
  descLine1: string;
  descLine2: string;
}

export default function StepItem(props: StepItemProps) {
  const { icon, title, descLine1, descLine2 } = props;

  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          src={`/icon/${icon}.svg`}
          width={80}
          height={80}
          alt="icon step"
          className="mb-30"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {descLine1}
          <br />
          {descLine2}
        </p>
      </div>
    </div>
  );
}
