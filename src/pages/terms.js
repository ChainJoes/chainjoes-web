import React, { useState } from "react";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import Header from "../modules/first/components/header";
import CloseBtn from "../imgs/new/close-btn.svg";
import ArrowDown from "../imgs/new/arrow-down.svg";
import { HashLink } from "react-router-hash-link";
import { Footer } from "../modules";

const Terms = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuDropdown, setActiveMenuDropdown] = useState(0);

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
          link: "/#backstory",
          type: "scroll",
        },
        {
          title: "ChainVerse",
          link: "/#chainverse",
          type: "scroll",
        },
        {
          title: "Characters",
          link: "/#characters",
          type: "scroll",
        },
        {
          title: "Activities",
          link: "/#activities",
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
      link: "/#roadmap",
      type: "scroll",
    },
    {
      title: "Team",
      link: "/#team",
      type: "scroll",
    },
    {
      title: "Partners",
      link: "/#partners",
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
  const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
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
            display: { xs: "block", xl: "none" },
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
            display: { xs: "block", xl: "none" },
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
            paddingX: { xs: "20px", md: "34px", lg: "66px", xl: "135px" },
            paddingY: { xs: "15px", lg: "30px" },
          }}
        >
          <Box>
            <Header closeMenu={handleMobileMenu} buttons={buttons} />
          </Box>
          <Box sx={{ paddingTop: { xs: "50px", md: "768px", lg: "120px" } }}>
            <Box
              sx={{
                display: desktop768Width ? "flex" : "block",
                justifyContent: "space-between",
                alignItems: "flex-end",
                WebkitAlignItems: "flex-end",
              }}
            >
              <Box>
                <Typography
                  fontFamily="Furore"
                  fontSize={
                    desktop1080Width
                      ? "75px"
                      : desktop768Width
                      ? "50px"
                      : "25px"
                  }
                  color="#ffffff"
                  lineHeight={
                    desktop1080Width
                      ? "75px"
                      : desktop768Width
                      ? "50px"
                      : "25px"
                  }
                  style={{
                    textFillColor: "transparent",
                    backgroundcolor: "primary",
                    backgroundImage:
                      "linear-gradient(180.16deg, #FFFFFF 0.14%, rgba(255, 255, 255, 0) 186.06%)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Terms & Conditions
                </Typography>
              </Box>
              <Box sx={{ marginTop: !desktop768Width ? "35px" : "0px" }}>
                <Typography
                  fontFamily="Inter"
                  fontSize={
                    desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px"
                  }
                  color="#FFFFFF"
                >
                  Updated at 2022-09-29
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: desktop1080Width
                  ? "90px"
                  : desktop768Width
                  ? "50px"
                  : "30px",
              }}
            >
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    General Terms
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    By accessing and placing an order with Chain Joes, you
                    confirm that you are in agreement with and bound by the
                    terms of service contained in the Terms & Conditions
                    outlined below. These terms apply to the entire website and
                    any email or other type of communication between you and
                    Chain Joes.
                    <br />
                    Under no circumstances shall Chain Joes team be liable for
                    any direct, indirect, special, incidental or consequential
                    damages, including, but not limited to, loss of data or
                    profit, arising out of the use, or the inability to use, the
                    materials on this site, even if Chain Joes team or an
                    authorized representative has been advised of the
                    possibility of such damages. If your use of materials from
                    this site results in the need for servicing, repair or
                    correction of equipment or data, you assume any costs
                    thereof.
                    <br />
                    Chain Joes will not be responsible for any outcome that may
                    occur during the course of usage of our resources. We
                    reserve the rights to change prices and revise the resources
                    usage policy in any moment.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    License
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Chain Joes grants you a revocable, non-exclusive,
                    non-transferable, limited license to download, install and
                    use the website strictly in accordance with the terms of
                    this Agreement.
                    <br />
                    These Terms & Conditions are a contract between you and
                    Chain Joes (referred to in these Terms & Conditions as
                    "Chain Joes", "us", "we" or "our"), the provider of the
                    Chain Joes website and the services accessible from the
                    Chain Joes website (which are collectively referred to in
                    these Terms & Conditions as the "Chain Joes Service").
                    <br />
                    You are agreeing to be bound by these Terms & Conditions. If
                    you do not agree to these Terms & Conditions, please do not
                    use the Chain Joes Service. In these Terms & Conditions,
                    "you" refers both to you as an individual and to the entity
                    you represent. If you violate any of these Terms &
                    Conditions, we reserve the right to cancel your account or
                    block access to your account without notice.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Meanings
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    For this Terms & Conditions:
                  </Typography>
                  <ul
                    style={{
                      paddingInlineStart: desktop1080Width ? "25px" : "17px",
                      margin: 0,
                    }}
                  >
                    <li>
                      Cookie: small amount of data generated by a website and
                      saved by your web browser. It is used to identify your
                      browser, provide analytics, remember information about you
                      such as your language preference or login information.
                    </li>
                    <li>
                      Company: when this policy mentions “Company,” “we,” “us,”
                      or “our,” it refers to Chain Joes, (High Tech Campus 10,
                      Eindhoven, North Brabant 5656, NL) that is responsible for
                      your information under this Privacy Policy.
                    </li>
                    <li>
                      Country: where Chain Joes or the owners/founders of Chain
                      Joes are based, in this case is the Netherlands
                    </li>
                    <li>
                      Device: any internet connected device such as a phone,
                      tablet, computer or any other device that can be used to
                      visit Chain Joes and use the services.
                    </li>
                    <li>
                      Service: refers to the service provided by Chain Joes as
                      described in the relative terms (if available) and on this
                      platform.
                    </li>
                    <li>
                      Third-party service: refers to advertisers, contest
                      sponsors, promotional and marketing partners, and others
                      who provide our content or whose products or services we
                      think may interest you.
                    </li>
                    <li>
                      Website: Chain Joes."’s" site, which can be accessed via
                      this URL:{" "}
                      <a
                        href="https://chainjoes.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "#44F4C3" }}
                      >
                        https://chainjoes.com/
                      </a>
                    </li>
                    <li>
                      You: a person or entity that is registered with Chain Joes
                      to use the Services.
                    </li>
                  </ul>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Restrictions
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    You agree not to, and you will not permit others to:
                    <br />
                    -License, sell, rent, lease, assign, distribute, transmit,
                    host, outsource, disclose or otherwise commercially exploit
                    the website or make the platform available to any third
                    party.
                    <br />
                    -Modify, make derivative works of, disassemble, decrypt,
                    reverse compile or reverse engineer any part of the website.
                    <br />
                    -Remove, alter or obscure any proprietary notice (including
                    any notice of copyright or trademark) of Chain Joes or its
                    affiliates, partners, suppliers or the licensors of the
                    website.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Return and Refund Policy
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Thanks for shopping at Chain Joes. We appreciate the fact
                    that you like to buy the stuff we build. We also want to
                    make sure you have a rewarding experience while you’re
                    exploring, evaluating, and purchasing our products. As with
                    any shopping experience, there are terms and conditions that
                    apply to transactions at Chain Joes. We’ll be as brief as
                    our attorneys will allow. The main thing to remember is that
                    by placing an order or making a purchase at Chain Joes, you
                    agree to the terms along with Chain Joes."’s" Privacy
                    Policy. If, for any reason, You are not completely satisfied
                    with any good or service that we provide, don't hesitate to
                    contact us and we will discuss any of the issues you are
                    going through with our product.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Your Suggestions
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Any feedback, comments, ideas, improvements or suggestions
                    (collectively, "Suggestions") provided by you to Chain Joes
                    with respect to the website shall remain the sole and
                    exclusive property of Chain Joes. Chain Joes shall be free
                    to use, copy, modify, publish, or redistribute the
                    Suggestions for any purpose and in any way without any
                    credit or any compensation to you.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Your Consent
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We've updated our Terms & Conditions to provide you with
                    complete transparency into what is being set when you visit
                    our site and how it's being used. By using our website,
                    registering an account, or making a purchase, you hereby
                    consent to our Terms & Conditions.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Links to Other Websites
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    This Terms & Conditions applies only to the Services. The
                    Services may contain links to other websites not operated or
                    controlled by Chain Joes. We are not responsible for the
                    content, accuracy or opinions expressed in such websites,
                    and such websites are not investigated, monitored or checked
                    for accuracy or completeness by us. Please remember that
                    when you use a link to go from the Services to another
                    website, our Terms & Conditions are no longer in effect.
                    Your browsing and interaction on any other website,
                    including those that have a link on our platform, is subject
                    to that website’s own rules and policies. Such third parties
                    may use their own cookies or other methods to collect
                    information about you.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Cookies
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Chain Joes uses "Cookies" to identify the areas of our
                    website that you have visited. A Cookie is a small piece of
                    data stored on your computer or mobile device by your web
                    browser. We use Cookies to enhance the performance and
                    functionality of our website but are non-essential to their
                    use. However, without these cookies, certain functionality
                    like videos may become unavailable or you would be required
                    to enter your login details every time you visit the website
                    as we would not be able to remember that you had logged in
                    previously. Most web browsers can be set to disable the use
                    of Cookies. However, if you disable Cookies, you may not be
                    able to access functionality on our website correctly or at
                    all. We never place Personally Identifiable Information in
                    Cookies.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Changes To Our Terms & Conditions
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    {`You acknowledge and agree that <?=Chain Joes;?> may stop (permanently or temporarily) providing the Service (or any features within the Service) to you or to users generally at <?=Chain Joes;?>’s sole discretion, without prior notice to you. You may stop using the Service at any time. You do not need to specifically inform <?=Chain Joes;?> when you stop using the Service. You acknowledge and agree that if <?=Chain Joes;?> disables access to your account, you may be prevented from accessing the Service, your account details or any files or other materials which is contained in your account.
 If we decide to change our Terms & Conditions, we will post those changes on this page, and/or update the Terms & Conditions modification date below.`}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Modifications to Our website
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Chain Joes reserves the right to modify, suspend or
                    discontinue, temporarily or permanently, the website or any
                    service to which it connects, with or without notice and
                    without liability to you.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Updates to Our website
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Chain Joes may from time to time provide enhancements or
                    improvements to the features/ functionality of the website,
                    which may include patches, bug fixes, updates, upgrades and
                    other modifications ("Updates"). Updates may modify or
                    delete certain features and/or functionalities of the
                    website. You agree that Chain Joes has no obligation to (i)
                    provide any Updates, or (ii) continue to provide or enable
                    any particular features and/or functionalities of the
                    website to you. You further agree that all Updates will be
                    (i) deemed to constitute an integral part of the website,
                    and (ii) subject to the terms and conditions of this
                    Agreement.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Third-Party Services
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We may display, include or make available third-party
                    content (including data, information, applications and other
                    products services) or provide links to third-party websites
                    or services ("Third- Party Services"). You acknowledge and
                    agree that Chain Joes shall not be responsible for any
                    Third-Party Services, including their accuracy,
                    completeness, timeliness, validity, copyright compliance,
                    legality, decency, quality or any other aspect thereof.
                    Chain Joes does not assume and shall not have any liability
                    or responsibility to you or any other person or entity for
                    any Third-Party Services. Third-Party Services and links
                    thereto are provided solely as a convenience to you and you
                    access and use them entirely at your own risk and subject to
                    such third parties' terms and conditions.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Term and Termination
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    This Agreement shall remain in effect until terminated by
                    you or Chain Joes. Chain Joes may, in its sole discretion,
                    at any time and for any or no reason, suspend or terminate
                    this Agreement with or without prior notice. This Agreement
                    will terminate immediately, without prior notice from Chain
                    Joes, in the event that you fail to comply with any
                    provision of this Agreement. You may also terminate this
                    Agreement by deleting the website and all copies thereof
                    from your computer. Upon termination of this Agreement, you
                    shall cease all use of the website and delete all copies of
                    the website from your computer. Termination of this
                    Agreement will not limit any of Chain Joes's rights or
                    remedies at law or in equity in case of breach by you
                    (during the term of this Agreement) of any of your
                    obligations under the present Agreement.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Copyright Infringement Notice
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    If you are a copyright owner or such owner’s agent and
                    believe any material on our website constitutes an
                    infringement on your copyright, please contact us setting
                    forth the following information: (a) a physical or
                    electronic signature of the copyright owner or a person
                    authorized to act on his behalf; (b) identification of the
                    material that is claimed to be infringing; (c) your contact
                    information, including your address, telephone number, and
                    an email; (d) a statement by you that you have a good faith
                    belief that use of the material is not authorized by the
                    copyright owners; and (e) the a statement that the
                    information in the notification is accurate, and, under
                    penalty of perjury you are authorized to act on behalf of
                    the owner.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Indemnification
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    You agree to indemnify and hold Chain Joes and its parents,
                    subsidiaries, affiliates, officers, employees, agents,
                    partners and licensors (if any) harmless from any claim or
                    demand, including reasonable attorneys' fees, due to or
                    arising out of your: (a) use of the website; (b) violation
                    of this Agreement or any law or regulation; or (c) violation
                    of any right of a third party.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    No Warranties
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    The website is provided to you "AS IS" and "AS AVAILABLE"
                    and with all faults and defects without warranty of any
                    kind. To the maximum extent permitted under applicable law,
                    Chain Joes, on its own behalf and on behalf of its
                    affiliates and its and their respective licensors and
                    service providers, expressly disclaims all warranties,
                    whether express, implied, statutory or otherwise, with
                    respect to the website, including all implied warranties of
                    merchantability, fitness for a particular purpose, title and
                    non-infringement, and warranties that may arise out of
                    course of dealing, course of performance, usage or trade
                    practice. Without limitation to the foregoing, Chain Joes
                    provides no warranty or undertaking, and makes no
                    representation of any kind that the website will meet your
                    requirements, achieve any intended results, be compatible or
                    work with any other software, , systems or services, operate
                    without interruption, meet any performance or reliability
                    standards or be error free or that any errors or defects can
                    or will be corrected. Without limiting the foregoing,
                    neither Chain Joes nor any Chain Joes's provider makes any
                    representation or warranty of any kind, express or implied:
                    (i) as to the operation or availability of the website, or
                    the information, content, and materials or products included
                    thereon; (ii) that the website will be uninterrupted or
                    error-free; (iii) as to the accuracy, reliability, or
                    currency of any information or content provided through the
                    website; or (iv) that the website, its servers, the content,
                    or e-mails sent from or on behalf of Chain Joes are free of
                    viruses, scripts, trojan horses, worms, malware, timebombs
                    or other harmful components. Some jurisdictions do not allow
                    the exclusion of or limitations on implied warranties or the
                    limitations on the applicable statutory rights of a
                    consumer, so some or all of the above exclusions and
                    limitations may not apply to you.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Limitation of Liability
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Notwithstanding any damages that you might incur, the entire
                    liability of Chain Joes and any of its suppliers under any
                    provision of this Agreement and your exclusive remedy for
                    all of the foregoing shall be limited to the amount actually
                    paid by you for the website. To the maximum extent permitted
                    by applicable law, in no event shall Chain Joes or its
                    suppliers be liable for any special, incidental, indirect,
                    or consequential damages whatsoever (including, but not
                    limited to, damages for loss of profits, for loss of data or
                    other information, for business interruption, for personal
                    injury, for loss of privacy arising out of or in any way
                    related to the use of or inability to use the website,
                    third-party software and/or third-party hardware used with
                    the website, or otherwise in connection with any provision
                    of this Agreement), even if Chain Joes or any supplier has
                    been advised of the possibility of such damages and even if
                    the remedy fails of its essential purpose. Some
                    states/jurisdictions do not allow the exclusion or
                    limitation of incidental or consequential damages, so the
                    above limitation or exclusion may not apply to you.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Severability
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    If any provision of this Agreement is held to be
                    unenforceable or invalid, such provision will be changed and
                    interpreted to accomplish the objectives of such provision
                    to the greatest extent possible under applicable law and the
                    remaining provisions will continue in full force and effect.
                    This Agreement, together with the Privacy Policy and any
                    other legal notices published by Chain Joes on the Services,
                    shall constitute the entire agreement between you and Chain
                    Joes concerning the Services. If any provision of this
                    Agreement is deemed invalid by a court of competent
                    jurisdiction, the invalidity of such provision shall not
                    affect the validity of the remaining provisions of this
                    Agreement, which shall remain in full force and effect. No
                    waiver of any term of this Agreement shall be deemed a
                    further or continuing waiver of such term or any other term,
                    and Chain Joes."’s" failure to assert any right or provision
                    under this Agreement shall not constitute a waiver of such
                    right or provision. YOU AND Chain Joes AGREE THAT ANY CAUSE
                    OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST
                    COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION
                    ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY
                    BARRED.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Waiver
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Except as provided herein, the failure to exercise a right
                    or to require performance of an obligation under this
                    Agreement shall not effect a party's ability to exercise
                    such right or require such performance at any time
                    thereafter nor shall be the waiver of a breach constitute
                    waiver of any subsequent breach. No failure to exercise, and
                    no delay in exercising, on the part of either party, any
                    right or any power under this Agreement shall operate as a
                    waiver of that right or power. Nor shall any single or
                    partial exercise of any right or power under this Agreement
                    preclude further exercise of that or any other right granted
                    herein. In the event of a conflict between this Agreement
                    and any applicable purchase or other terms, the terms of
                    this Agreement shall govern.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Amendments to this Agreement
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Chain Joes reserves the right, at its sole discretion, to
                    modify or replace this Agreement at any time. If a revision
                    is material we will provide at least 30 days' notice prior
                    to any new terms taking effect. What constitutes a material
                    change will be determined at our sole discretion. By
                    continuing to access or use our website after any revisions
                    become effective, you agree to be bound by the revised
                    terms. If you do not agree to the new terms, you are no
                    longer authorized to use Chain Joes.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Entire Agreement
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    The Agreement constitutes the entire agreement between you
                    and Chain Joes regarding your use of the website and
                    supersedes all prior and contemporaneous written or oral
                    agreements between you and Chain Joes. You may be subject to
                    additional terms and conditions that apply when you use or
                    purchase other Chain Joes's services, which Chain Joes will
                    provide to you at the time of such use or purchase.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Updates to Our Terms
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We may change our Service and policies, and we may need to
                    make changes to these Terms so that they accurately reflect
                    our Service and policies. Unless otherwise required by law,
                    we will notify you (for example, through our Service) before
                    we make changes to these Terms and give you an opportunity
                    to review them before they go into effect. Then, if you
                    continue to use the Service, you will be bound by the
                    updated Terms. If you do not want to agree to these or any
                    updated Terms, you can delete your account.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Intellectual Property
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    The website and its entire contents, features and
                    functionality (including but not limited to all information,
                    software, text, displays, images, video and audio, and the
                    design, selection and arrangement thereof), are owned by
                    Chain Joes, its licensors or other providers of such
                    material and are protected by Netherlands and international
                    copyright, trademark, patent, trade secret and other
                    intellectual property or proprietary rights laws. The
                    material may not be copied, modified, reproduced, downloaded
                    or distributed in any way, in whole or in part, without the
                    express prior written permission of Chain Joes, unless and
                    except as is expressly provided in these Terms & Conditions.
                    Any unauthorized use of the material is prohibited.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Agreement to Arbitrate
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    This section applies to any dispute EXCEPT IT DOESN’T
                    INCLUDE A DISPUTE RELATING TO CLAIMS FOR INJUNCTIVE OR
                    EQUITABLE RELIEF REGARDING THE ENFORCEMENT OR VALIDITY OF
                    YOUR OR Chain Joes."’s" INTELLECTUAL PROPERTY RIGHTS. The
                    term “dispute” means any dispute, action, or other
                    controversy between you and Chain Joes concerning the
                    Services or this agreement, whether in contract, warranty,
                    tort, statute, regulation, ordinance, or any other legal or
                    equitable basis. “Dispute” will be given the broadest
                    possible meaning allowable under law.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Notice of Dispute
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    In the event of a dispute, you or Chain Joes must give the
                    other a Notice of Dispute, which is a written statement that
                    sets forth the name, address, and contact information of the
                    party giving it, the facts giving rise to the dispute, and
                    the relief requested. You must send any Notice of Dispute
                    via email to: info@chainjoes.com. Chain Joes will send any
                    Notice of Dispute to you by mail to your address if we have
                    it, or otherwise to your email address. You and Chain Joes
                    will attempt to resolve any dispute through informal
                    negotiation within sixty (60) days from the date the Notice
                    of Dispute is sent. After sixty (60) days, you or Chain Joes
                    may commence arbitration.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Binding Arbitration
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    If you and Chain Joes don’t resolve any dispute by informal
                    negotiation, any other effort to resolve the dispute will be
                    conducted exclusively by binding arbitration as described in
                    this section. You are giving up the right to litigate (or
                    participate in as a party or class member) all disputes in
                    court before a judge or jury. The dispute shall be settled
                    by binding arbitration in accordance with the commercial
                    arbitration rules of the American Arbitration Association.
                    Either party may seek any interim or preliminary injunctive
                    relief from any court of competent jurisdiction, as
                    necessary to protect the party’s rights or property pending
                    the completion of arbitration. Any and all legal,
                    accounting, and other costs, fees, and expenses incurred by
                    the prevailing party shall be borne by the non-prevailing
                    party.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Submissions and Privacy
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    In the event that you submit or post any ideas, creative
                    suggestions, designs, photographs, information,
                    advertisements, data or proposals, including ideas for new
                    or improved products, services, features, technologies or
                    promotions, you expressly agree that such submissions will
                    automatically be treated as non-confidential and
                    non-proprietary and will become the sole property of Chain
                    Joes without any compensation or credit to you whatsoever.
                    Chain Joes and its affiliates shall have no obligations with
                    respect to such submissions or posts and may use the ideas
                    contained in such submissions or posts for any purposes in
                    any medium in perpetuity, including, but not limited to,
                    developing, manufacturing, and marketing products and
                    services using such ideas.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Promotions
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Chain Joes may, from time to time, include contests,
                    promotions, sweepstakes, or other activities (“Promotions”)
                    that require you to submit material or information
                    concerning yourself. Please note that all Promotions may be
                    governed by separate rules that may contain certain
                    eligibility requirements, such as restrictions as to age and
                    geographic location. You are responsible to read all
                    Promotions rules to determine whether or not you are
                    eligible to participate. If you enter any Promotion, you
                    agree to abide by and to comply with all Promotions Rules.
                    Additional terms and conditions may apply to purchases of
                    goods or services on or through the Services, which terms
                    and conditions are made a part of this Agreement by this
                    reference.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Typographical Errors
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    In the event a product and/or service is listed at an
                    incorrect price or with incorrect information due to
                    typographical error, we shall have the right to refuse or
                    cancel any orders placed for the product and/or service
                    listed at the incorrect price. We shall have the right to
                    refuse or cancel any such order whether or not the order has
                    been confirmed and your credit card charged. If your credit
                    card has already been charged for the purchase and your
                    order is canceled, we shall immediately issue a credit to
                    your credit card account or other payment account in the
                    amount of the charge.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Miscellaneous
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    If for any reason a court of competent jurisdiction finds
                    any provision or portion of these Terms & Conditions to be
                    unenforceable, the remainder of these Terms & Conditions
                    will continue in full force and effect. Any waiver of any
                    provision of these Terms & Conditions will be effective only
                    if in writing and signed by an authorized representative of
                    Chain Joes. Chain Joes will be entitled to injunctive or
                    other equitable relief (without the obligations of posting
                    any bond or surety) in the event of any breach or
                    anticipatory breach by you. Chain Joes operates and controls
                    the Chain Joes Service from its offices in Netherlands. The
                    Service is not intended for distribution to or use by any
                    person or entity in any jurisdiction or country where such
                    distribution or use would be contrary to law or regulation.
                    Accordingly, those persons who choose to access the Chain
                    Joes Service from other locations do so on their own
                    initiative and are solely responsible for compliance with
                    local laws, if and to the extent local laws are applicable.
                    These Terms & Conditions (which include and incorporate the
                    Chain Joes Privacy Policy) contains the entire
                    understanding, and supersedes all prior understandings,
                    between you and Chain Joes concerning its subject matter,
                    and cannot be changed or modified by you. The section
                    headings used in this Agreement are for convenience only and
                    will not be given any legal import.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Disclaimer
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Chain Joes is not responsible for any content, code or any
                    other imprecision. Chain Joes does not provide warranties or
                    guarantees. In no event shall Chain Joes be liable for any
                    special, direct, indirect, consequential, or incidental
                    damages or any damages whatsoever, whether in an action of
                    contract, negligence or other tort, arising out of or in
                    connection with the use of the Service or the contents of
                    the Service. Chain Joes reserves the right to make
                    additions, deletions, or modifications to the contents on
                    the Service at any time without prior notice. The Chain Joes
                    Service and its contents are provided "as is" and "as
                    available" without any warranty or representations of any
                    kind, whether express or implied. Chain Joes is a
                    distributor and not a publisher of the content supplied by
                    third parties; as such, Chain Joes exercises no editorial
                    control over such content and makes no warranty or
                    representation as to the accuracy, reliability or currency
                    of any information, content, service or merchandise provided
                    through or accessible via the Chain Joes Service. Without
                    limiting the foregoing, Chain Joes specifically disclaims
                    all warranties and representations in any content
                    transmitted on or in connection with the Chain Joes Service
                    or on sites that may appear as links on the Chain Joes
                    Service, or in the products provided as a part of, or
                    otherwise in connection with, the Chain Joes Service,
                    including without limitation any warranties of
                    merchantability, fitness for a particular purpose or
                    non-infringement of third party rights. No oral advice or
                    written information given by Chain Joes or any of its
                    affiliates, employees, officers, directors, agents, or the
                    like will create a warranty. Price and availability
                    information is subject to change without notice. Without
                    limiting the foregoing, Chain Joes does not warrant that the
                    Chain Joes Service will be uninterrupted, uncorrupted,
                    timely, or error-free.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Contact Us
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Don't hesitate to contact us if you have any questions via
                    Email:{" "}
                    <a
                      href="mailto:
                    info@chainjoes.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "#44F4C3" }}
                    >
                      info@chainjoes.com
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Terms;
