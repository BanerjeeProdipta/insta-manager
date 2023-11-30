"use client";
import useGetAll from "@/hooks/useGetList";
import React, { useState } from "react";

const Followers = () => {
  const username = "joyce_prodipta_banerjee";
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [dontFollowMeBack, setDontFollowMeBack] = useState([]);
  const [iDontFollowBack, setIDontFollowBack] = useState([]);

  const data = useGetAll();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 mb-8">
        <h1 className="text-3xl font-bold mb-4">Instagram Data</h1>
      </div>

      <div className="col-span-1">
        <div className="bg-white bg-opacity-50 rounded-md p-4 border border-gray-300">
          <h2 className="text-xl font-semibold mb-2">Followers</h2>
          <ul>
            {followers.map((follower: any, index) => (
              <li key={index} className="mb-2">
                {follower.username} - {follower.full_name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-span-1">
        <div className="bg-white bg-opacity-50 rounded-md p-4 border border-gray-300">
          <h2 className="text-xl font-semibold mb-2">Followings</h2>
          <ul>
            {followings.map((following: any, index) => (
              <li key={index} className="mb-2">
                {following.username} - {following.full_name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-span-2">
        <div className="bg-white bg-opacity-50 rounded-md p-4 border border-gray-300">
          <h2 className="text-xl font-semibold mb-2">
            Users who do not follow back
          </h2>
          <ul>
            {dontFollowMeBack.map((user: any, index) => (
              <li key={index} className="mb-2">
                {user.username} - {user.full_name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-span-2">
        <div className="bg-white bg-opacity-50 rounded-md p-4 border border-gray-300">
          <h2 className="text-xl font-semibold mb-2">
            Users you do not follow back
          </h2>
          <ul>
            {iDontFollowBack.map((user: any, index) => (
              <li key={index} className="mb-2">
                {user.username} - {user.full_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Followers;
