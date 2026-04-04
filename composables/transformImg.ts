export function transformImg(img?: string) {
  const imgsmall = 'w_810,q_90,f_auto';
  if (img == undefined) {
    img =
      'https://res.cloudinary.com/salrion/image/upload/{{trans}}/salrionblog/glacier.jpg';
  }
  const timg = img.replace('{{trans}}', imgsmall);
  return timg;
}
