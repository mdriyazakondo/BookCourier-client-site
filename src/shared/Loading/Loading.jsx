const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-purple-600 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
