// 封装一个获取当前id的元素的函数
function $(id) {
  return typeof id === "string" ? document.getElementById(id) : document;
}
// 分类
// 封装一个Tab切换的函数
function switchTab(tab_id) {
  var tab_lis = $(tab_id).getElementsByTagName("li");
  var tab_len = tab_lis.length;
  // 默认选中第一个
  tab_lis[0].className = "clicked_position";
  var i, j;
  for (i = 0; i < tab_len; i++) {
    tab_lis[i].onclick = function () {
      for (j = 0; j < tab_len; j++) {
        tab_lis[j].className = "";
      }
      this.className += "clicked_position"
    }
  }
}

    // 闭包的写法
    // var tab_lis = $("apartment").getElementsByTagName("li");
    // var tab_len = tab_lis.length;
    // var m, n;
    // for (m = 0; m < tab_len; m++) {
    //   (function (m) {
    //     tab_lis[m].onclick = function () {
    //       for (n = 0; n < tab_len; n++) {
    //         tab_lis[n].className = "";
    //       }
    //       this.className += "clicked_position"
    //     }
    //   })(m)
    // }

  // model模态框
  function modalDialog(ce_item_id, modal_info_id) {
    var cel_item_divs = $(ce_item_id).getElementsByTagName('div');
    var modal_info_divs = $(modal_info_id).getElementsByClassName('modal-item');
    var cel_item_len = cel_item_divs.length;
    var i, j;
    for(i = 0; i < cel_item_len; i++) {
      // console.log(i)
      cel_item_divs[i].index = i;
      cel_item_divs[i].onclick = function () {
        for (j = 0; j < cel_item_len; j++) {
          modal_info_divs[j].style.display = "none";
        }
        // console.log(modal_info_divs[this.index])
        modal_info_divs[this.index].style.display = "block";
        $(modal_info).getElementsByClassName('modal-info')[0].style.display = "block";
      }
    }
  }

  // closeModal关闭模态框
  function closeModal() {
    var modal_info = document.getElementsByClassName('modal-info');
    modal_info[0].style.display = "none";
  }