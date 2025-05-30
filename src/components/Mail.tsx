import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Mail = () => {
  const handleClick = () => {
    const email = "cemumut23@gmail.com"; // Burada göndereceğiniz mail adresini yazın
    const subject = ""; // İstediğiniz konu başlığını buraya yazabilirsiniz
    const body = "Mesajınızı buraya yazabilirsiniz."; // E-posta içeriği
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  // Dil seçeneği
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <button className="bt" id="bt" onClick={handleClick}>
        <span className="msg" id="msg" />
        {t("about.mail")}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .bt {
    border: none;
    user-select: none;
    font-size: 18px;
    color: white;
    text-align: center;
    background-color: #d1a54c;
    box-shadow: #cacaca 2px 2px 10px 1px;
    border-radius: 12px;
    height: 60px;
    line-height: 60px;
    width: 155px;
    transition: all 0.2s ease;
    position: relative;
  }

  .msg {
    height: 0;
    width: 0;
    border-radius: 2px;
    position: absolute;
    left: 15%;
    top: 25%;
  }

  .bt:active {
    transition: all 0.001s ease;
    background-color: #5d9fcd;
    box-shadow: #97989a 0 0 0 0;
    transform: translateX(1px) translateY(1px);
  }

  .bt:hover .msg {
    animation: msgRun 2s forwards;
  }

  @keyframes msgRun {
    0% {
      border-top: #d6d6d9 0 solid;
      border-bottom: #f2f2f5 0 solid;
      border-left: #f2f2f5 0 solid;
      border-right: #f2f2f5 0 solid;
    }

    20% {
      border-top: #d6d6d9 14px solid;
      border-bottom: #f2f2f5 14px solid;
      border-left: #f2f2f5 20px solid;
      border-right: #f2f2f5 20px solid;
    }

    25% {
      border-top: #d6d6d9 12px solid;
      border-bottom: #f2f2f5 12px solid;
      border-left: #f2f2f5 18px solid;
      border-right: #f2f2f5 18px solid;
    }

    80% {
      border-top: transparent 12px solid;
      border-bottom: transparent 12px solid;
      border-left: transparent 18px solid;
      border-right: transparent 18px solid;
    }

    100% {
      transform: translateX(150px);
      border-top: transparent 12px solid;
      border-bottom: transparent 12px solid;
      border-left: transparent 18px solid;
      border-right: transparent 18px solid;
    }
  }
`;

export default Mail;
