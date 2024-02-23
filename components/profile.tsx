import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex items-center group cursor-pointer gap-4 ">
      <div className="border-2 inline-block rounded-full p-1.5 group-hover:border-muted-foreground/30 transition-colors">
        <Image
          src="/profile.png"
          width={56}
          height={56}
          alt="profile"
          className="w-14 h-14 rounded-full"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg">Syed Sharukh Hussainy</h3>
        <p className="text-muted-foreground">Front-end Developer</p>
      </div>
    </div>
  );
};

export default Profile;
