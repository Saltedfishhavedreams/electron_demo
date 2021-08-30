import styled from "styled-components";

export const NavWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;

  .date-control {
    position: absolute;
    left: 40px;
    top: 57px;
    color: #31c27c;
    font-size: 21px;
    font-weight: 700;
  }

  &>a {
    display: block;
    text-decoration: none;
  }

  .to-do-list, .completed {
    position: absolute;
    width: 105px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    color: #000;
    font-size: 16px;

    &.active {
      background-color: #31c27c;
      color: #fff;
      font-size: 17px;
      border-radius: 7px;
    }
  }

  .to-do-list {
    left: 40px;
    top: 113px;
  }

  .completed {
    left: 40px;
    top: 150px;
  }

  .establish {
    position: absolute;
    bottom: 45px;
    left: 55px;
    display: flex;
    width: 75px;
    height: 30px;
    line-height: 30px;

    .add-icon {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      background-color: #31c27c;
      font-size: 25px;
      border-radius: 50%;
    }

    .text {
      margin-left: 10px;
      color: #000;
    }
  }

  .close-btn {
    position: absolute;
    right: -565px;
    top: 35px;
    font-size: 24px;
    cursor: pointer;
    z-index: 9;
  }
`
