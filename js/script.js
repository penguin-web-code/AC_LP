const cardSwiper = new Swiper('.card__swiper', { // swiperの名前
  // 切り替えのモーション
  speed: 1000, // 表示切り替えのスピード
  effect: "slide", // 切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  // 最後→最初に戻るループ再生を有効に
  loop: true,

  // 自動スライドについて
//   autoplay: { 
//     delay: 3000, // 何秒ごとにスライドを動かすか
//   },

  // 表示について
  centeredSlides: false, // 中央寄せにしない
  slidesPerView: "auto",
  spaceBetween: 30,

  // ページネーション
  pagination: {
    el: ".swiper-pagination", // paginationのclass
    clickable: true, // クリックでの切り替えを有効に
    type: "bullets" // paginationのタイプ (※2)
  },

  // ナビゲーション
  navigation: {
    prevEl: ".swiper-button-prev", // 戻るボタンのclass
    nextEl: ".swiper-button-next" // 進むボタンのclass
  },
});

/* =================================================== 
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
    fadeEffect: {
        crossFade: true
    },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/

// アコーディオン
$('.qa__item').click(function(){
    $(this).find(".js-answer").slideToggle(500);
    const img = $(this).find(".js-btn img");
    // 画像の現在のsrcを取得
    const currentSrc = img.attr("src");

    // 例：閉じてる時は close-btn.png、開いてる時は open-btn.png に切り替え
    if(currentSrc.includes("close-btn.png")) {
        img.attr("src", "/img/open-btn.png");
    } else {
        img.attr("src", "/img/close-btn.png");
    }
});