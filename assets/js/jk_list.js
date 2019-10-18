$(document).ready(function () {
    var jk_msgs = [
        ["Dev Today, 13:59", "Developers Diary #1 - Bugs bugs bugs", ".Decimal", "https://i.imgur.com/GDe3Cme.gifv"],
        ["Dev Yesterday, 16:21", "Developers Diary #2 - Hey", ".Decimal", "https://i.imgur.com/GDe3Cme.gifv"],
        ["Dev Today, 13:59", "Developers Diary #3 - Its new update here", ".Decimal"],
        ["Dev Today, 13:59", "Developers Diary #4 - What the fuck", ".Decimal"],
        ["Dev Today, 13:59", "Developers Diary #5 - Lit anims lol", ".Decimal"],
    ]
    var jk_stats = [
        ["Users", "332", ""],
        ["Jekorgis", "332", ""],
        ["True", "332", ""],
        ["Jeko", "332", ""],
        ["Is", "332", ""],
        ["Only", "332", ""],
        ["One", "332", ""]
    ]
    var first_item_active = 1;
    var default_active = [];

    var devblog_id = "anim_list1";
    var stats_id = "anim_list2";

    var delta = 1;
    jk_list_create(devblog_id, jk_msgs, "dev");
    jk_list_create(stats_id, jk_stats, "stat");
    // $.each(jk_msgs, function (i, v) {
    //     $(".jk-anim-list").append('<a href="' + v[3] + '"><div class="jk-list-item" id="' + i + '"> <p>' + v[0] + '</p> <h2>' + v[1] + '</h2> <p>' + v[2] + '</p > </div ></a> ');
    //     // $("#" + i).css("top", i * 15 + "vh");;
    //     $(".jk-active-group").append('<i id="c_' + i + '" class="fas fa-dot-circle"></i>');
    // });
    $(".jk-anim-list").mouseenter(function () { jk_handle("true"); }).mouseleave(function () { jk_handle("false"); }).bind("mousewheel", jk_scroll);
    jk_setActive(devblog_id, first_item_active);
    jk_setActive(stats_id, first_item_active);

    $(".fa-dot-circle").click(function () {
        var tempID = this.id.replace("c_", "");
        jk_setActive($(this).closest(".jk-anim-list").attr("id"), parseInt(tempID));
    })

    function jk_scroll(event, delta, smth) {
        event.preventDefault();
        var child_count = $("#" + this.id + " a").length;

        default_active[this.id] += event.originalEvent.wheelDelta / 150;
        if (default_active[this.id] > child_count - 1) {
            default_active[this.id] = child_count - 1;
            jk_setActive(this.id, default_active[this.id]);
        } else if (default_active[this.id] < 0) {
            default_active[this.id] = 0;
            jk_setActive(this.id, default_active[this.id]);
        } else {
            jk_setActive(this.id, default_active[this.id]);
        }
    }
    function jk_list_create(listID, data, type) {
        if (type == "dev") {
            $.each(data, function (i, v) {
                $("#" + listID).append('<a href="' + v[3] + '"><div class="jk-list-item" id="' + i + '"> <p>' + v[0] + '</p> <h2>' + v[1] + '</h2> <p>' + v[2] + '</p > </div ></a> ');
                // $("#" + i).css("top", i * 15 + "vh");;
                $("#" + listID + " .jk-active-group").append('<i id="c_' + i + '" class="fas fa-dot-circle"></i>');
            });
            default_active[listID] = first_item_active;
        } else if (type == "stat") {
            $.each(data, function (i, v) {
                $("#" + listID).append('<a href="' + v[3] + '"><div class="jk-list-item" id="' + i + '"> <p>' + v[0] + '</p> <h2>' + v[1] + '</h2> <p>' + v[2] + '</p > </div ></a>');
                // $("#" + i).css("top", i * 15 + "vh");;
                $("#" + listID + " .jk-active-group").append('<i id="c_' + i + '" class="fas fa-dot-circle"></i>');
            });
            default_active[listID] = first_item_active;
        }
    }
    function jk_setActive(listID, id) {
        default_active[listID] = id;
        $("#" + listID + " .jk-active-group .fa-dot-circle").removeClass("jk-active-cir");
        $("#" + listID + " .jk-active-group #c_" + id).addClass("jk-active-cir");
        $("#" + listID + " a .jk-list-item").removeClass("act").removeClass("small").addClass("dis");
        $("#" + listID + " a #" + id).removeClass("dis").addClass("act").css("top", "60%").css("transform", "translateY(-50%)");
        $("#" + listID + " a #" + (id - 1)).addClass("small").removeClass("dis").css("top", "10%").css("transform", "translateY(0%)");
        $("#" + listID + " a #" + (id + 1)).addClass("small").removeClass("dis").css("top", "110%").css("transform", "translateY(-100%)");
    }
    function jk_handle(s) {
        $("#err").text(s);
    }
})