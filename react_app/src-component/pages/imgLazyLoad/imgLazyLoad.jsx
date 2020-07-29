import React, { Component } from "react";
import "./imgLazyLoad.css";

const imgSrc = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595593006819&di=fda7e3cf39819af4e2d3fc0396a94747&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1906041242%2C3606142835%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D900",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595593006818&di=bb742291d6c311b2773593a065c3a9e6&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D3799561436%2C2435165228%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D900",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595593006818&di=156af7805e7f8b61eb068d103e8114b3&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D2838864980%2C1851059100%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1000%26h%3D858",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595593006818&di=3b24dd61c3e4fa7622f17f08b7a5655a&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D988813147%2C3006366997%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1000%26h%3D858",
];

var images = [];

const loading = (bol) => {
  const footer = document.getElementById("footer");
  if (bol) {
    footer.innerHTML = "loading...";
  } else {
    footer.innerHTML = "loading more images";
  }
};

for (let i = 0; i < 4; i++) {
  images.push(<img src={imgSrc[i]} key={i} alt="logo" />);
}

const thresholds = [0.5];
const io = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    if (item.intersectionRatio > 0.3) {
      loading(true);
      setTimeout(() => {
        insertImg(2);
        loading(false);
      }, 2000);
    }
  });
});

const insertImg = (num) => {
  const box = document.getElementById("img-box");
  for (let i = 0; i < num; i++) {
    let el = document.createElement("img");
    const index = Math.floor(Math.random() * 4);
    el.src = imgSrc[index];
    el.alt = "logo";
    box.appendChild(el);
  }
};

const onload = () => {
  io.observe(document.querySelector("#footer"));
};

const imgContainer = () => {
  return (
    <div id="container">
      <h2>Lazy load</h2>
      <div id="img-box">
        {images}
        <img src="" onError={onload} />
      </div>
      <h4 id="footer">loading more images</h4>
    </div>
  );
};

export default imgContainer;
