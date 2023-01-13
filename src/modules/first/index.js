import React, { useEffect, useRef, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import Header from "./components/header";
import MonkeyVideoWebM from "../../videos/monkey.webm";
import MonkeyVideoMp4 from "../../videos/monkey.mp4";
import Background from "../../imgs/new/MainScreen.png";
import Login from "../../imgs/new/login.svg";
import ArrowDown from "../../imgs/new/arrow-down.svg";
import { HashLink } from "react-router-hash-link";
import { Document, CloseBtn } from "../../imgs/new/svg";

const First = () => {
  const refVideo = useRef(null);
  const [muted, setMuted] = useState(false);
  const [isBanner, setIsBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuDropdown, setActiveMenuDropdown] = useState(0);
  const [documentColor, setDocumentColor] = useState("");
  const [crossColor, setCrossColor] = useState("");

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

  const handleMobileMenu = (e) => {
    e?.preventDefault();
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
          link: "/main/#backstory",
          type: "scroll",
        },
        {
          title: "ChainVerse",
          link: "/main/#chainverse",
          type: "scroll",
        },
        {
          title: "Characters",
          link: "/main/#characters",
          type: "scroll",
        },
        {
          title: "Activities",
          link: "/main/#activities",
          type: "scroll",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          title: "Discord",
          link: "https://discord.gg/AABG2mJZAp",
        },
        {
          title: "Twitter",
          link: "https://twitter.com/ChainJoes",
        },
        {
          title: "Telegram",
          link: "https://t.me/chainjoes",
        },
      ],
    },
    {
      title: "Roadmap",
      link: "/main/#roadmap",
      type: "scroll",
    },
    {
      title: "Team",
      link: "/main/#team",
      type: "scroll",
    },
    {
      title: "Partners",
      link: "/main/#partners",
      type: "scroll",
    },
    {
      title: "Help",
      links: [
        {
          title: "FAQ ",
          link: "/faq",
        },
        {
          title: "GitBook",
          link: "https://chainjoes.gitbook.io/chainjoes/",
        },
        {
          title: "Whitepaper",
          link: "/pdfs/Whitepaper.pdf",
        },
        {
          title: "Tokenomics",
          link: "/pdfs/Tokenomics.pdf",
        },
        {
          title: "Sale Strategy",
          link: "/pdfs/Sale_Strategy.pdf",
        },
        {
          title: "One Page",
          link: "/pdfs/One_Page.pdf",
        },
      ],
    },
    {
      title: "News",
      link: "https://medium.com/@ChainJoes",
    },
  ];

  return (
    <Box sx={{ position: "relative" }}>
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
          <CloseBtn />
        </Box>
        {buttons.map((button, index) => (
          <Box
            sx={{ marginBottom: activeMenuDropdown === index ? "36px" : "0" }}
            key={`mobile-button-${index}`}
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
                display: "flex",
                "& .menu-dropdown": {
                  width: { xs: 256, md: 466 },
                  fontSize: { xs: "16px", md: "32px" },
                  lineHeight: { xs: "16px", md: "32px" },
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
              {button.link ? (
                <>
                  {button.type === "scroll" ? (
                    <HashLink
                      to={button.link}
                      scroll={(el) => {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        handleMobileMenu();
                      }}
                    >
                      <Typography
                        className="menu-dropdown"
                        fontFamily="Inter"
                        fontWeight={500}
                        color="#FFFFFF"
                      >
                        {button.title}
                      </Typography>
                    </HashLink>
                  ) : (
                    <Link href={button.link} target="_blank" underline="none">
                      <Typography
                        className="menu-dropdown"
                        fontFamily="Inter"
                        fontWeight={500}
                        color="#FFFFFF"
                      >
                        {button.title}
                      </Typography>
                    </Link>
                  )}
                </>
              ) : (
                <Typography
                  className="menu-dropdown"
                  fontFamily="Inter"
                  fontWeight={500}
                  color="#FFFFFF"
                >
                  {button.title}
                </Typography>
              )}

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
                            (button.links.length - 1) * 16
                          }px`
                        : 0,
                    md:
                      activeMenuDropdown === index
                        ? `${(button.links.length * 2 - 1) * 24}px`
                        : 0,
                  },
                  paddingBottom: activeMenuDropdown === index ? "5px" : "0px",
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
                      "& .dropdown-point": {
                        fontSize: { xs: "14px", md: "24px" },
                        lineHeight: { xs: "14px", md: "24px" },
                      },
                    }}
                    key={`mobile-link-${index}`}
                  >
                    {link.type === "scroll" ? (
                      <HashLink
                        to={link.link}
                        scroll={(el) => {
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                          handleMobileMenu();
                        }}
                      >
                        <Typography
                          className="dropdown-point"
                          fontFamily="Inter"
                          fontWeight={500}
                          color="#FFFFFF"
                        >
                          {link.title}
                        </Typography>
                      </HashLink>
                    ) : (
                      <Link href={link.link} target="_blank" underline="none">
                        <Typography
                          className="dropdown-point"
                          fontFamily="Inter"
                          fontWeight={500}
                          color="#FFFFFF"
                        >
                          {link.title}
                        </Typography>
                      </Link>
                    )}
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
            Kick the web3
            <br />
            enemies <sup style={{ fontSize: "32px" }}>'</sup> asses!
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
          <Link
            href="https://discord.gg/AABG2mJZAp"
            target="_blank"
            underline="none"
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
                color: "#FFFFFF",
                ":hover": {
                  outline: "1px solid #00FFB7",
                  background: "none",
                },
                ":focus": {
                  outline: "1px solid #FFF",
                  background: "none",
                },
                ":active": {
                  background: "#FFF",
                  color: "#080808",
                },
              }}
            >
              <img src={Login} alt="login" />
              <Typography
                marginLeft="11px"
                fontFamily="Inter"
                style={{
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              >
                Join the Battle
              </Typography>
            </Box>
          </Link>
          <Link href="/pdfs/Whitepaper.pdf" target="_blank" underline="none">
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
                color: "#05D19B",
                fontSize: { xs: "14px", md: "20px" },
                ":hover": {
                  color: "#FFF",
                },
                ":focus": {
                  border: "1px solid #FFF",
                  color: "#FFF",
                },
                ":active": {
                  background: "#FFF",
                  color: "#080808",
                },
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                setDocumentColor("#FFF");
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                setDocumentColor("");
              }}
            >
              <Box>
                <Document color={documentColor} />
              </Box>
              <Typography
                marginLeft="8px"
                fontWeight="600"
                fontFamily="Inter"
                style={{
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              >
                Read Whitepaper
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default First;
