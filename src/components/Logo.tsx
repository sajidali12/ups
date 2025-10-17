import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Universal Phoenix Services Logo"
        width={160}
        height={160}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;