const ErrorAlert = () => {
  return (
    <div
      className="px-4 py-3 text-center bg-white border rounded text-error border-error"
      role="alert"
    >
      <strong className="font-bold">Loding.........!&nbsp;</strong>
      <span className="block sm:inline">
        Looking for response.&nbsp;
      </span>
      <span className="block sm:inline">Trying to reconnect the server...</span>
    </div>
  );
};

export default ErrorAlert;
