var arr = [
  {
    dp: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGNoaWxkcmVufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:
      "https://images.unsplash.com/photo-1610875578760-47c4624ffd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3V0ZSUyMGNoaWxkcmVufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    dp: "https://images.unsplash.com/flagged/photo-1578467992042-7e2e9650cfbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3V0ZSUyMGNoaWxkcmVufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:
      "https://images.unsplash.com/photo-1622220838642-62263cb2141d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1499237302743-ba2c2740f824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGN1dGUlMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    story:
      "https://media.istockphoto.com/id/1026632588/photo/funny-child-girl-draws-laughing-shows-hands-dirty-with-paint.webp?b=1&s=170667a&w=0&k=20&c=E4tP1UIIvPHefQyVnaH5ew-J7LGB1i5bH07Cg13zMSo=",
  },
  {
    dp: "https://media.istockphoto.com/id/469753498/photo/portrait-of-happy-little-boy-giving-you-thumbs-up.jpg?s=612x612&w=0&k=20&c=EK8rtpHJotMlBER71dKNww8ETSIEmxS0vYzz-WDyIOo=",
    story:
      "https://media.istockphoto.com/id/1189419841/photo/portrait-of-surprised-cute-little-toddler-girl-in-the-heart-shape-sunglasses-child-with-open.jpg?s=612x612&w=0&k=20&c=bSFmOOtHsYSa1DB1KJWsbVD4GKSQ36dHJjCQgMrHNew=",
  },
  {
    dp: "https://media.istockphoto.com/id/1252210017/photo/smiling-girl-playing-on-the-swing.jpg?s=612x612&w=0&k=20&c=NVmrk2lw3RJjajhuKErh0Uf1iI2ogzAkE2MPprQNflI=",
    story:
      "https://media.istockphoto.com/id/1393473496/photo/portrait-of-cute-girl-give-v-sign-near-eye.jpg?s=612x612&w=0&k=20&c=qiIKPFSf-cHug6KNm0dH_uMbD57lOeTXdlqWAzV7tQU=",
  },
];

var stories = document.querySelector("#stories");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});

stories.innerHTML = clutter;
stories.addEventListener("click", function (dets) {
  //   console.log(dets); // Gives Pointer Event, which has multiple properties
  //   console.log(dets.target);
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
