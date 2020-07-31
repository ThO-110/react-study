import React from "react";

const detailList = [
  { id: 1, title: "message 01", content: "AAAAAA" },
  { id: 3, title: "message 03", content: "BBBBBB" },
  { id: 5, title: "message 05", content: "CCCCCC" },
  { id: 7, title: "message 07", content: "DDDDDD" },
];

export default function MessageDetail(props) {
  const { id } = props.match.params;
  const detail = detailList.find((item) => item.id === id * 1);
  return (
    <ul>
      <li>{`id: ${detail.id}`}</li>
      <li>{`title: ${detail.title}`}</li>
      <li>{`content: ${detail.content}`}</li>
    </ul>
  );
}
