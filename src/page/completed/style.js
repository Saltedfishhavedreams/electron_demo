import styled from "styled-components";

export const CompleteWrapper = styled.div`
  &>ul {
    margin-top: 34px;
  }

  &>ul>li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    line-height: 42px;
    color: #4c4c4c;

    .task-info {
      margin-left: 80px;
    }

    .icon {
      margin-right: 82px;
      width: 17px;
      height: 20px;
      background: url(${require('../../assets/img/flag.png').default});
      background-size: 17px 20px;
    }
  }

  .warning-words {
    position: absolute;
    left: 52px;
    bottom: 78px;

    .count {
      color: #61d09a;
    }
  }
`
