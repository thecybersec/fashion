import React from "react";
import Link from "next/link";

const TeamMember = () => {
  return (
    <>
      <div className="team-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>
              <span>People Behind SpicyWhips</span>
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-member">
                <img src="/images/team/team1.jpg" alt="team-image" />
                <h3>
                  Jason Smith <span>- Founder</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-member">
                <img src="/images/team/team2.jpg" alt="team-image" />
                <h3>
                  David Conway <span>- Designer</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-member">
                <img src="/images/team/team3.jpg" alt="team-image" />
                <h3>
                  Joe Root <span>- Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
