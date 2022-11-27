import React, { useEffect, useRef, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import Header from "./components/header";
import Background from "../../imgs/webp/screen1/first_screen_reverse.webp";
import MonkeyVideoWebM from "../../videos/monkey.webm";
import MonkeyVideoMp4 from "../../videos/monkey.mp4";
import Login from "../../imgs/new/login.svg";
import Document from "../../imgs/new/document.svg";
import CloseBtn from "../../imgs/new/close-btn.svg";
import ArrowDown from "../../imgs/new/arrow-down.svg";

const First = () => {
  const refVideo = useRef(null);
  const [muted, setMuted] = useState(false);
  const [isBanner, setIsBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuDropdown, setActiveMenuDropdown] = useState(0);

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }
    if (!muted) {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;
      refVideo.current.play();
      setMuted(true);
    }
  });

  const handleClose = (e) => {
    e.preventDefault();
    setIsBanner(false);
  };

  const handleMobileMenu = (e) => {
    e.preventDefault();
    const html = document.documentElement;
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("root").classList.toggle("mobileMenu");
    html.style.overflow === "hidden"
      ? (html.style.overflow = "auto")
      : (html.style.overflow = "hidden");
  };

  const buttons = [
    {
      title: "Gameplay",
      links: [
        {
          title: "Backstory",
          link: "#",
        },
        {
          title: "ChainVerse",
          link: "#",
        },
        {
          title: "Characters",
          link: "#",
        },
        {
          title: "Activities",
          link: "#",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          title: "Discord",
          link: "#",
        },
        {
          title: "Twitter",
          link: "#",
        },
        {
          title: "Telegram",
          link: "#",
        },
      ],
    },
    {
      title: "Team",
      link: "#",
    },
    {
      title: "Partners",
      link: "#",
    },
    {
      title: "Roadmap",
      link: "#",
    },
    {
      title: "Help",
      links: [
        {
          title: "GitBook",
          link: "#",
        },
        {
          title: "Tokenomics",
          link: "#",
        },
        {
          title: "Whitepaper",
          link: "#",
        },
        {
          title: "One Page",
          link: "#",
        },
        {
          title: "IDO strategy",
          link: "#",
        },
        {
          title: "FAQ ",
          link: "#",
        },
      ],
    },
    {
      title: "News",
      link: "#",
    },
  ];

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          paddingY: { xs: "16px", md: "12px" },
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          position: "absolute",
          width: "100%",
          top: isBanner ? 0 : { xs: "-120px", md: "-80px" },
          zIndex: 2,
          transition: "top 0.2s ease-in-out",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            fontSize: { xs: "12px" },
            lineHeight: { xs: "12px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "175px", md: "100%" },
            margin: { xs: "auto", md: 0 },
            textAlign: "center",
          }}
        >
          <Typography
            color="#FFF"
            fontFamily="Inter"
            style={{ fontSize: "inherit", lineHeight: "inherit" }}
          >
            Private sale starts in 30 days. Be first to participate
          </Typography>
          <Box
            sx={{
              padding: { xs: "10px 16px" },
              marginLeft: { md: "12px" },
              marginTop: { xs: "12px", md: 0 },
              borderRadius: "2px",
              background:
                "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
            }}
          >
            <Typography
              color="#FFF"
              fontFamily="Inter"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Explore IDO strategy
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "13px", md: "50%" },
            transform: { md: "translateY(-50%)" },
            right: { xs: "8px", md: "135px" },
            cursor: "pointer",
          }}
          onClick={(e) => handleClose(e)}
        >
          <img src={CloseBtn} alt="close-btn" width="20px" />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: { xs: "calc(100% - 80px)", md: 498 },
          height: "100%",
          right: isMenuOpen ? 0 : "-100%",
          top: 0,
          background: "#080808",
          zIndex: 100,
          transition: "all 0.2s ease-in-out",
          padding: "36px 40px",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{ position: "absolute", top: "12px", right: "12px" }}
          onClick={handleMobileMenu}
        >
          <img src={CloseBtn} alt="close-btn" />
        </Box>
        {buttons.map((button, index) => (
          <Box
            sx={{ marginBottom: activeMenuDropdown === index ? "36px" : "0" }}
          >
            <Box
              onClick={() => {
                setActiveMenuDropdown(index);
              }}
              sx={{
                marginBottom: {
                  xs: activeMenuDropdown === index ? "0" : "32px",
                  md: activeMenuDropdown === index ? "0" : "36px",
                },
                fontSize: { xs: "16px", md: "32px" },
                lineHeight: { xs: "16px", md: "32px" },
                display: "flex",
                "& > .menu-dropdown": {
                  width: { xs: 256, md: 466 },
                },
                "& > img": {
                  transform:
                    activeMenuDropdown === index
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <Typography
                className="menu-dropdown"
                fontFamily="Inter"
                fontWeight={500}
                color="#FFFFFF"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                {button.title}
              </Typography>
              {button.links && (
                <img src={ArrowDown} alt="arrow-down" width="32px" />
              )}
            </Box>
            {button.links && (
              <Box
                sx={{
                  marginTop: {
                    xs: activeMenuDropdown === index ? "16px" : "0px",
                    md: activeMenuDropdown === index ? "20px" : "0px",
                  },
                  maxHeight: {
                    xs:
                      activeMenuDropdown === index
                        ? `${
                            button.links.length * 14 +
                            (button.links.length - 1) * 16 +
                            10
                          }px`
                        : 0,
                    md:
                      activeMenuDropdown === index
                        ? `${(button.links.length * 2 - 1) * 24 + 10}px`
                        : 0,
                  },
                  opacity: activeMenuDropdown === index ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                {button.links.map((link, index) => (
                  <Box
                    sx={{
                      marginBottom:
                        button.links.length - 1 !== index
                          ? { xs: "16px", md: "24px" }
                          : 0,
                      fontSize: { xs: "14px", md: "24px" },
                      lineHeight: { xs: "14px", md: "24px" },
                    }}
                  >
                    <Typography
                      fontFamily="Inter"
                      fontWeight={500}
                      color="#FFFFFF"
                      style={{ fontSize: "inherit", lineHeight: "inherit" }}
                    >
                      {link.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: isMenuOpen
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isMenuOpen ? "blur(10px)" : "blur(0px)",
          zIndex: isMenuOpen ? 2 : -1,
          transition: "all 0.2s ease-in-out",
        }}
      />
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          paddingX: { xs: "20px", md: "34px", lg: "66px", xl: "135px" },
        }}
      >
        <Box>
          <video
            ref={refVideo}
            autoPlay="autoPlay"
            loop="loop"
            muted
            playsInline
            onContextMenu={() => false}
            preload="auto"
            id="vid"
            poster={Background}
            style={{
              objectFit: "cover",
              height: "100vh",
              width: "100%",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: -1,
            }}
          >
            <source src={MonkeyVideoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box
          sx={{
            paddingTop: isBanner ? { xs: "80px", md: "60px" } : "0",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <Header closeMenu={handleMobileMenu} buttons={buttons} />
        </Box>
        <Box
          sx={{
            marginTop: { xs: "93px", md: "150px" },
            textAlign: { xs: "center", lg: "left" },
            fontSize: { xs: "42px", md: "105px" },
            lineHeight: { xs: "39.6px", md: "90%" },
          }}
        >
          <Typography
            color="#FFF"
            fontFamily="Aaaiight"
            style={{ fontSize: "inherit", lineHeight: "inherit" }}
          >
            Fight like
            <br />
            never before
          </Typography>
          <Box
            sx={{
              marginTop: "24px",
              fontSize: { xs: "12px", md: "20px" },
              lineHeight: { xs: "19.2px", md: "140%" },
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography
              color="#FFF"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
              fontFamily="inter"
            >
              Forget about P2E. Chain Joes is an action-packed
              <br />
              mobile game with new PLAY-AND-EARN model.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "24px",
              fontSize: { xs: "12px", md: "20px" },
              lineHeight: { xs: "19.2px", md: "140%" },
              display: { xs: "block", md: "none" },
            }}
          >
            <Typography
              color="#FFF"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
              fontFamily="inter"
            >
              Forget about P2E. Chain Joes <br />
              is an action-packed mobile game <br />
              with new PLAY-AND-EARN model.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "52px",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { md: "center", lg: "normal" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "280px",
              height: { xs: "52px", md: "68px" },
              display: "flex",
              borderRadius: "2px",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              background:
                "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
              marginRight: { xs: 0, md: "24px" },
              fontWeight: { xs: 500 },
              fontSize: { xs: "14px", md: "20px" },
            }}
          >
            <img src={Login} alt="login" />
            <Typography
              marginLeft="11px"
              color="#FFFFFF"
              fontFamily="Inter"
              style={{ fontWeight: "inherit", fontSize: "inherit" }}
            >
              Join the Battle
            </Typography>
          </Box>
          <Box
            sx={{
              width: "280px",
              height: { xs: "52px", md: "68px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "2px",
              border: "1px solid",
              borderImageSlice: 1,
              borderImageSource:
                "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
              marginRight: { xs: 0, md: "16px" },
              cursor: "pointer",
              marginTop: { xs: "12px", md: 0 },
              fontWeight: { xs: 500 },
              fontSize: { xs: "14px", md: "20px" },
            }}
          >
            <img src={Document} alt="document" />
            <Typography
              marginLeft="8px"
              color="#05D19B"
              fontWeight="600"
              fontFamily="Inter"
              style={{ fontWeight: "inherit", fontSize: "inherit" }}
            >
              Read Litepaper
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default First;
