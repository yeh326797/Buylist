var shoplist = {};
shoplist.name = "MyBuylist 購物清單";
shoplist.time = "2021/01/06";
shoplist.list = [
  { name: "吹風機", price: 300 },
  { name: "麥克風", price: 9000 },
  { name: "筆記型電腦", price: 54555 },
  { name: "Iphone 9", price: 32000 },
  { name: "神奇海螺", price: 5000 },
];

var item_html =
  "<li id={{id}}><div class='item'>{{num}}.{{name}}</div><div class='price'>{{price}}</div><div id={{del_id}}  data-delid={{delid}}  class='delete-btn'>X</div></li>";

var total_html =
  "<li class='total'><div class='item'>總價</div><div class='price'>{{price}}</div></li>";

function showlist() {
  $(".list").html("");
  var total_price = 0;
  for (var i = 0; i < shoplist.list.length; i++) {
    var item = shoplist.list[i];
    var item_id = "item_" + i;
    var del_item_id = "del_item_" + i;

    total_price += parseInt(item.price);

    var current_item_html = item_html
      .replace("{{num}}", i + 1)
      .replace("{{name}}", item.name)
      .replace("{{id}}", item_id)
      .replace("{{del_id}}", del_item_id)
      .replace("{{price}}", item.price)
      .replace("{{delid}}", i);
    $(".list").append(current_item_html);
    $("#" + del_item_id).click(function () {
      remove_item(parseInt($(this).attr("data-delid")));
    });
  }
  var current_total_html = total_html.replace("{{price}}", total_price);
  $(".list").append(current_total_html);
}
showlist();

$(".add-btn").click(function () {
  shoplist.list.push({
    name: $("#name").val(),
    price: $("#price").val(),
  });
  $("#name").val("");
  $("#price").val("");
  showlist();
});

function remove_item(id) {
  shoplist.list.splice(id, 1);
  showlist();
}
