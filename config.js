/* 日后只需修改这个文件中的文字或照片路径，再推送到 GitHub。 */
window.STUDENT_CARD_CONFIG = {
  academicYear: "2024/2025",
  lastName: "LIANG",
  firstName: "Jingtao",
  birthDate: "30/09/2001",
  ine: "0G5DRUG7G88",
  siscol: "100390630",
  signatory: "Bénédicte FAUVARQUE-COSSON",
  institution: "Conservatoire national des arts et métiers",
  address: "292 rue Saint-Martin - 75003 Paris",
  website: "www.cnam.fr",
  websiteUrl: "https://www.cnam.fr/",
  photo: {
    // 当前照片取自随作业提供的合照。换成单独证件照时，把 mode 改为 "direct"。
    mode: "crop",
    src: "./assets/photo-source.jpg",
    // 原图中的证件照区域，以原图像素表示；会在页面中旋转为竖直方向。
    crop: { x: 205, y: 1210, width: 585, height: 390, rotation: -90 }
  },
  signatureImage: {
    src: "./assets/photo-source.jpg",
    crop: { x: 238, y: 730, width: 55, height: 200, rotation: -90 }
  }
};
