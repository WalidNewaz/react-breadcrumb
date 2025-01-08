import { Outlet } from "react-router";
import { Link, useMatches } from "react-router-dom";

const Home = () => {
  // const matches = useMatches();
  // const lastMatch = matches[matches.length - 1];

  // if (lastMatch.id === "home") {
  //   return (
  //     <div>
  //       <h1>Home</h1>
  //       {/* <Outlet /> */}
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Home</h1>
      {/* <Outlet /> */}
    </div>
  );

}

export default Home;