function clearAd() {
  if ($(".recommend-recommend-box") || $(".right_top") || $("div[data-pid]") || $(".right_extension") || $(".banner-ad-box") || $("li[data-type='ad']")) {
    if ($(".recommend-recommend-box")) {
      Array.from($(".recommend-recommend-box")).forEach(item => {
        item.remove()
      })
    }
    if ($(".right_top")) {
      Array.from($(".right_top")).forEach(item => {
        item.remove()
      })
    }
    if ($("div[data-pid]")) {
      Array.from($("div[data-pid]")).forEach(item => {
        item.remove()
      })
    }
    if ($(".right_extension")) {
      Array.from($(".right_extension")).forEach((item) => {
        item.remove()
      })
    }
    if ($(".banner-ad-box")) {
      if ($(".banner-ad-box").length !== 0) {
        $(".banner-ad-box")[0].remove()
      }
    }
    if ($("li[data-type='ad']")) {
      Array.from($("li[data-type='ad']")).forEach(item => {
        item.remove()
      })
    }
  } else {
    setTimeout(() => {
      clearAd()
    }, 500);
  }

}
window.onload = clearAd()