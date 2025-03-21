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
              return (
                <div key={index}>
                  {Object.keys(item).map((key, ind) => {
                    return (
                      <ProfileFields key={ind} label={key} value={item[key]} />
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}
