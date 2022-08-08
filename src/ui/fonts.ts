import { css } from "styled-components";
import { Media } from "./media";

const f1 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  @media (${Media.SM}) {
    font-size: 32px;
    line-height: 37px;
  }

  @media (${Media.MD}) {
    font-size: 40px;
    line-height: 45px;
  }

  @media (${Media.LG}) {
    font-size: 48px;
    line-height: 56px;
  }
`;

const f2 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  @media (${Media.SM}) {
    font-size: 24px;
    line-height: 28px;
  }

  @media (${Media.MD}) {
    font-size: 32px;
    line-height: 37px;
  }

  @media (${Media.LG}) {
    font-size: 40px;
    line-height: 45px;
  }
`;

const f3 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  @media (${Media.SM}) {
    font-size: 16px;
    line-height: 19px;
  }

  @media (${Media.MD}) {
    font-size: 24px;
    line-height: 28px;
  }

  @media (${Media.LG}) {
    font-size: 32px;
    line-height: 37px;
  }
`;

const f4 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  @media (${Media.SM}) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (${Media.MD}) {
    font-size: 32px;
    line-height: 37px;
  }

  @media (${Media.LG}) {
    font-size: 40px;
    line-height: 45px;
  }
`;

const f5 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  @media (${Media.SM}) {
    font-size: 14px;
    line-height: 17px;
  }

  @media (${Media.MD}) {
    font-size: 16px;
    line-height: 19px;
  }

  @media (${Media.SM}) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const fonts = { f1, f2, f3, f4, f5 };
