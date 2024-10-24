// 삼각형 클릭 시 메뉴 토글 및 회전 애니메이션
const triangle = document.querySelector(".triangle");
const menu = document.querySelector(".menu");
let isOpen = false;
const urlbase = "http://127.0.0.1:5500/tmptmp/html/me1age.html";
//메뉴바에 대해서
triangle.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (!isOpen) {
    triangle.style.transform = "rotate(450deg)";
  } else {
    triangle.style.transform = "rotate(90deg)";
  }

  isOpen = !isOpen;
});

// 로그인 버튼 클릭 시 링크 이동
document.addEventListener("DOMContentLoaded", () => {
  // 로그인 버튼 이벤트 리스너
  const loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", () => {
      window.location.href = "loginsuccess.html";
    });
  }

  // 클릭 가능한 텍스트 이벤트 리스너
  const nextPageText = document.getElementById("nextPageText");
  if (nextPageText) {
    nextPageText.addEventListener("click", () => {
      window.location.href = "me1age.html";
    });
  }
  const nextPageText2 = document.getElementById("nextPageText2");
  if (nextPageText2) {
    nextPageText2.addEventListener("click", () => {
      window.location.href = "me2.html";
    });
  }
  const nextPageText3 = document.getElementById("nextPageText3");
  if (nextPageText3) {
    nextPageText3.addEventListener("click", () => {
      window.location.href = "me3.html";
    });
  }
});
