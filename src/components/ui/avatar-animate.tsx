const AvatarAnimate = () => {
  return (
    <div className="relative w-24 h-24">
      <img
        src="../src/assets/poto-profile.jpg"
        alt="Avatar"
        className="w-full h-full rounded-full transition-transform duration-300 transform hover:rotate-y-180"
      />
      <img
        src="../src/assets/logo-js.webp"
        alt="Avatar Hover"
        className="absolute top-0 left-0 w-full h-full rounded-full opacity-0 transition-opacity duration-300 transform hover:rotate-y-180 hover:opacity-100"
      />
    </div>
  );
};

export default AvatarAnimate;
