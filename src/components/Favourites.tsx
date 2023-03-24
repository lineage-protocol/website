import * as Chain from "../constants/Chain";

export default function Favourites() {
  return (
    <div className="absolute right-5 top-5">
      <img
        src={Chain.icon["Heart"]}
        alt="logo"
        className="w-full "
      />
    </div>
  );
}
