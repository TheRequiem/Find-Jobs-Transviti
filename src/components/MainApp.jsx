import DownIcon from "../assets/icons/icon-down.png";
import SearchIcon from "../assets/icons/search-white.png";
import JobCard from "./JobCard";
import TeamsIcon from "../assets/icons/teams.png";

const MainApp = () => {
  // Featured Jobs and Recommended Jobs Mockup Data. You can change values or add objects accordingly to populate.
  const featuredJobs = [
    {
      isPromoted: true,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
    {
      isPromoted: true,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
    {
      isPromoted: true,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
    {
      isPromoted: true,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
    {
      isPromoted: true,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
  ];
  const recommendedJobs = [
    {
      isPromoted: false,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
    {
      isPromoted: false,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
    {
      isPromoted: false,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
    {
      isPromoted: false,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
    {
      isPromoted: false,
      appIcon: TeamsIcon,
      jobTitle: "UI/UX Designer",
      app: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      time: "1 day",
      numberOfApplicants: 22,
    },
  ];

  return (
    <div className="flex flex-col px-12 py-3 lg:p-6 gap-3 w-[26rem] lg:w-full">
      {/* Intro Message */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-dark">
          Find your Dream Job, <span className="text-primary">Albert!</span>
        </h1>
        <p className="text-color-base text-sm">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
      </div>

      {/* Search Parameters */}
      <div className="flex flex-col lg:flex-row bg-white p-4 gap-2 items-center rounded-md max-w-4xl 2xl:max-w-5xl w-full">
        <input
          type="text"
          placeholder="Job Title, Company, or Keywords"
          className="w-full lg:w-40 xl:w-80 placeholder:text-sm placeholder:text-color-base placeholder:text-center lg:placeholder:text-start outline-none"
        />
        <hr className="w-[97%] lg:hidden text-separator" />
        <div className="hidden lg:block w-0.5 h-8 bg-separator"></div>
        <div className="flex justify-between items-center gap-6 py-1 lg:px-2">
          <p className="text-color-base text-sm">Select Location</p>
          <img src={DownIcon} alt="" />
        </div>
        <hr className="w-[97%] lg:hidden text-separator" />
        <div className="hidden lg:block w-0.5 h-8 bg-separator"></div>
        <div className="flex justify-between items-center gap-6 lg:px-2">
          <p className="text-color-base text-sm">Job Type</p>
          <img src={DownIcon} alt="" />
        </div>
        <button className="flex items-center gap-2 bg-primary text-white text-sm py-2 px-9 rounded-md">
          <img src={SearchIcon} alt="" />
          Search
        </button>
      </div>

      {/* Similar buttons */}
      <div className="flex flex-col lg:flex-row gap-2 items-center text-xs text-light">
        <p className="text-sm">Similar:</p>
        <div className="flex gap-2">
          <button className="rounded-md border-2 border-light py-1 px-3">
            Frontend
          </button>
          <button className="rounded-md border-2 border-light py-1 px-3">
            Backend
          </button>
          <button className="rounded-md border-2 border-light py-1 px-3">
            Graphic Designer
          </button>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="flex gap-3 items-center justify-center lg:justify-start text-center">
        <h1 className="text-lg text-dark">Featured Jobs</h1>
        <a href="#featured-jobs" className="text-sm text-primary underline">
          See Featured Jobs
        </a>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 max-w-2xl 2xl:max-w-full flex-wrap">
        {featuredJobs.map((job) => (
          <JobCard
            isPromoted={job.isPromoted}
            appIcon={job.appIcon}
            jobTitle={job.jobTitle}
            app={job.app}
            location={job.location}
            isRemote={job.isRemote}
            time={job.time}
            numberOfApplicants={job.numberOfApplicants}
          />
        ))}
      </div>
      <div className="py-5">
        <hr className="text-separator" />
      </div>

      {/* Recommended Jobs */}
      <div className="flex gap-3 items-center justify-center lg:justify-start text-center">
        <h1 className="lg:text-lg text-dark">Recommended Jobs</h1>
        <a href="#featured-jobs" className="text-sm text-primary underline">
          See Recommended Jobs
        </a>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 max-w-2xl 2xl:max-w-full flex-wrap">
        {recommendedJobs.map((job) => (
          <JobCard
            isPromoted={job.isPromoted}
            appIcon={job.appIcon}
            jobTitle={job.jobTitle}
            app={job.app}
            location={job.location}
            isRemote={job.isRemote}
            time={job.time}
            numberOfApplicants={job.numberOfApplicants}
          />
        ))}
      </div>
    </div>
  );
};

export default MainApp;
