const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const popupAnimate = document.querySelector(".popup-animate");
const combine = document.querySelector(".combination");
const cameras = document.querySelector(".cameras");

const popup = (combine = true) => {
  if (combine) {
    return '<div class="popup"><h1 class="title-h3 orange-text">Комбинация стёкол</h1><div class="short-description">Со стороны улицы</div> <div class="description">Мультифункциональное стекло с покрытием по технологии Double Silver™.</div> <div class="short-description">Со стороны  помещения</div> <div>Стекло с энергосберегающим покрытием (i-стекло).</div><div class="close"></div></div>';
  }
  return '<div class="popup"><h1 class="title-h3 orange-text">2 камеры с дистанционными рамками</h1> <p>Дистанционная рамка — часть каркаса стеклопакета, разделяющая стёкла на расстояние, полученное из расчётов для максимальной эффективности.</p> <p> Рамки служат первичным каркасом для стеклопакета, обеспечивая параллельность листов стекла по всей плоскости и защищают окно от появления конденсата, благодаря специальным осушителям </p> <div class="close"></div></div>';
};

const animation = () => {
  const popup = document.querySelector(".popup");
  const close = document.querySelector(".close");

  popup.style.opacity = 1;
  popup.style.transform = "translateY(0)";
  popup.style.transition = "0.3s all";

  close.addEventListener("click", () => {    
    popupAnimate.removeChild(popup);
    combine.style.opacity = 0;
    combine.style.transform = "translateY(-100%)";
    combine.style.transition = "0s all";

    cameras.style.opacity = 0;
    cameras.style.transform = "translateY(-100%)";
    cameras.style.transition = "0s all";
  });
};

leftBtn.addEventListener("click", () => {
  const popupElement = document.querySelector(".popup");
  if (popupElement !== null) return;
  
  popupAnimate.innerHTML = popup();
  setTimeout(() => animation());
  combine.style.opacity = 1;
  combine.style.transform = "translateY(0)";
  combine.style.transition = "0.3s all";
});

rightBtn.addEventListener("click", () => {
  const popupElement = document.querySelector(".popup");
  if (popupElement !== null) return;

  popupAnimate.innerHTML = popup(false);
  setTimeout(() => animation());
  cameras.style.opacity = 1;
  cameras.style.transform = "translateY(0)";
  cameras.style.transition = "0.3s all";
});
