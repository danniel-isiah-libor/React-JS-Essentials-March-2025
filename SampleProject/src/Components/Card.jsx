import React from "react";
import ProfileFields from "./ProfileFields";

export default function Card({ data, label, type }) {
  return (
    <div className={`flex flex-col space-y-2 `}>
      <label className="text-xl font-medium">{label ?? "Label"}</label>
      <div>
      <ul className="list-disc">
        <li className="flex flex-col space-y-2 pl-5">
          {data.map((item, index) => {
            return <>
            {Object.keys(item).map(key => {
              return(
                  <ProfileFields label={key} value={item[key]} />
              )
            })
              
            }
            </>;
          })}
        </li>
      </ul>
      </div>
    </div>
  );
}
