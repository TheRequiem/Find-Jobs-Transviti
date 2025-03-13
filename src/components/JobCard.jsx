import LocationIcon from "../assets/icons/location.png";
import TimeIcon from "../assets/icons/time.png";
import BookMarkIcon from "../assets/icons/bookmark.png";

const JobCard = (props) => {
  const {
    isPromoted,
    jobTitle,
    app,
    appIcon,
    location,
    isRemote,
    time,
    numberOfApplicants,
  } = props;

  return (
    <div className="flex flex-col bg-white rounded-lg p-5 gap-1 w-48">
      {isPromoted ? (
        <strong className="text-2xs text-dark font-bold">Promoted</strong>
      ) : null}
      <div className="flex items-center gap-2">
        <img src={appIcon} alt="" />
        <div className="text-sm text-dark">
          <p>{jobTitle}</p>
          <p>{app}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-color-base text-xs">
        <img src={LocationIcon} alt="" />
        <p>{`${location} ${isRemote ? "(Remote)" : ""}`}</p>
      </div>
      <div className="flex items-center gap-2 text-xs text-color-base">
        <img src={TimeIcon} alt="" />
        <p>
          {`${time} ago | `}
          <a
            href="#applicants-list"
            className="text-primary underline"
          >{`${numberOfApplicants} applicants`}</a>
        </p>
      </div>
      <div className="flex items-center gap-2 text-white text-xs pt-2">
        <button className="bg-primary py-2 px-7 rounded-md">Apply Now</button>
        <img src={BookMarkIcon} alt="" />
      </div>
    </div>
  );
};

export default JobCard;
