const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

const setHeight = () => {
  const viewportHeight = window.innerHeight;
  const headerHeight = header ? header.offsetHeight : 0;
  const footerHeight = footer ? footer.offsetHeight : 0;
  const contentHeight = viewportHeight - headerHeight - footerHeight;

  const gallery = document.querySelector("#gallery");
  if (gallery) {
    gallery.style.minHeight = `${contentHeight}px`;
  }
};

window.addEventListener("resize", setHeight);
setHeight();
