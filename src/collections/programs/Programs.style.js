import styled from "styled-components";

export const ProgramsWrapper = styled.div`
  a {
    color: ${(props) => props.theme.keppelColor};
    overflow-wrap: break-word;
  }
  img {
    width: 19vw;
    float: right;
    margin-left: 40px;
    margin-bottom: 30px;
    &.hacktoberfest-img {
      width: 50%;

      @media only screen and (max-width: 768px) {
        width: 27vw;
      }
    }
    @media only screen and (max-width: 572px) {
      display: block;
      float: none;
      width: 35vw;
      margin: 0 auto 40px auto;
      &.hacktoberfest-img {
        width: 50vw;
      }
    }
  }

  .flex-div {
    flex-grow: 0.25;
  }

  .iframe-container {
    position: relative;
    float: right;

    @media only screen and (max-width: 572px) {
      float: none;
      margin-left: 0px;
      overflow: hidden;

      iframe {
        border: 0;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
      }
    }
  }

  .apply-button {
    position: relative;
    text-align: center;
    vertical-align: bottom;
  }
  .gsod-table-container {
    overflow-x: auto;
  }
  .mlh_logo {
    width: 19vw;
    float: right;
    margin-left: 40px;
    margin-bottom: 30px;
    .mlh_svg__cls-1 {
      transition: fill 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      fill: ${(props) => props.theme.whiteToBlack};
    }
    @media only screen and (max-width: 572px) {
      display: block;
      float: none;
      width: 35vw;
      margin: 0 auto 40px auto;
    }
  }

  .sca_logo {
    width: 19vw;
    float: right;
    margin-left: 40px;
    margin-bottom: 30px;
    .sca_svg__fil0,
    .sca_svg__fil6 {
      transition: fill 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      fill: ${(props) => props.theme.whiteToBlack};
    }
    @media only screen and (max-width: 572px) {
      display: block;
      float: none;
      width: 35vw;
      margin: 0 auto 40px auto;
    }
  }
  .lfx_logo {
    width: 19vw;
    float: right;
    margin-left: 40px;
    margin-bottom: 30px;
    .lfx-white_svg__b {
      transition: fill 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      fill: ${(props) => props.theme.whiteToBlue003764};
    }
    .lfx-white_svg__c {
      transition: fill 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      fill: ${(props) => props.theme.whiteToBlue0096d6};
    }
    @media only screen and (max-width: 572px) {
      display: block;
      float: none;
      width: 35vw;
      margin: 0 auto 40px auto;
    }
  }
  .lfx-timeline_terms {
    list-style: none;
  }
  .tutorials-table {
    border-spacing: 0;
    th {
      padding: 14px 0 14px 12px;
      border-top: 1px solid #e3e3e3;
      border-bottom: 1px solid #e3e3e3;
    }
    td {
      padding: 14px 0 14px 12px;
      border-bottom: 1px solid #e3e3e3;
    }
    tbody tr {
      transition: 0.2s ease;
      :hover {
        background-color: ${(props) => props.theme.green3C494FToGreyF5F5F5};
      }
    }
  }
`;
