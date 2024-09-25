import React from "react";
import profileImage from "../assets/images/betashort-icon.png";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function Profile() {
  return (
    <>
      <div className="myName">
        <h2 className="text-3xl font-bold text-center p-3">Who ...</h2>
        <div className="name-card flex justify-center items-center mt-4 ">
          <div className="name-box flex justify-center items-center border-4 border-slate-50 rounded-md lg:w-9/12 w-full  bg-slate-500">
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
      <div className="history">
        <h2 className="text-3xl font-bold text-center p-3">My History</h2>

        <div className="history-card flex justify-center items-center p-3">
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

      <div className="skill">
        <h2 className="text-3xl font-bold text-center p-3">My Skills</h2>
        <div className="skill-card">
          <div className="skill-programming">
            <h3 className="text-2xl text-center p-3">Programming</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Python
              </AccordionSummary>
              <AccordionDetails>データ解析で使用</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                TypeScript
              </AccordionSummary>
              <AccordionDetails>React Angularで使用</AccordionDetails>
            </Accordion>
          </div>
          <div className="skill-framework">
            <h3 className="text-2xl text-center p-3">FrameWork</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Angular
              </AccordionSummary>
              <AccordionDetails>データ解析で使用</AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
