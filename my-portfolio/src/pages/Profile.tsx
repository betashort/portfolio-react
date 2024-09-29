import React from "react";
import profileImage from "../assets/images/betashort-icon.png";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProfileSkillCard from "../shared/component/ProfileSkillCard";
import { profileSkillProgrammingDetails } from "../shared/const/ProfieSkillDetial";


function Profile() {
  return (
    <>
    <div className="profile overflow-auto snap-y">
    
      <div className="myName snap-start h-[50svh]" >
      <h2 className="text-3xl font-bold text-center p-3">Who ...</h2>
        <div className="name-card flex justify-center items-center mt-4 ">
          <div className="name-box flex justify-center items-center border-4 border-slate-50 rounded-md lg:w-9/12 w-full h-[50svh]  bg-slate-500">
            <div className="icon-image-space m-3">
              <img
                src={profileImage}
                alt="profile-image"
                className="w-32 h-32 lg:w-64 lg:h-64 rounded-full "
              ></img>
            </div>
            <div className="name-space m-3">
              <div className="Name">
                <p className="text-3xl">βshort </p>
                <p className="text-xl">~Frontend Engineer~</p>
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
      </div>
      <div className="history snap-start h-[50svh] ">
        <h2 className="text-3xl font-bold text-center pt-32">My History</h2>
        <div className="history-card flex justify-center items-center p-3 pt-20">
          <div className="history-table">
            <table className="border-collapse table-auto">
              <tr>
                <td className="text-left p-1 border-b-2 border-b-slate-900">
                  2021 ~{" "}
                </td>
                <td className="text-left p-1 border-b-2 border-b-slate-900">
                  某社{" "}
                </td>
                <td className="text-left p-1 border-b-2 border-b-slate-900">
                  開発：フロントエンジニア
                </td>
              </tr>
              <tr className="mt-2">
                <td className="text-left p-1 border-b-2 border-b-slate-900">
                  2019 ~ 2021
                </td>
                <td className="text-left p-1 border-b-2 border-b-slate-900">
                  某大学院{" "}
                </td>
                <td className="text-left p-1 border-b-2 border-b-slate-900">
                  研究: fMRIのデータ解析手法
                </td>
              </tr>
              <tr className="mt-2">
                <td className="text-left p-1">2015 ~ 2019</td>
                <td className="text-left p-1">某大学 </td>
                <td className="text-left p-1">専攻：情報通信工学</td>
              </tr>
              <tr></tr>
            </table>
          </div>
        </div>
      </div>

      <div className="skill snap-start h-[50svh] ">
        <h2 className="text-3xl font-bold text-center p-3">My Skills</h2>
        <div className="skill-detail grid sm:grid-cols-1 md:grid-cols-3" >
          <div className="skill-programming">
            <h3 className="text-2xl text-center p-3">Programming</h3>
            <ProfileSkillCard profileSkillDetails={profileSkillProgrammingDetails}/>
          </div>
          <div className="skill-framework">
            <h3 className="text-2xl text-center p-3 md:w-6/12">FrameWork</h3>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Profile;
