import React from "react";
import profileImage from "../assets/images/betashort-icon.png";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

function Profile() {
  return (
    <>
      <h2 className="flex-none">My Name is ...</h2>
      <div className="myName flex justify-center items-center">
        <div className="name-card flex justify-center items-center mt-4 border-4 border-slate-50 rounded-md w-9/12 bg-slate-500">
          <div className="icon-image-space flex-initial m-3">
            <img
              src={profileImage}
              alt="profile-image"
              className="w-32 h-32 lg:w-64 lg:h-64 rounded-full "
            ></img>
          </div>
          <div className="name-space flex-initial m-3">
            <div className="Name">
              <p className="text-xl">βshort </p>
              <p className="text-xs">~Frontend Engineer~</p>
            </div>
            <div className="accounts">
              <a href="https://x.com/i_thinking_reed">
                <XIcon />
              </a>
              <a href="https://github.com/betashort">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="underline text-center">My History</h2>
      <div className="history-card flex justify-center items-center" >
        <div className="flex justify-center items-center mt-4 border-4 border-slate-900 border-dashed rounded-md w-9/12 bg-slate-500">
        <table>
          <tr>
            <td className="text-left">2021 ~ </td>
            <td>某社 </td>
            <td>フロントエンジニア</td>
          </tr>
          <tr>
            <td className="text-left">2019 ~ 2021</td>
            <td>某大学院 </td>
            <td>研究: fMRIのデータ解析手法</td>
          </tr>
          <tr>
            <td className="text-left">2015 ~ 2019</td>
            <td>某大学 </td>
            <td>専攻：情報通信工学</td>
          </tr>
          <tr></tr>
        </table>
        </div> 
      </div>
      <h2>My Skills</h2>
      <div className="skill"></div>
    </>
  );
}

export default Profile;
