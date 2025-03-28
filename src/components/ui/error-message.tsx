type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-red-900 text-sm">{message}</p>
    </div>
  );
};
export default ErrorMessage;
