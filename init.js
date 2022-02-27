const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


function question1() {
  document.getElementById("answer1").innerHTML = "<?php $string = \"In the images directory you received, you will find 5 images. On your page, create a carousel containing the images.
The initialisation of the carousel should be in the init.js file. The requirements for the carousel are as follows:\";


    $arr = str_split($string);

    for($i = 0; $i < 40; $i++) {
        print($arr[$i]);
    }
?> ";
}
  function question2() {
    document.getElementById("answer2").innerHTML = "<?php

$one = "1234abcd";
$result = preg_replace("/[^aA-zZ]+/", "", $one);
echo $result;
?>
 ";
}
    function question3() {
      document.getElementById("answer3").innerHTML = "$phrase  = "ard";
$healthy = array("a", "r", "d");
$yummy   = array("c", "m", "e");

$newphrase = str_replace($healthy, $yummy, $phrase);
echo $newphrase;
?> ";
}
      function question4() {
        document.getElementById("answer4").innerHTML = " <?php
$url = 'https://www.youtube.com/feed/subscriptions';
$parse = parse_url($url);
echo $parse['host']; // prints 'google.com'
?> ";
}
