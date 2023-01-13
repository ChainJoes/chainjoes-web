import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";
import Logo from "../../../../imgs/webp/logo.png";
import ArrowRight from "../../../../imgs/new/arrow-right.svg";
import ArrowDown from "../../../../imgs/new/arrow-down.svg";
import Menu from "../../../../imgs/new/menu.svg";
import { HashLink } from "react-router-hash-link";
import BlockCursor from "../../../../imgs/new/disabled.cur";

const Header = ({ closeMenu, buttons }) => {
  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          paddingTop: "33px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RouterLink to="/main">
          <Box
            sx={{
              height: 45,
              width: 109,
              backgroundImage: `url(${Logo})`,
              backgroundSize: "cover",
            }}
          />
        </RouterLink>
        <Box sx={{ color: "#fff", display: { xs: "none", xl: "block" } }}>
          <Box
            style={{
              display: "flex",
              listStyleType: "none",
              gap: "20px",
              fontSize: "14px",
            }}
          >
            {buttons.map((item, index) => (
              <Box
                key={`main-header-button-${index}`}
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  height: "30px",
                  "& .menu-arrow": {
                    transform: "rotate(0deg)",
                    transition: "all 0.2s ease-in-out",
                  },
                  ":hover": {
                    "& > .open-menu": {
                      display: "block",
                    },
                    "& .menu-arrow": {
                      transform: "rotate(180deg)",
                    },
                    "& .drop-title": {
                      background:
                        "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    padding: "5px 8px",
                  }}
                >
                  {item.links ? (
                    <Box sx={{ marginRight: item.links ? "6px" : "" }}>
                      <Typography
                        fontFamily="Inter"
                        fontSize="14px"
                        lineHeight="14px"
                        fontWeight="400"
                        color="#FFF"
                        className="drop-title"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ) : (
                    <>
                      {item.type === "scroll" ? (
                        <HashLink
                          to={item.link}
                          scroll={(el) =>
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                          }
                        >
                          <Box sx={{ marginRight: item.links ? "6px" : "" }}>
                            <Typography
                              fontFamily="Inter"
                              fontSize="14px"
                              lineHeight="14px"
                              fontWeight="400"
                              color="#FFF"
                              className="drop-title"
                            >
                              {item.title}
                            </Typography>
                          </Box>
                        </HashLink>
                      ) : (
                        <Link href={item.link} target="_blank" underline="none">
                          <Box sx={{ marginRight: item.links ? "6px" : "" }}>
                            <Typography
                              fontFamily="Inter"
                              fontSize="14px"
                              lineHeight="14px"
                              fontWeight="400"
                              color="#FFF"
                            >
                              {item.title}
                            </Typography>
                          </Box>
                        </Link>
                      )}
                    </>
                  )}
                  {item.links && (
                    <img
                      src={ArrowDown}
                      alt="arrow-down"
                      width="12px"
                      className="menu-arrow"
                    />
                  )}
                </Box>
                {item.links && (
                  <Box
                    className={`open-menu`}
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "20px",
                      left: "-20px",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      padding: "20px",
                    }}
                  >
                    {item.links.map((button, index) => (
                      <Box key={`menu-link-${index}`}>
                        {button.type === "scroll" ? (
                          <HashLink
                            to={button.link}
                            scroll={(el) =>
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              })
                            }
                          >
                            <Box
                              key={`main-header-subbutton-${index}`}
                              sx={{
                                paddingY: "14px",
                                minWidth: "100px",
                                textDecoration: "none",
                                borderBottom:
                                  index !== item.links.length - 1
                                    ? "1px solid rgba(255, 255, 255, 0.1)"
                                    : "",
                                ":hover": {
                                  "& .drop-button": {
                                    background:
                                      "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    textFillColor: "transparent",
                                  },
                                },
                              }}
                            >
                              <Typography
                                fontFamily="Inter"
                                className="drop-button"
                                fontSize="14px"
                                lineHeight="14px"
                                fontWeight="500"
                                color="#FFF"
                              >
                                {button.title}
                              </Typography>
                            </Box>
                          </HashLink>
                        ) : (
                          <Link
                            href={button.link}
                            target="_blank"
                            underline="none"
                          >
                            <Box
                              key={`main-header-subbutton-${index}`}
                              sx={{
                                paddingY: "14px",
                                minWidth: "100px",
                                textDecoration: "none",
                                borderBottom:
                                  index !== item.links.length - 1
                                    ? "1px solid rgba(255, 255, 255, 0.1)"
                                    : "",
                                ":hover": {
                                  "& .drop-button": {
                                    background:
                                      "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    textFillColor: "transparent",
                                  },
                                },
                              }}
                            >
                              <Typography
                                fontFamily="Inter"
                                fontSize="14px"
                                lineHeight="14px"
                                fontWeight="500"
                                color="#FFF"
                                className="drop-button"
                              >
                                {button.title}
                              </Typography>
                            </Box>
                          </Link>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: { xs: "flex", xl: "none" },
              border: { xs: "", md: "1px solid #616161" },
              borderRadius: "2px",
              width: "44px",
              height: "44px",
              justifyContent: "center",
              alignContent: "center",
              marginLeft: "32px",
            }}
            onClick={closeMenu}
          >
            <img src={Menu} alt="menu" width="24px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
