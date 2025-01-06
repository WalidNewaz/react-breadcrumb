import { Link, useMatches } from "react-router-dom";

import './breadcrumbs.css';

export default function Breadcrumbs() {
  const matches = useMatches();
  console.log("matches", matches);
  return (
    <nav aria-label="breadcrumb" id="breadcrumb">
      <ol>
        {matches.map((match, index) => {
          // console.log("match", match);
          return (
            <li key={index}>
              {index < matches.length - 1 ? (
                <Link to={match.pathname}>{match?.handle?.breadcrumb}</Link>
              ) : (
                <span>{match?.handle?.breadcrumb}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
