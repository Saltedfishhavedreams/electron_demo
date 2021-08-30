import styled from "styled-components";

export const ToDoListWrapper = styled.div`

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

      .task-time{
        margin-left: 20px;
      }
    }

    .operation {
      margin-right: 82px;
      color: #71cef9;

      span {
        cursor: pointer;
      }

      .del {
        margin-left: 10px;
      }
    }
  }
`
