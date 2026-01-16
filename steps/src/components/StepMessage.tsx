type StepMessageProps = {
  step: number;
  children: React.ReactNode;
};

function StepMessage({ step, children }: StepMessageProps) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

export default StepMessage;
