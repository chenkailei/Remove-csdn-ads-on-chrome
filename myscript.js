function clearAd() {
  if ($(".recommend-recommend-box") || $("div[data-pid]") || document.getElementsByClassName("right_extension") || document.getElementsByClassName("banner-ad-box") || $("li[data-type='ad']")) {
    if ($(".recommend-recommend-box")) {
      Array.from($(".recommend-recommend-box")).forEach(item => {
        item.remove()
      })
    }
    if ($("div[data-pid]")) {
      Array.from($("div[data-pid]")).forEach(item => {
        item.remove()
      })
    }
    if (document.getElementsByClassName("right_extension")) {
      Array.from(document.getElementsByClassName("right_extension")).forEach((item) => {
        item.remove()
      })
    }
    if (document.getElementsByClassName("banner-ad-box")) {
      if (document.getElementsByClassName("banner-ad-box").length !== 0) {
        document.getElementsByClassName("banner-ad-box")[0].remove()
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