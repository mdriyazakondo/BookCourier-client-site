const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-green-600 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
