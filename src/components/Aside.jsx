import ProfileBanner from "../assets/images/profile-banner.jpg";
import ProfileImage from "../assets/images/profile.png";
import DownIcon from "../assets/icons/icon-down.png";

const Aside = () => {
  return (
    <aside className="flex flex-col items-center pt-6 gap-3">
      {/* Profile Information */}
      <div className="flex flex-col">
        <div className="flex flex-col relative rounded-lg items-center w-80 lg:w-96 bg-white pb-6">
          <img
            src={ProfileBanner}
            alt="Profile Banner"
            className="h-28 w-full object-cover rounded-t-lg"
          />
          <img
            src={ProfileImage}
            alt="Profile Image"
            className="rounded-full absolute top-28 size-20 lg:size-24 -translate-y-1/2 border-2 border-white"
          />
          <div className="flex flex-col items-center text-center pt-16">
            <h1 className="text-lg font-bold text-dark">Albert Flores</h1>
            <p className="text-sm text-dark">
              Senior Product Designer | UI/UX Designer | Web Developer
            </p>
            <p className="text-xs text-color-base">Clinton, Maryland</p>
          </div>
        </div>
      </div>
      {/* Profile Metrics */}
      <div className="flex flex-col bg-white w-80 lg:w-96 p-4 rounded-lg">
        <div className="flex items-center justify-between w-full pb-2">
          <p className="text-sm text-dark">Profile Visitors</p>
          <p className="text-primary">140</p>
        </div>
        <hr className="w-[98%] flex self-center text-separator" />
        <div className="flex items-center justify-between w-full py-2">
          <p className="text-sm text-dark">Resume Viewers</p>
          <p className="text-primary">20</p>
        </div>
        <hr className="w-[98%] flex self-center text-separator" />
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-dark">My Jobs</p>
          <p className="text-primary">80</p>
        </div>
      </div>
      {/* Calander */}
      <div className="flex items-center justify-between bg-white w-80 lg:w-96 py-2 px-4 rounded-lg">
        <div>
          <h1 className="text-dark">My Calander</h1>
          <p className="text-light text-sm">Upcoming Interviews</p>
        </div>
        <img src={DownIcon} alt="" />
      </div>
    </aside>
  );
};

export default Aside;
