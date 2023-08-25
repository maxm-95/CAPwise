import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { glogo, language, grlogo, r20, g6, g7 } from "../../assets";
import { navLinks, header1, en } from "../../constants";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from "../../style";

import classNames from "classnames";
import { MenuList } from "@mui/material";

const Header = () => {
  // const [active, setActive] = useState("Home");
  // const [toggle, setToggle] = useState(false);
  const [imageSrc, setImageSrc] = useState(glogo);
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    console.log("here");
    setAnchorEl(event.currentTarget);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  const handleMouseOver = () => {
    setImageSrc(grlogo);
  };

  const handleMouseOut = () => {
    setImageSrc(glogo);
  };

  const handleLink = (link) => {
    navigate(link);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full flex justify-center">
      {isScrolled ? (
        <nav
          className={`w-[98%] flex flex-col flex-shrink-0 py-3 px-16 ml-3 rounded-[50px] mt-3  justify-between items-center navbar inset-x-0 bg-[#0B1620] fixed z-20  backdrop-filter max-sm:justify-between`}
        >
          <div className="flex flex-row justify-between w-full max-sm:flex max-sm:justify-between">
            <div className="flex">
              <div className=" bank__image flex items-center hover:text-green-400 cursor-pointer mr-5">
                {/* <img
                  src={imageSrc}
                  alt="capiwise"
                  className="w-[72px] h-[15px] min-w-[60px]"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="14"
                  viewBox="0 0 53 14"
                  fill="none"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <path
                    d="M8.18684 2.39901C8.18684 2.5967 8.13247 2.76969 8.02374 2.91796C7.91501 3.05635 7.79145 3.16509 7.65306 3.24416C7.39605 3.07612 7.10939 2.92291 6.79307 2.78452C6.47675 2.64613 6.0863 2.57693 5.62171 2.57693C4.78149 2.57693 4.10932 2.84877 3.60519 3.39244C3.11094 3.93611 2.86382 4.72196 2.86382 5.74999C2.86382 6.79779 3.12083 7.58364 3.63484 8.10754C4.14886 8.63144 4.8408 8.89339 5.71067 8.89339C6.16538 8.89339 6.55583 8.83408 6.88203 8.71546C7.21812 8.58696 7.51467 8.43868 7.77167 8.27064C7.91006 8.3596 8.02374 8.48317 8.1127 8.64132C8.20167 8.7896 8.24615 8.96258 8.24615 9.16028C8.24615 9.32833 8.20167 9.48154 8.1127 9.61993C8.02374 9.75832 7.87547 9.88188 7.66788 9.99061C7.47019 10.1092 7.18847 10.218 6.82272 10.3168C6.46687 10.4255 6.02205 10.4799 5.48826 10.4799C4.83586 10.4799 4.22794 10.386 3.6645 10.1982C3.11094 10.0005 2.62658 9.70889 2.21142 9.32338C1.79625 8.92799 1.47005 8.43374 1.23281 7.84065C0.995572 7.24755 0.876953 6.55067 0.876953 5.74999C0.876953 4.97897 0.995572 4.30185 1.23281 3.71864C1.47005 3.12555 1.79131 2.6313 2.19659 2.2359C2.61175 1.83062 3.09117 1.52419 3.63484 1.31661C4.1884 1.10903 4.77161 1.00523 5.38447 1.00523C5.80952 1.00523 6.19503 1.04477 6.541 1.12385C6.88698 1.19305 7.18352 1.2919 7.43065 1.4204C7.67777 1.5489 7.86558 1.69718 7.99409 1.86522C8.12259 2.03326 8.18684 2.21119 8.18684 2.39901Z"
                    fill="white"
                  />
                  <path
                    d="M11.7375 9.04166C12.0242 9.04166 12.2862 9.01695 12.5234 8.96753C12.7606 8.90822 12.9336 8.83902 13.0424 8.75994V7.11411L11.6041 7.24755C11.2087 7.28709 10.9072 7.37606 10.6996 7.51444C10.4921 7.64295 10.3883 7.85053 10.3883 8.13719C10.3883 8.42386 10.4921 8.64627 10.6996 8.80442C10.9171 8.96258 11.2631 9.04166 11.7375 9.04166ZM11.6782 3.00693C12.647 3.00693 13.418 3.21451 13.9913 3.62968C14.5745 4.04484 14.8661 4.68736 14.8661 5.55723V8.98235C14.8661 9.21959 14.8068 9.4074 14.6882 9.54579C14.5696 9.68418 14.4213 9.80774 14.2434 9.91648C13.9666 10.0845 13.6157 10.218 13.1906 10.3168C12.7656 10.4157 12.2812 10.4651 11.7375 10.4651C10.7491 10.4651 9.96815 10.2773 9.39483 9.90165C8.83139 9.51614 8.54967 8.94281 8.54967 8.18168C8.54967 7.51939 8.75725 7.01526 9.17242 6.66928C9.59747 6.31343 10.2103 6.09596 11.011 6.01688L13.0424 5.8093V5.54241C13.0424 5.16678 12.904 4.89 12.6272 4.71207C12.3603 4.53414 11.9797 4.44518 11.4855 4.44518C11.1 4.44518 10.7243 4.49461 10.3586 4.59346C9.99286 4.68242 9.66666 4.7961 9.38 4.93448C9.27126 4.8554 9.17736 4.75161 9.09828 4.62311C9.02908 4.48472 8.99449 4.33645 8.99449 4.17829C8.99449 3.98059 9.03897 3.82243 9.12793 3.70381C9.22678 3.57531 9.38 3.46163 9.58758 3.36278C9.87424 3.24417 10.2004 3.1552 10.5662 3.09589C10.9319 3.03658 11.3026 3.00693 11.6782 3.00693Z"
                    fill="white"
                  />
                  <path
                    d="M19.2673 10.4503C18.9807 10.4503 18.7138 10.4206 18.4666 10.3613C18.2294 10.3119 18.0119 10.2476 17.8142 10.1685V12.8968C17.7253 12.9165 17.6067 12.9413 17.4584 12.9709C17.3101 13.0006 17.1421 13.0154 16.9542 13.0154C16.6083 13.0154 16.3513 12.9511 16.1832 12.8226C16.0152 12.6941 15.9312 12.4668 15.9312 12.1406V4.62311C15.9312 4.38587 15.9756 4.19312 16.0646 4.04484C16.1635 3.89657 16.3167 3.75818 16.5243 3.62968C16.8109 3.46163 17.1668 3.3183 17.5918 3.19968C18.0169 3.07118 18.4963 3.00693 19.0301 3.00693C19.5737 3.00693 20.0729 3.08106 20.5276 3.22934C20.9922 3.36773 21.3926 3.59014 21.7287 3.89657C22.0647 4.19312 22.3267 4.57369 22.5145 5.03828C22.7023 5.50287 22.7962 6.05642 22.7962 6.69894C22.7962 7.32169 22.7073 7.86536 22.5293 8.32995C22.3514 8.79454 22.1043 9.18499 21.788 9.50131C21.4815 9.81763 21.1108 10.0549 20.6759 10.213C20.2509 10.3712 19.7813 10.4503 19.2673 10.4503ZM18.9856 8.9527C19.5787 8.9527 20.0433 8.76983 20.3794 8.40409C20.7155 8.03834 20.8835 7.46996 20.8835 6.69894C20.8835 5.89826 20.7105 5.32988 20.3645 4.99379C20.0186 4.65771 19.5737 4.48966 19.0301 4.48966C18.7632 4.48966 18.5259 4.52426 18.3184 4.59346C18.1207 4.66265 17.9477 4.73679 17.7994 4.81587V8.6265C17.9576 8.72535 18.1306 8.80443 18.3184 8.86373C18.5161 8.92304 18.7385 8.9527 18.9856 8.9527Z"
                    fill="white"
                  />
                  <path
                    d="M23.6232 3.27382C23.7023 3.25405 23.816 3.22934 23.9642 3.19968C24.1224 3.17003 24.2905 3.1552 24.4684 3.1552C24.8242 3.1552 25.0812 3.21945 25.2394 3.34796C25.4074 3.47646 25.4915 3.70381 25.4915 4.03002V10.2279C25.4124 10.2476 25.2938 10.2723 25.1356 10.302C24.9873 10.3316 24.8242 10.3465 24.6463 10.3465C24.2904 10.3465 24.0285 10.2822 23.8605 10.1537C23.7023 10.0252 23.6232 9.79786 23.6232 9.47166V3.27382ZM23.4749 1.12385C23.4749 0.837191 23.5738 0.59501 23.7715 0.397312C23.9791 0.189729 24.241 0.0859375 24.5573 0.0859375C24.8737 0.0859375 25.1307 0.189729 25.3284 0.397312C25.5261 0.59501 25.6249 0.837191 25.6249 1.12385C25.6249 1.4204 25.5261 1.67247 25.3284 1.88005C25.1307 2.07775 24.8737 2.1766 24.5573 2.1766C24.241 2.1766 23.9791 2.07775 23.7715 1.88005C23.5738 1.67247 23.4749 1.4204 23.4749 1.12385Z"
                    fill="white"
                  />
                  <path
                    d="M31.4089 5.69068C31.3001 6.09596 31.1815 6.50618 31.053 6.92135C30.9344 7.33652 30.8108 7.7418 30.6823 8.13719C30.5637 8.52271 30.4451 8.8835 30.3265 9.21959C30.2177 9.55568 30.1238 9.84234 30.0448 10.0796C29.936 10.1587 29.7976 10.2229 29.6296 10.2723C29.4615 10.3316 29.249 10.3613 28.992 10.3613C28.7054 10.3613 28.4533 10.3218 28.2358 10.2427C28.0282 10.1537 27.8849 10.0252 27.8058 9.85717C27.6872 9.61993 27.5538 9.2443 27.4055 8.73029C27.2572 8.20639 27.104 7.63801 26.9458 7.02514C26.7877 6.40239 26.6394 5.7747 26.501 5.14207C26.3725 4.49955 26.2638 3.94105 26.1748 3.46658C26.2737 3.36773 26.4071 3.27876 26.5752 3.19968C26.7531 3.11072 26.9458 3.06624 27.1534 3.06624C27.4302 3.06624 27.6477 3.13543 27.8058 3.27382C27.964 3.40232 28.0678 3.61485 28.1172 3.9114C28.305 5.09759 28.4829 6.10585 28.651 6.93618C28.819 7.75663 28.9376 8.31512 29.0068 8.61167H29.0662C29.1057 8.44363 29.1699 8.1965 29.2589 7.8703C29.3578 7.5441 29.4665 7.16847 29.5851 6.74342C29.7136 6.31837 29.8471 5.86367 29.9854 5.3793C30.1337 4.89494 30.282 4.40564 30.4303 3.9114C30.5687 3.83232 30.712 3.77301 30.8603 3.73347C31.0184 3.68404 31.2013 3.65933 31.4089 3.65933C31.6758 3.65933 31.8982 3.70381 32.0761 3.79278C32.2639 3.88174 32.3875 4.01519 32.4468 4.19312C32.5951 4.66759 32.7335 5.13218 32.862 5.58689C33.0003 6.04159 33.1239 6.46664 33.2326 6.86204C33.3414 7.24755 33.4353 7.59352 33.5144 7.89996C33.6033 8.20639 33.6725 8.44363 33.7219 8.61167H33.7961C33.9641 7.79122 34.1371 6.93618 34.315 6.04654C34.5029 5.15689 34.661 4.2376 34.7895 3.28865C34.9081 3.21945 35.0416 3.16509 35.1898 3.12555C35.3381 3.08601 35.4864 3.06624 35.6347 3.06624C35.8917 3.06624 36.0993 3.12555 36.2574 3.24416C36.4255 3.36278 36.5095 3.55554 36.5095 3.82243C36.5095 3.96082 36.4798 4.18817 36.4205 4.50449C36.3612 4.81092 36.2821 5.16678 36.1833 5.57206C36.0943 5.96746 35.9905 6.39251 35.8719 6.84721C35.7632 7.29203 35.6495 7.72697 35.5309 8.15202C35.4123 8.56719 35.2986 8.94776 35.1898 9.29373C35.0811 9.62981 34.9872 9.89176 34.9081 10.0796C34.8093 10.1587 34.6561 10.2229 34.4485 10.2723C34.2508 10.3316 34.0333 10.3613 33.7961 10.3613C33.1733 10.3613 32.8026 10.2081 32.684 9.90165C32.6049 9.68418 32.511 9.41729 32.4023 9.10097C32.2936 8.78465 32.1799 8.43868 32.0613 8.06306C31.9525 7.68743 31.8389 7.29698 31.7203 6.8917C31.6115 6.48641 31.5077 6.08608 31.4089 5.69068Z"
                    fill="white"
                  />
                  <path
                    d="M37.2228 3.27382C37.3019 3.25405 37.4156 3.22934 37.5639 3.19968C37.722 3.17003 37.8901 3.1552 38.068 3.1552C38.4239 3.1552 38.6809 3.21945 38.839 3.34796C39.0071 3.47646 39.0911 3.70381 39.0911 4.03002V10.2279C39.012 10.2476 38.8934 10.2723 38.7352 10.302C38.587 10.3316 38.4239 10.3465 38.2459 10.3465C37.8901 10.3465 37.6281 10.2822 37.4601 10.1537C37.3019 10.0252 37.2228 9.79786 37.2228 9.47166V3.27382ZM37.0746 1.12385C37.0746 0.837191 37.1734 0.59501 37.3711 0.397312C37.5787 0.189729 37.8406 0.0859375 38.157 0.0859375C38.4733 0.0859375 38.7303 0.189729 38.928 0.397312C39.1257 0.59501 39.2245 0.837191 39.2245 1.12385C39.2245 1.4204 39.1257 1.67247 38.928 1.88005C38.7303 2.07775 38.4733 2.1766 38.157 2.1766C37.8406 2.1766 37.5787 2.07775 37.3711 1.88005C37.1734 1.67247 37.0746 1.4204 37.0746 1.12385Z"
                    fill="white"
                  />
                  <path
                    d="M45.7202 8.25581C45.7202 8.94776 45.4632 9.49143 44.9492 9.88682C44.4352 10.2723 43.6839 10.4651 42.6954 10.4651C42.2901 10.4651 41.9195 10.4354 41.5834 10.3761C41.2572 10.3168 40.9705 10.2328 40.7234 10.1241C40.4861 10.0054 40.2983 9.86705 40.1599 9.70889C40.0314 9.54085 39.9672 9.35798 39.9672 9.16028C39.9672 8.97247 40.0067 8.80937 40.0858 8.67098C40.1748 8.53259 40.2885 8.41891 40.4268 8.32995C40.7036 8.50788 41.0199 8.66604 41.3758 8.80442C41.7415 8.94281 42.1616 9.01201 42.6361 9.01201C43.0414 9.01201 43.3478 8.94776 43.5554 8.81925C43.763 8.68086 43.8668 8.49305 43.8668 8.25581C43.8668 7.85053 43.5702 7.58364 42.9771 7.45514L42.1468 7.26238C41.4153 7.09434 40.8717 6.84227 40.5158 6.50618C40.1698 6.1701 39.9968 5.72033 39.9968 5.1569C39.9968 4.51438 40.2539 3.99542 40.7679 3.60002C41.2819 3.19474 42.0035 2.9921 42.9327 2.9921C43.2885 2.9921 43.6147 3.02175 43.9113 3.08106C44.2177 3.13049 44.4797 3.20957 44.6971 3.3183C44.9245 3.41715 45.0975 3.54071 45.2161 3.68899C45.3446 3.82737 45.4088 3.99048 45.4088 4.17829C45.4088 4.35622 45.3693 4.51438 45.2902 4.65276C45.2111 4.78127 45.1172 4.88506 45.0085 4.96414C44.9195 4.90483 44.8009 4.84552 44.6526 4.78621C44.5143 4.7269 44.3561 4.67253 44.1782 4.62311C44.0101 4.57369 43.8272 4.53415 43.6296 4.50449C43.4417 4.46495 43.2539 4.44518 43.0661 4.44518C42.6806 4.44518 42.3791 4.50943 42.1616 4.63794C41.9442 4.75656 41.8354 4.92954 41.8354 5.1569C41.8354 5.32494 41.8948 5.46333 42.0134 5.57206C42.1419 5.68079 42.3593 5.76976 42.6658 5.83895L43.3923 6.01688C44.2128 6.20469 44.8059 6.48147 45.1716 6.84721C45.5373 7.20307 45.7202 7.6726 45.7202 8.25581Z"
                    fill="white"
                  />
                  <path
                    d="M48.0329 7.57375C48.1713 8.07788 48.4283 8.44363 48.804 8.67098C49.1796 8.89833 49.6442 9.01201 50.1977 9.01201C50.6129 9.01201 50.9935 8.9527 51.3395 8.83408C51.6953 8.70558 51.982 8.57213 52.1994 8.43374C52.3378 8.51282 52.4515 8.62155 52.5405 8.75994C52.6294 8.89833 52.6739 9.04661 52.6739 9.20476C52.6739 9.40246 52.6047 9.58039 52.4663 9.73855C52.3378 9.88682 52.155 10.0153 51.9177 10.1241C51.6904 10.2328 51.4185 10.3168 51.1022 10.3761C50.7859 10.4354 50.4449 10.4651 50.0791 10.4651C49.4959 10.4651 48.9621 10.386 48.4778 10.2279C48.0033 10.0697 47.5931 9.83246 47.2471 9.51614C46.911 9.18994 46.6441 8.7896 46.4464 8.31512C46.2586 7.84065 46.1647 7.28709 46.1647 6.65446C46.1647 6.04159 46.2586 5.50781 46.4464 5.0531C46.6342 4.5984 46.8863 4.21783 47.2026 3.9114C47.5288 3.60496 47.9044 3.37761 48.3295 3.22934C48.7545 3.08106 49.2043 3.00693 49.6788 3.00693C50.1631 3.00693 50.608 3.08601 51.0132 3.24416C51.4185 3.39244 51.7645 3.60496 52.0512 3.88174C52.3378 4.14863 52.5602 4.47484 52.7184 4.86035C52.8864 5.23597 52.9705 5.6462 52.9705 6.09102C52.9705 6.3678 52.8963 6.57538 52.7481 6.71377C52.6097 6.85216 52.412 6.94112 52.155 6.98066L48.0329 7.57375ZM49.6788 4.41553C49.1944 4.41553 48.7891 4.57863 48.4629 4.90483C48.1367 5.22115 47.9539 5.67585 47.9143 6.26895L51.206 5.77964C51.1665 5.4139 51.0231 5.09758 50.776 4.83069C50.5289 4.55392 50.1631 4.41553 49.6788 4.41553Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="xs:hidden ml-4 ">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuList>
                  <MenuItem component={Link} to="/">
                    Home
                  </MenuItem>
                  <MenuItem component={Link} to="/about_us">
                    About
                  </MenuItem>
                  <MenuItem component={Link} to="/contact">
                    Contact
                  </MenuItem>
                  <MenuItem onClick={handleOpenModal}>
                    Get early access
                  </MenuItem>
                </MenuList>
              </Menu>
              <div
                className={classNames("hidden xs:block", {
                  block: isMenuOpen,
                })}
              >
                <ul className="list-none flex items-center">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`cursor-pointer text-sm not-italic font-normal focus:bg-black border-none  ${(index =
                        navLinks.length - 1
                          ? "mr-0"
                          : "mr-5")} text-white mr-4`}
                    >
                      <button
                        className="text-white  border-none rounded-[50px] px-3 py-1 "
                        onClick={() => handleLink(nav.id)}
                      >
                        <Link to={`${nav.id}`}>{nav.title}</Link>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className=" text-white  border rounded-[50px] px-2 py-1 w-[126px] h-auto bg-[#2EBD85] border-[#2EBD85] max-ss:hidden "
              onClick={handleOpenModal}
            >
              <p className="text-sm not-italic font-medium">{header1}</p>
            </button>
            <ReactModal
              isOpen={showModal}
              onRequestClose={handleCloseModal}
              ariaHideApp={false}
              style={{
                content: {
                  padding: 0,
                  marginTop: "7%",
                  marginLeft: "8%",
                  maxHeight: "76%",
                  maxWidth: "80%",
                  flexDirection: "row",
                  justifyContent: "center",
                },
              }}
              data={{ background: "green" }}
            >
              <div
                className="bg-no-repeat bg-cover w-full h-full"
                style={{ backgroundImage: `url(${r20})` }}
              >
                <div className="flex justify-end">
                  <button onClick={handleCloseModal} className="fixed">
                    <img
                      alt="arrow1"
                      src={g7}
                      className="w-[25px] h-[25px] mt-2 mr-2"
                    />
                  </button>
                </div>
                <div className="w-full flex flex-row">
                  <div className="w-1/3 flex flex-col justify-center max-lg:w-full">
                    <div className="px-10 py-20 max-ss:px-8 max-ss:py-6 h-full">
                      <p className="font-bold text-[32px] max-ss:text-[32px] ">
                        Unlock the Future <br /> of Investing
                      </p>
                      <p className="mt-12 font-bold text-[16px]">
                        Join the waitlist and get a head <br /> start on
                        "Exclusive Launch Offers!"
                      </p>
                      <div className="flex flex-col mt-12">
                        <input
                          placeholder="File name"
                          className="px-3 py-2 rounded-[8px] w-[300px] h-[40px] border-black"
                        ></input>
                        <input
                          placeholder="E-mail"
                          className="mt-8 px-3 py-2 rounded-[8px] w-[300px] h-[40px] border-black"
                        ></input>
                      </div>
                      <div className="mt-8">
                        <button className="bg-black rounded-[8px] w-[180px] h-[32px] text-white">
                          {header1}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-2/3 flex justify-center items-center max-lg:hidden">
                    <img
                      alt="arrow1"
                      src={g6}
                      className="w-[800px] h-[540px]"
                    />
                  </div>
                </div>
              </div>
            </ReactModal>
          </div>
        </nav>
      ) : (
        <nav
          className={`w-full flex bg-[#0B1620] px-10 py-4 fixed z-20 backdrop-filter max-ss:px-2`}
        >
          <div className="flex flex-col w-1/2 justify-around max-md:flex-row max-md:justify-start">
            <div className="flex cursor-pointer max-md:items-center">
              <img
                src={imageSrc}
                alt="capiwise"
                className="w-[72px] h-[15px] min-w-[60px]"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
            </div>
            <div className="ss:hidden ml-4">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuList>
                <MenuItem component={Link} to="/">
                  Home
                </MenuItem>
                <MenuItem component={Link} to="/about_us">
                  About
                </MenuItem>
                <MenuItem component={Link} to="/contact">
                  Contact
                </MenuItem>
                <MenuItem onClick={handleOpenModal}>Get early access</MenuItem>
              </MenuList>
            </Menu>
            <div
              className={classNames("hidden ss:block", { block: isMenuOpen })}
            >
              <ul className="list-none flex items-center">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-sm not-italic font-normal focus:bg-black border-none  ${(index =
                      navLinks.length - 1 ? "mr-0" : "mr-5")} text-white mr-4`}
                  >
                    <button
                      className="text-white  border-none rounded-[50px] px-3 py-1 "
                      onClick={() => handleLink(nav.id)}
                    >
                      <Link to={`${nav.id}`}>{nav.title}</Link>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex w-1/2 flex-col justify-center items-end max-md:flex-row max-md:justify-end max-sm:justify-center">
            <button
              className=" text-white border-white border rounded-full px-3 py-1 w-[130px] hover:bg-[#2EBD85] hover:border-[#2EBD85] max-ss:hidden"
              onClick={handleOpenModal}
            >
              <span className="text-sm not-italic font-medium">{header1}</span>
            </button>
            <ReactModal
              isOpen={showModal}
              onRequestClose={handleCloseModal}
              ariaHideApp={false}
              style={{
                content: {
                  padding: 0,
                  marginTop: "7%",
                  marginLeft: "8%",
                  maxHeight: "76%",
                  maxWidth: "80%",
                  flexDirection: "row",
                  justifyContent: "center",
                },
              }}
              data={{ background: "green" }}
            >
              <div
                className="bg-no-repeat bg-cover w-full h-full"
                style={{ backgroundImage: `url(${r20})` }}
              >
                <div className="flex justify-end">
                  <button onClick={handleCloseModal} className="fixed">
                    <img
                      alt="arrow1"
                      src={g7}
                      className="w-[25px] h-[25px] mt-2 mr-2"
                    />
                  </button>
                </div>
                <div className="w-full flex flex-row">
                  <div className="w-1/3 flex flex-col justify-center max-lg:w-full">
                    <div className="px-10 py-20 max-ss:px-8 max-ss:py-6 h-full">
                      <p className="font-bold text-[32px] max-ss:text-[32px] ">
                        Unlock the Future <br /> of Investing
                      </p>
                      <p className="mt-12 font-bold text-[16px]">
                        Join the waitlist and get a head <br /> start on
                        "Exclusive Launch Offers!"
                      </p>
                      <div className="flex flex-col mt-12">
                        <input
                          placeholder="File name"
                          className="px-3 py-2 rounded-[8px] w-[300px] h-[40px] border-black"
                        ></input>
                        <input
                          placeholder="E-mail"
                          className="mt-8 px-3 py-2 rounded-[8px] w-[300px] h-[40px] border-black"
                        ></input>
                      </div>
                      <div className="mt-8">
                        <button className="bg-black rounded-[8px] w-[180px] h-[32px] text-white">
                          {header1}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-2/3 flex justify-center items-center max-lg:hidden">
                    <img
                      alt="arrow1"
                      src={g6}
                      className="w-[800px] h-[540px]"
                    />
                  </div>
                </div>
              </div>
            </ReactModal>
            <div className="flex flex-row cursor-pointer mt-2 ml-4 md:items-center md:justify-center max-sm:mb-3">
              <div>
                <img
                  src={language}
                  alt="capiwise"
                  className="w-[14px] h-[16px] mr-1"
                />
              </div>
              <div className="md:pb-1">
                <p className="text-white  text-sm not-italic font-normal ">
                  {en}
                </p>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
