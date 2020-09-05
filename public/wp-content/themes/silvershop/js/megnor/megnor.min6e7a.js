/*! Customized Jquery from Mahesh Vaghani. 
Authors & copyright (c) 2013: TemplateMela - Megnor Computer Private Limited. */
/*! NOTE: This Javascript is licensed under two options: a commercial license, a commercial OEM license and Copyright by Megnor Computer Private Limited - For use Only with TemplateMela Themes for our Customers*/
(function (b) {
    "use strict";
    var a = "waitForImages";
    b.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]
    };
    b.expr[":"].uncached = function (d) {
        if (!b(d).is('img[src!=""]')) {
            return false
        }
        var c = new Image();
        c.src = d.src;
        return !c.complete
    };
    b.fn.waitForImages = function (f, d, e) {
        var g = 0;
        var c = 0;
        if (b.isPlainObject(arguments[0])) {
            e = arguments[0].waitForAll;
            d = arguments[0].each;
            f = arguments[0].finished
        }
        f = f || b.noop;
        d = d || b.noop;
        e = !!e;
        if (!b.isFunction(f) || !b.isFunction(d)) {
            throw new TypeError("An invalid callback was supplied.")
        }
        return this.each(function () {
            var j = b(this);
            var k = [];
            var h = b.waitForImages.hasImageProperties || [];
            var i = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            if (e) {
                j.find("*").addBack().each(function () {
                    var l = b(this);
                    if (l.is("img:uncached")) {
                        k.push({
                            src: l.attr("src"),
                            element: l[0]
                        })
                    }
                    b.each(h, function (o, p) {
                        var m = l.css(p);
                        var n;
                        if (!m) {
                            return true
                        }
                        while (n = i.exec(m)) {
                            k.push({
                                src: n[2],
                                element: l[0]
                            })
                        }
                    })
                })
            } else {
                j.find("img:uncached").each(function () {
                    k.push({
                        src: this.src,
                        element: this
                    })
                })
            }
            g = k.length;
            c = 0;
            if (g === 0) {
                f.call(j[0])
            }
            b.each(k, function (m, l) {
                var n = new Image();
                b(n).on("load." + a + " error." + a, function (o) {
                    c++;
                    d.call(l.element, c, g, o.type == "load");
                    if (c == g) {
                        f.call(j[0]);
                        return false
                    }
                });
                n.src = l.src
            })
        })
    }
}(jQuery));
(function (a) {
    a.fn.smartColumnsRows = function (b) {
        var c = a.extend({
            defWidthClss: "grid_default_width",
            subElement: "li",
            subClass: "product-block",
            firstClass: "first_item_tm",
            lastClass: "last_item_tm"
        }, b);
        return this.each(function () {
            var f = a(this);
            var k = a(this).attr("id");
            var g = parseInt(a("." + c.defWidthClss).css("width"));
            f.css("width", "auto");
            var j = f.width();
            var i = g;
            var d = Math.floor(j / i);
            var e = g * 100 / Math.floor(j / d);
            if (e <= 75 && e >= 50) {
                d = d + 1
            }
            if (a(window).width() < 380) {
                d = 1
            }
            var h = Math.floor(j / d);
            f.css("width", j);
            a("#" + k + " > " + c.subElement).css("width", h);
            a("#" + k + " > " + c.subElement).removeClass(c.firstClass);
            a("#" + k + " > " + c.subElement + ":nth-child(" + d + "n+1)").addClass(c.firstClass);
            a("#" + k + " > " + c.subElement).removeClass(c.lastClass);
            a("#" + k + " > " + c.subElement + ":nth-child(" + d + "n)").addClass(c.lastClass);
            f.waitForImages(function () {
                var l = 0;
                a("#" + k + " > " + c.subElement + " ." + c.subClass).each(function () {
                    a(this).css("height", "auto");
                    l = Math.max(l, a(this).height())
                });
                if (l == 0) {
                    l = "auto"
                } else {
                    l = l + "px"
                }
                a("#" + k + " > " + c.subElement + " ." + c.subClass).css("height", l)
            })
        })
    }
}(jQuery));
(function (a) {
    a.fn.tmMark = function (b) {
        var c = a.extend({
            checkboxCls: "tmpmela-checkbox",
            radioCls: "tmpmela-radio",
            checkedCls: "tmpmela-checked",
            selectedCls: "tmpmela-selected",
            hideCls: "tmpmela-hide"
        }, b);
        return this.each(function () {
            var e = a(this);
            var d = e.attr("type") == "checkbox" ? '<div class="' + c.checkboxCls + '">' : '<div class="' + c.radioCls + '">';
            if (e.attr("type") == "checkbox") {
                e.addClass(c.hideCls).wrap(d).change(function () {
                    if (a(this).is(":checked")) {
                        a(this).parent().addClass(c.checkedCls)
                    } else {
                        a(this).parent().removeClass(c.checkedCls)
                    }
                });
                if (e.is(":checked")) {
                    e.parent().addClass(c.checkedCls)
                }
            } else {
                if (e.attr("type") == "radio") {
                    e.addClass(c.hideCls).wrap(d).change(function () {
                        a('input[name="' + a(this).attr("name") + '"]').each(function () {
                            if (a(this).is(":checked")) {
                                a(this).parent().addClass(c.selectedCls)
                            } else {
                                a(this).parent().removeClass(c.selectedCls)
                            }
                        })
                    });
                    if (e.is(":checked")) {
                        e.parent().addClass(c.selectedCls)
                    }
                }
            }
        })
    }
}(jQuery));
(function (a) {
    a.fn.responsiveTable = function (b) {
        var c = a.extend({}, {
            prefix: "tg",
            target: ""
        }, b);
        return this.each(function () {
            var f = "";
            var e = "";
            var h = "";
            var d = "";
            c.prefix = c.prefix + "_";
            columns = [];
            table_target = a(this);
            var g = 0;
            var i = 0;
            a(table_target).find("tr").each(function () {
                if (a(this).parent().attr("class") == "table-foot") {
                    var j = 0;
                    d += '<div class="' + c.prefix + "row " + columns[j].replace(/\s+/g, "") + '">\n';
                    a(this).find("th,td").each(function () {
                        var k = a(this).html();
                        if (j % 2 == 0) {
                            d += "<label>" + k.replace(/^\s\s*/, "").replace(/\s\s*$/, "") + "</label>\n"
                        } else {
                            d += "<span>" + k.replace(/^\s\s*/, "").replace(/\s\s*$/, "") + "</span>\n"
                        }
                        j++
                    });
                    d += "</div>\n"
                } else {
                    var j = 0;
                    a(this).find("th,td").each(function () {
                        var k = a(this).html();
                        if (g == 0) {
                            columns.push(a(this).html())
                        } else {
                            h += '<div class="' + c.prefix + "row " + columns[j].replace(/\s+/g, "") + '">\n';
                            h += "<label>" + columns[j] + "</label>\n";
                            h += "<span>" + k.replace(/^\s\s*/, "").replace(/\s\s*$/, "") + "</span>\n";
                            h += "</div>\n"
                        }
                        j++
                    });
                    if (g != 0) {
                        f += '<div class="' + c.prefix + "group " + c.prefix + g + '">\n';
                        f += h;
                        f += "</div>\n";
                        h = ""
                    }
                }
                g++
            });
            f = '<div class="' + c.prefix + 'container">\n' + f + "</div>\n";
            if (g != 0) {
                e += '<div class="' + c.prefix + "group " + c.prefix + g + '">\n';
                e += d;
                e += "</div>\n";
                d = ""
            }
            if (i != 0) {
                f += '<div class="' + c.prefix + 'container_footer">\n' + e + "</div>\n"
            }
            if (c.target.length > 0) {
                a(c.target).html(f)
            } else {
                a(table_target).before(f)
            }
        })
    }
})(jQuery);