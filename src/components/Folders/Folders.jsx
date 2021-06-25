import React from "react";
import { Link } from 'react-router-dom';

export default function Folders(props) {
  
        return (
          <ul className="folders">
            <li>
              <Link
                to={`/folder/${props.id}`}
              >
                {props.name}
              </Link>
            </li>
          </ul>
        );
}
