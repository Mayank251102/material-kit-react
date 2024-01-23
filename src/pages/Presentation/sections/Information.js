/*
=========================================================
* SPIE ANDC - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// SPIE ANDC components
import MKBox from "components/MKBox";

// SPIE ANDC examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Know More
                    <br />
                    About SPIE
                  </>
                }
                description="Connecting minds to advance what's possible with light"
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="SPIE is the international society for optics and photonics. We bring engineers, scientists, students, and business professionals together to advance light-based science and technology."
                action={{
                  type: "external",
                  route: "https://spie.org/",
                  label: "SPIE U.S.A.",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Members"
                  description="Currently, there are 135+ members affiliated with the SPIE Student Chapter, University of Delhi at Acharya Narendra Dev College."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="18+ Ongoing Projects in various Fields"
                  description="Some chapter members are currently engaged in the Student Author and Researcher Program (SARP), which is overseen by Professor Amit Garg, the faculty advisor for SPIE ANDC."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Researh Publications by Chapter Members"
                  description="The SPIE Studnet Chapter, ANDC takes immense pride in celebrating the academic achievements of our meritorious students whose exceptional research papers were published in 2023."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="M.S. Admissions Abroad"
                  description="The SPIE Student Chapter, ANDC takes immense pride in announcing the remarkable achievements of its meritorious students who have secured admissions in prestigious international universities for their master's programs"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
