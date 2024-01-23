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
import Card from "@mui/material/Card";

import ActiveSlider from "pages/carousels/ActiveSlider.jsx";
import Parallex from "pages/carousels/parallex/index.jsx";
import Index from "pages/carousels/sandbox1/index.jsx";

// SPIE ANDC components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// SPIE ANDC examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
//import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
//import Pages from "pages/Presentation/sections/Pages";
//import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
//import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.png";
import bgoverall from "assets/images/bgoverall.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "",
          label: "contact us",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="120vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              SPIE ANDC{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              The Student Chapter of Acharya Narendra Dev College, University of Delhi.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundImage: `url(${bgoverall})`,
          backgroundBlendMode: "luminosity",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
      </Card>
      <Information />
      <Card
        sx={{
          p: 8,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          backgroundImage: `url(${bgoverall})`,
          backgroundBlendMode: "luminosity",
          textAlign: "center",
        }}
      >
        <MKTypography variant="h2" fontWeight="bold">
          <u>About Us</u>
        </MKTypography>
        <br />
        <MKTypography variant="body1" color="text">
          SPIE Student Chapter is a program started by SPIE, the International Society for
          Photo-Optical Instrumentation Engineers with an aim to provide undergraduate students to
          work beyond the classroom, futuristic and hands-on experience on whatever field of
          interset they may have pertaining to light. The SPIE Student Chapter University of Delhi
          at Acharya Narendra Dev College was established on August 6, 2010. The purpose of our
          chapter is to promote optics and photonics among undergraduate students by providing
          valuable academic career development through conducting various events, workshops,
          competitions and activities.
          <br />
          <br />
          We are SPIE Student Chapter University of Delhi at Acharya Narendra Dev College. We
          collaborate with colleagues, perform outreach in the community, develop professional and
          leadership skills, form partnerships with industries, and reward student members with
          industry based experience and various grants.
        </MKTypography>
      </Card>
      <Container
        sx={{
          p: 20,
          mx: { xs: 6, lg: 3 },
          mt: -8,
          mb: 4,
        }}
      >
        <MKTypography variant="h2" fontWeight="bold" textAlign="center">
          <u>Our Prominent Events</u>
        </MKTypography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="gradient"
              color="info"
              icon="flag"
              title="Getting Started"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: "external",
                route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                label: "Let's start",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              color="info"
              icon="precision_manufacturing"
              title="Plugins"
              description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
              action={{
                type: "external",
                route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                label: "Read more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="gradient"
              color="info"
              icon="apps"
              title="Components"
              description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
              action={{
                type: "external",
                route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                label: "Read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Download />
      <MKBox pt={18} pb={6}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
              <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                Thank you for your support!
              </MKTypography>
              <MKTypography variant="body1" color="text">
                We deliver the best web products
              </MKTypography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              my={{ xs: 5, lg: "auto" }}
              mr={{ xs: 0, lg: "auto" }}
              sx={{ textAlign: { xs: "center", lg: "right" } }}
            >
              <MKSocialButton
                component="a"
                href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                target="_blank"
                color="twitter"
                sx={{ mr: 1 }}
              >
                <i className="fab fa-twitter" />
                &nbsp;Tweet
              </MKSocialButton>
              <MKSocialButton
                component="a"
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                target="_blank"
                color="facebook"
                sx={{ mr: 1 }}
              >
                <i className="fab fa-facebook" />
                &nbsp;Share
              </MKSocialButton>
              <MKSocialButton
                component="a"
                href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                target="_blank"
                color="pinterest"
              >
                <i className="fab fa-pinterest" />
                &nbsp;Pin it
              </MKSocialButton>
            </Grid>
          </Grid>
          <ActiveSlider />
        </Container>
      </MKBox>
      <Index />
      <Parallex />

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
