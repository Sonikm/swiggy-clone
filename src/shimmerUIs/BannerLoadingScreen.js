function BannerLoadingScreen() {
  return (
    <div className="flex h-[300px] w-full sm:h-[250px]   flex-col items-center justify-center gap-6 bg-gray-900 ">
      <div className="loader"></div>
      <div className="text-[22px] text-center sm:text-sm tracking-wide text-white">
        Looking for great food near you{" "}
        <span className="tracking-widest">...</span>
      </div>
    </div>
  );
}

export default BannerLoadingScreen;
