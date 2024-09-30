import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IProfileSkillDetail } from "../interface/ProfileSkillDetail";

function ProfileSkillCard( props: {profileSkillDetails:IProfileSkillDetail[]}) {
  const {profileSkillDetails} = props;
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
              <AccordionDetails>{profileSkillDetail.description}</AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </>
  );
}

export default ProfileSkillCard;
