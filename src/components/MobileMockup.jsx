const MobileMockup = () => {
  return (
    <div
      className="relative mr-12 hidden h-[650px] w-96 bg-cover bg-center md:block"
      style={{
        backgroundImage:
          "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
      }}
    >
      <div className="absolute top-[30px] right-[20px] h-[550px] w-[250px] animate-slideshow bg-cover bg-center opacity-0"></div>
    </div>
  );
};

export default MobileMockup;
