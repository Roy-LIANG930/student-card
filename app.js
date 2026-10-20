(function () {
  "use strict";

  const data = window.STUDENT_CARD_CONFIG;
  if (!data) return;

  const fields = {
    "page-year": data.academicYear,
    year: data.academicYear,
    "last-name": data.lastName,
    "first-name": data.firstName,
    "birth-date": data.birthDate,
    ine: data.ine,
    siscol: data.siscol,
    signatory: data.signatory,
    institution: data.institution,
    address: data.address,
    website: data.website
  };

  for (const [id, value] of Object.entries(fields)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value ?? "";
  }

  const website = document.getElementById("website");
  if (website) website.href = data.websiteUrl || "https://www.cnam.fr/";

  const photoFrame = document.getElementById("photo-frame");
  const photo = data.photo;
  if (photoFrame && photo?.src) {
    if (photo.mode === "crop" && photo.crop) {
      const { x, y, width, height, rotation } = photo.crop;
      // SVG 的 viewBox 将原始横置照片中的人像裁出，并保持图片文件本身不变。
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
      svg.setAttribute("viewBox", `0 0 ${height} ${width}`);
      svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
      svg.setAttribute("aria-hidden", "true");
      image.setAttribute("href", photo.src);
      image.setAttribute("width", "1080");
      image.setAttribute("height", "1920");
      image.setAttribute("transform", `translate(${-y} ${x + width}) rotate(${rotation})`);
      svg.appendChild(image);
      photoFrame.appendChild(svg);
    } else {
      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = "";
      photoFrame.appendChild(image);
    }
  }

  document.getElementById("print-button")?.addEventListener("click", () => window.print());
})();
