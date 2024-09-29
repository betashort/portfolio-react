import React, { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IProfileSkillDetail } from "../interface/ProfileSkillDetail";

function ProfileSkillCard( profileSkillDetails:IProfileSkillDetail[]) {
  return (
    <>
      {profileSkillDetails.map((profileSkillDetail: IProfileSkillDetail) => {
        return (
          <>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {profileSkillDetail.skill}
              </AccordionSummary>
              <AccordionDetails>データ解析で使用</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {profileSkillDetail.description}
              </AccordionSummary>
              <AccordionDetails>React Angularで使用</AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </>
  );
}

export default ProfileSkillCard;
