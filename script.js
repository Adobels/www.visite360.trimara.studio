const fitActionLabels = () => {
  document.querySelectorAll(".action").forEach((action) => {
    const label = action.querySelector(".action-label");

    if (!label) {
      return;
    }

    label.style.setProperty("--label-scale", "1");

    const style = getComputedStyle(action);
    const horizontalPadding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const availableWidth = action.clientWidth - horizontalPadding;
    const labelWidth = label.scrollWidth;
    const scale = Math.max(0.5, Math.min(1, availableWidth / labelWidth));

    label.style.setProperty("--label-scale", scale.toString());
  });
};

fitActionLabels();
window.addEventListener("resize", fitActionLabels);

if ("ResizeObserver" in window) {
  const observer = new ResizeObserver(fitActionLabels);
  document.querySelectorAll(".action").forEach((action) => observer.observe(action));
}
