$(function () {
    function Resume() {
        this.init()
    }

    function sideScroll() {
        var scrollTop = $(window).scrollTop(), mainHeight = $side.prev().height();
        sideHeight + scrollTop > mainHeight ? $side.css({
            position: "absolute",
            "margin-top": mainHeight - sideHeight
        }) : ($side.attr("style", "").css({position: "fixed"}), 100 >= scrollTop ? $side.attr("style", "") : $side.css({position: "fixed"}))
    }

    var page = document.body, $side = $(".side", page), offsetTop, sideHeight, $CONFIG = window.$CONFIG || {};
    Resume.prototype.init = function () {
        this.alertQrcode(), this.forwarding(), this.group(), this.keyrecommend(), this.attention(), this.mark(), this.btnGroupFixed(), this.isProper(), this.getContact(), this.getWorkList(), this.report(), this.linkJob(), this.message(), this.resumeDownload(), this.showHelp(), this.recommend(), this.limit(), this.attentionTip(), this.addEliteTips(), this.sameRecommend(), $("div.assistant a", $side).not(".disabled").hover(function () {
            var child = $(this).find("i");
            child.toggleClass(child.attr("data-hover"))
        }).bind("click", function () {
        }), function (sloter) {
            LT.Ads.fillSlot(sloter, sloter.attr("slots"))
        }($(".slots"))
    }, Resume.prototype.btnGroupFixed = function () {
        var $btn = $(".resume .resume-basic .buttons"), height = null;
        $(window).on("scroll", function () {
            var top = $btn.offset().top - 10, scrollTop = $(this).scrollTop();
            height && height > scrollTop ? ($btn.removeClass("fixed"), height = null) : !height && scrollTop > top && ($btn.addClass("fixed"), height = top)
        }).trigger("scroll")
    }, Resume.prototype.alertQrcode = function () {
        LT.File.Js.load("//concat.lietou-static.com/dev/h/pc/revs/v1/js/plugins/jquery.alertTs_1363e31b.js", function () {
            $("[data-selector='qrcode']", page).alertTs({
                act: "hover",
                position: !0,
                width: 160,
                aSize: 8,
                top: 5,
                left: -8,
                aLoc: 30,
                face: "bottom",
                loading: "//concat.lietou-static.com/dev/h/pc/revs/v1/images/icons/loading1_c27367df.gif",
                content: "",
                css: {padding: "10px 20px", border: "1px solid #ccc", background: "#fff", color: "#666"},
                callback: {
                    show: function () {
                        if ("true" !== this.element.attr("data-cache")) {
                            var that = this;
                            this.loading("show"), $.post("/weixin/showqrcodesimg/?userc_id=" + $CONFIG.userc_id, function (data) {
                                if (1 == data.flag) {
                                    that.loading("hide");
                                    var html = "";
                                    data.data.isbind ? (html = ['<div class="text-center" style="margin-bottom:3px; color:#333; font-size:14px; padding-top:15px;"><i class="icons16 icons16-weixin"></i>扫描后开始微信沟通</div>', '<div class="text-center" style="padding:15px 0px 15px 0px"><img src="' + data.data.qrcodesurl + '" width="151" height="151" /></div>'].join(""), that.content(html)) : (html = ['<div class="text-center" style="margin-bottom:3px; color:#333"><strong>您暂未开通此功能！</strong></div>', "<div>扫描以下微信二维码，关注猎聘猎头小助手微信服务号，直接开通与经理人微信实时沟通功能。</div>", '<div class="text-center" style="padding:10px 0px 2px;"><img src="' + data.data.qrcodesurl + '" width="151" height="151" /></div>', '<div class="muted text-center">注：win8系统暂不支持此功能</div>'].join(""), that.content(html)), that.element.attr("data-cache", "true")
                                }
                            }, "json")
                        }
                    }
                }
            })
        })
    }, Resume.prototype.forwarding = function () {
        $('.assistant-share:not(".disabled")', page).click(function () {
            LT.Resume.send({resid: $CONFIG.res_id}, function () {
            })
        })
    }, Resume.prototype.group = function () {
        LT.Resume.setGroup({element: $(".btn_group", page), resid: $CONFIG.res_id})
    }, Resume.prototype.keyrecommend = function () {
        $('[data-selector="key-ecommendation"]').on("click", function (event) {
            var that = $(this);
            $.ajax({
                url: "/godten/iscanrecommendcv/",
                type: "GET",
                data: {userc_id: $CONFIG.userc_id},
                cache: !1,
                dataType: "json",
                beforeSend: function () {
                    that.LoadingUI("show")
                },
                complete: function () {
                    that.LoadingUI("hide")
                },
                success: function (data) {
                    if (1 == data.flag) {
                        var status = data.data;
                        switch (status) {
                            case 1:
                                NodeTpl.get("//concat.lietou-static.com/dev/h/pc/revs/v1/tpls/g10/no-operation-order_b3debbb6.js", function (d) {
                                    $.dialog({title: "快速推荐人选", content: d, lock: !0, padding: 0})
                                });
                                break;
                            case 2:
                                NodeTpl.get("//concat.lietou-static.com/dev/h/pc/revs/v1/tpls/g10/yes-this-resume_74e286de.js", function (d) {
                                    $.dialog({title: "快速推荐人选", content: d, lock: !0, padding: 0})
                                });
                                break;
                            default:
                                $.ajax({
                                    url: "/godten/showrecommendgodejobs/",
                                    type: "GET",
                                    data: {userc_id: $CONFIG.userc_id},
                                    cache: !1,
                                    dataType: "json",
                                    success: function (data) {
                                        1 == data.flag ? data.data && null == data.data ? NodeTpl.get("//concat.lietou-static.com/dev/h/pc/revs/v1/tpls/g10/yes-this-resume_74e286de.js", function (d) {
                                            $.dialog({title: "快速推荐人选", content: d, lock: !0, padding: 0})
                                        }) : NodeTpl.get("//concat.lietou-static.com/dev/h/pc/revs/v1/tpls/g10/quick-recommend_24a451d0.js", {
                                            userc_id: $CONFIG.userc_id,
                                            res_id: $CONFIG.res_id,
                                            data: data.data
                                        }, function (d) {
                                            $.dialog({title: "快速推荐人选", content: d, lock: !0, padding: 0})
                                        }) : $.dialog.error(data.msg)
                                    }
                                })
                        }
                    } else $.dialog.error(data.msg)
                }
            })
        })
    }, Resume.prototype.attention = function () {
        $(".btn_attention", page).click(function () {
            "0" === $(this).attr("data-type") ? LT.Attention.remove($CONFIG.userc_id, function () {
                window.location.href = window.location.href
            }) : LT.Attention.add({ids: $CONFIG.userc_id}, function () {
                $.dialog.focus.close(), window.location.href = window.location.href
            })
        })
    }, Resume.prototype.report = function () {
        return $(".assistant-report,.resume-basic .tel-report", page).not(".disabled").bind("click", function () {
            LT.Report.open({obj_type: 1, obj_id: $CONFIG.res_id, obj_userid: LT.User.user_id})
        }), this
    }, Resume.prototype.mark = function () {
        var options, that = this, $markListBox = $(".note-list", page), $showBox = $(".note-list-tpl", $markListBox), minHeight = 102, markIsLoad = 0;
        $markListBox.delegate("a.resume-mark-btn", "click", function () {
            $(this).hasClass("resume-mark-btn-close") ? ($showBox.height(minHeight), $(this).removeClass("resume-mark-btn-close")) : ($showBox.attr("style", ""), $(this).addClass("resume-mark-btn-close"))
        }), options = {
            callback: function (tpl) {
                tpl ? ($showBox.html(tpl), $markListBox.show(), setTimeout(function () {
                    var h = $showBox.outerHeight();
                    h > minHeight || $("li", $markListBox).length > 3 ? (markIsLoad || ($showBox.height(minHeight), markIsLoad = 1), $("a.resume-mark-btn", $markListBox).show().css("position", "absolute")) : $("a.resume-mark-btn", $markListBox).hide(), that.getGuidelayer && that.getGuidelayer.refresh()
                }, 10)) : $markListBox.hide()
            }, userc_id: $CONFIG.userc_id, res_id: $CONFIG.res_id, container: $showBox
        }, LT.Resume.mark(options), $("a.assistant-note", page).bind("click", function () {
            LT.Resume.addMark({
                callback: function () {
                    LT.Resume.mark(options)
                }, res_id: $CONFIG.res_id
            })
        }), $showBox.delegate("div", "change", function () {
            var $this = $(this), liLen = $("li", $this).length, h = $showBox.children().outerHeight();
            minHeight >= h && ($("a.resume-mark-btn", $markListBox).hide(), 0 == liLen && ($(".page", $this).length || ($markListBox.hide(), $showBox.attr("style", ""))))
        })
    }, Resume.prototype.isProper = function () {
        $(".btn-improper,.btn-proper", page).bind("click", function () {
            var type = $(this).hasClass("btn-proper") ? 1 : 2, urid = $(this).attr("data-urid");
            return urid ? void $.ajax({
                url: "/resume/updateappresappropriate/",
                type: "get",
                cache: !1,
                dataType: "json",
                data: {ur_id: urid, appropriate_value: type},
                success: function (data) {
                    1 == data.flag ? window.location.href = window.location.href : $.dialog.error(data.msg)
                }
            }) : !1
        })
    }, Resume.prototype.getContact = function () {
        function buy() {
            $.ajax({
                url: "/resume/isshowotherbutton/",
                type: "get",
                cache: !1,
                dataType: "json",
                data: {res_id_encode: $CONFIG.res_id, userc_id: $CONFIG.userc_id},
                success: function (data) {
                    1 == data.flag ? _this.getContactBuy.call(_this, data.data) : $.dialog.error(data.msg)
                }
            })
        }

        var _this = this;
        $("a.btn-get-contact", page).bind("click", function () {
            var that = $(this), mess = [];
            $.ajax({
                url: "/resume/getresumelimitstatus/",
                type: "post",
                data: LT.Object.extend({userc_id: $CONFIG.userc_id}, $CONFIG.resumeStatus),
                cache: !1,
                dataType: "json",
                success: function (data) {
                    if (1 == data.flag) {
                        if (2 == data.status)return void $.dialog({
                            icon: "confirm",
                            content: "这位候选人今天已经被顾问推荐了很多机会了，候选人也需要正常的工作和生活，<br />建议您先关注候选人，明天再和候选人联系吧！",
                            cancel: !0,
                            lock: !0
                        });
                        0 == that.attr("data-telopen") && mess.push("<p>经理人隐藏了联系电话</p>"), 0 == that.attr("data-mailopen") && mess.push("<p>经理人隐藏了电子邮箱</p>"), 1 == data.status && mess.push("<p>这位候选人今天已经被顾问推荐了好多机会了，候选人也需要正常的工作和生活，<br />因此系统暂时屏蔽了联系电话，明日可恢复正常显示。</p>"), mess.length ? (mess.push('<p class="text-error" style="margin-top:10px;">是否继续打开？</p>'), $.dialog({
                            icon: "confirm",
                            content: mess.join(""),
                            okVal: "立即打开",
                            ok: buy,
                            cancel: !0,
                            lock: !0
                        })) : buy()
                    } else $.dialog.error(data.msg)
                }
            })
        }), $("a.btn-get-contact-free", page).bind("click", function () {
            function contactFreeTip() {
                $CONFIG && $CONFIG.hcomp_shared ? $.dialog.confirm("此简历来自于公司简历库，可免费查看！", function () {
                    _this.getContactFree()
                }, function () {
                }, {okVal: "立即打开"}) : _this.getContactFree()
            }

            $.ajax({
                url: "/resume/getresumelimitstatus/",
                type: "post",
                data: LT.Object.extend({userc_id: $CONFIG.userc_id}, $CONFIG.resumeStatus),
                cache: !1,
                dataType: "json",
                success: function (data) {
                    if (1 == data.flag)if (data.status)switch (data.status) {
                        case"1":
                            $.dialog({
                                icon: "confirm",
                                content: '<p>这位候选人今天已经被顾问推荐了好多机会了，候选人也需要正常的工作和生活，<br />因此系统暂时屏蔽了联系电话，明日可恢复正常显示。</p><p class="text-error" style="margin-top:10px;">是否继续打开？</p>',
                                okVal: "立即打开",
                                ok: contactFreeTip,
                                cancel: !0,
                                lock: !0
                            });
                            break;
                        case"3":
                            $.dialog({
                                icon: "confirm",
                                content: '<p class="text-warning">提示：您今日已免费下载10份简历，每日最多可免费下载20份！</p><p style="margin-top:10px;">今日还可再免费下载10份，请合理分配哦~</p>',
                                okVal: "立即打开",
                                ok: contactFreeTip,
                                cancel: !0,
                                lock: !0
                            });
                            break;
                        case"4":
                            $.dialog({
                                icon: "confirm",
                                content: "您今日已经免费下载了20份简历，每日免费下载份额用尽啦，明日可继续免费下载20份~",
                                cancel: !0,
                                lock: !0
                            })
                    } else contactFreeTip()
                }
            })
        })
    }, Resume.prototype.getContactBuy = function (data) {
        var _msg, _halfDiscount, _data, lpCoinLack, coinType, res_buygold = parseInt(data.res_buygold, 10), res_goldcoin = parseInt(data.goldcoin, 10), res_lpCoin = parseInt(data.lp_coinTotal, 10);
        switch (res_buygold = parseInt(data.res_buygold, 10), _data = {
            res_id_encode: $CONFIG.res_id,
            userc_id: $CONFIG.userc_id,
            buy_type: data.buy_type
        }, lpCoinLack = function (callback) {
            $.dialog({
                icon: "question",
                content: '<p>抱歉，您的猎币余额不足！</p><p class="text-error">小提示：相互关注后可免费查看联系方式！</p>',
                lock: !0,
                okVal: "什么是猎币",
                ok: function () {
                    window.open("/profile/lpcoindiscription")
                },
                cancel: !0
            })
        }, data.buy_type) {
            case"1":
                coinType = data.is_lpcoin_download === !0 ? "猎币" : "金币", _msg = '<p>打开此简历需要 <strong class="text-error">0</strong> 个' + coinType + '</p><p class="text-muted">您账户余额为' + res_goldcoin + "个金币，" + res_lpCoin + '个猎币</p><p class="text-error">提示：仅第一次打开需要花费金币或猎币</p><p class="text-error">本次下载使用了您领取的免费下载特权</p>', $.dialog.confirm(_msg, function () {
                    $.post("/resume/buyresume/", _data, function (data) {
                        1 == data.flag ? $.dialog({
                            icon: "succeed",
                            title: "提示信息",
                            content: '<p><strong>您成功使用了 <span class="text-error">免费下载</span> 特权，</strong></p><p><strong>共花费 <span class="text-error">0</span> 金币。</strong></p><p class="text-muted">该特权本月使用次数还剩 <span class="text-error">' + data.surpluscnt + "</span> 次。</p>",
                            okVal: "我知道了",
                            ok: function () {
                                window.location.href = window.location.href
                            }
                        }) : $.dialog.error(data.msg)
                    }, "json"), (window._gaq = window._gaq || []) && window._gaq.push(["_trackPageview", "/downloadcv/opennow"])
                }, function () {
                    (window._gaq = window._gaq || []) && window._gaq.push(["_trackPageview", "/downloadcv/quitnow"])
                }, {okVal: "立即打开"});
                break;
            case"2":
                if (data.is_lpcoin_download === !0) {
                    if (17 > res_lpCoin)return void lpCoinLack();
                    _msg = '<p>打开此简历需要 <strong class="text-warning">17</strong> 个猎币</p><p class="text-muted">您账户余额为' + res_goldcoin + "个金币，" + res_lpCoin + '个猎币</p><p class="text-error">提示：仅第一次打开需要花费金币或猎币</p><p class="text-error">本次下载使用了您领取的五折优惠特权</p>', _halfDiscount = '<span class="text-error">17</span>个猎币。'
                } else if (res_buygold / 2 > res_goldcoin) {
                    if (17 > res_lpCoin)return void $.dialog({
                        icon: "question",
                        content: '<p>抱歉，您的金币及猎币余额不足！</p><p class="text-error">您可以通过与经理人互动获取金币奖励呦！</p>',
                        lock: !0,
                        okVal: "关闭",
                        ok: function () {
                            window.location.href = window.location.href
                        },
                        cancel: !0
                    });
                    _msg = '<p>打开此简历需要 <strong class="text-error">17</strong>个猎币</p><p class="text-muted">您账户余额为' + res_goldcoin + "个金币，" + res_lpCoin + '个猎币</p><p class="text-error">本次下载使用了您领取的五折优惠特权</p><p class="text-error">您的金币余额不足，默认使用您的猎币余额下载</p>', _halfDiscount = '<span class="text-error">17</span>个猎币。'
                } else _msg = '<p>打开此简历需要 <strong class="text-error">' + res_buygold / 2 + '</strong> 个金币</p><p class="text-muted">您账户余额为' + res_goldcoin + "个金币，" + res_lpCoin + '个猎币</p><p class="text-error">提示：仅第一次打开需要花费金币或猎币</p><p class="text-error">本次下载使用了您领取的五折优惠特权</p>', _halfDiscount = '<span class="text-error">' + res_buygold / 2 + "</span>个金币。";
                $.dialog.confirm(_msg, function () {
                    $.post("/resume/buyresume/", _data, function (data) {
                        if (1 == data.flag) {
                            var dialogHtml = '<p><strong>您成功使用了 <span class="text-error">5折购买</span> 特权，</strong></p><p><strong>共花费' + _halfDiscount + '</strong></p><p class="text-muted">该特权本月使用次数还剩 <span class="text-error">' + data.surpluscnt + "</span> 次。</p>";
                            $.dialog({
                                icon: "succeed",
                                title: "提示信息",
                                content: dialogHtml,
                                lock: !0,
                                okVal: "我知道了",
                                ok: function () {
                                    window.location.href = window.location.href
                                }
                            })
                        } else $.dialog.error(data.msg)
                    }, "json"), (window._gaq = window._gaq || []) && window._gaq.push(["_trackPageview", "/downloadcv/opennow"])
                }, function () {
                    (window._gaq = window._gaq || []) && window._gaq.push(["_trackPageview", "/downloadcv/quitnow"])
                }, {okVal: "立即打开"});
                break;
            case"4":
                if (data.is_lpcoin_download === !0) {
                    if (35 > res_lpCoin)return void lpCoinLack();
                    _msg = '<p><strong> 打开此简历需要 <strong class="text-warning">' + res_buygold + '</strong> 个猎币</strong></p><p class="text-muted">您账户余额为' + res_goldcoin + "个金币，" + res_lpCoin + '个猎币</p><p class="text-error">提示：高级简历仅支持猎币下载</p>'
                } else if (res_buygold > res_goldcoin) {
                    if (res_buygold > res_lpCoin)return void $.dialog({
                        icon: "question",
                        content: '<p>抱歉，您的金币及猎币余额不足！</p><p class="text-error">您可以通过与经理人互动获取金币奖励呦！</p>',
                        lock: !0,
                        okVal: "关闭",
                        ok: function () {
                            window.location.href = window.location.href
                        }
                    });
                    _msg = '<p>打开此简历需要 <strong class="text-error">' + res_buygold + '</strong> 个猎币</p><p class="text-muted">您账户余额为' + res_goldcoin + "个金币，" + res_lpCoin + '个猎币</p><p class="text-error">提示：仅第一次打开需要花费金币或猎币</p><p class="text-error">您的金币余额不足，默认使用您的猎币余额下载</p>'
                } else _msg = '<p>打开此简历需要 <strong class="text-error">' + res_buygold + '</strong> 个金币</p><p class="text-muted">您账户余额为' + res_goldcoin + "个金币，" + res_lpCoin + '个猎币</p><p class="text-error">提示：仅第一次打开需要花费金币或猎币</p>';
                $.dialog.confirm(_msg, function () {
                    $.post("/resume/buyresume/", _data, function (data) {
                        1 != data.flag ? $.dialog.error(data.msg) : window.location.href = window.location.href
                    }, "json"), (window._gaq = window._gaq || []) && window._gaq.push(["_trackPageview", "/downloadcv/opennow"])
                }, function () {
                    (window._gaq = window._gaq || []) && window._gaq.push(["_trackPageview", "/downloadcv/quitnow"])
                }, {okVal: "立即打开"});
                break;
            default:
                $.dialog({
                    icon: "alert", lock: !0, content: "该经理人被外星人劫持了，目前无法与其取得联系！", okVal: "稍后再联系", ok: function () {
                        window.location.reload()
                    }, cancel: !1
                })
        }
    }, Resume.prototype.getContactFree = function () {
        $.ajax({
            url: "/resume/buyresume/",
            type: "POST",
            data: {res_id_encode: $CONFIG.res_id, userc_id: $CONFIG.userc_id, buy_type: 0},
            dataType: "json",
            success: function (data) {
                "1" == data.flag ? window.location.href = window.location.href : $.dialog.error(data.msg)
            }
        })
    }, Resume.prototype.getWorkList = function () {
        var keys, $workBox = $("#workexp_anchor");
        return $workBox.length ? (keys = LT.String.getQuery("keys") || "", void $.get("/resume/getdetail/").done(function (data) {
            if (1 === data.flag) {
                var resdata = "resdata_" + LT.String.md5(data.data.version);
                window[resdata] = {
                    version: data.data.version, res_id: $CONFIG.res_id, callback: function (r) {
                        $.post("/resume/showresumedetail/showworkexps", {
                            res_id_encode: $CONFIG.res_id,
                            r: r,
                            v: data.data.version,
                            en: $CONFIG.en,
                            keys: keys
                        }, function (data) {
                            $workBox.html(data)
                        }, "html")
                    }
                }, $('<script type="text/javascript" src="//concat.lietou-static.com/dev/core/pc/v3/static/js/encrpt/' + data.data.url + '"></script>').appendTo("head")
            }
        })) : !1
    }, Resume.prototype.linkJob = function () {
        $("a.assistant-link-to-job", page).not(".disabled").bind("click", function () {
            LT.Resume.linkJob($CONFIG.res_id)
        })
    }, Resume.prototype.message = function () {
        $("a.assistant-message", page).not(".disabled").bind("click", function () {
            var $this = $(this), name = $this.attr("data-name");
            name && LT.Message.send({names: name, ids: $CONFIG.userc_id})
        })
    }, Resume.prototype.resumeDownload = function () {
        var res_id = $CONFIG.res_id;
        $("a.assistant-download", page).not(".disabled").bind("click", function () {
            $.post("/resumemanage/dowloadresume/?res_id_encode=" + res_id, function (data) {
                if (1 == data.flag)window.location.href = "/resume/downloadwordresume/?res_id_encode=" + res_id; else switch (data.status) {
                    case"limitmax":
                        $.dialog.alert("您每日导出Word简历数量已使用完，请明天继续。", function () {
                        }, {okVal: "知道了"});
                        break;
                    case"noprivilege":
                        NodeTpl.get("//concat.lietou-static.com/dev/h/pc/revs/v1/tpls/resume/award-homepage_e64a2f77.js", function (d) {
                            $.dialog({content: d, lock: !0, padding: 0})
                        });
                        break;
                    case"undownloaded":
                        $.dialog.alert("下载简历后才能导出Word简历", function () {
                        }, {okVal: "知道了"});
                        break;
                    default:
                        $.dialog.error(data.msg)
                }
            }, "json")
        })
    }, Resume.prototype.showHelp = function () {
        var $help = $("i.icon-blue-help", page);
        $help.length && LT.File.Js.load("//concat.lietou-static.com/dev/h/pc/revs/v1/js/plugins/jquery.alertTs_1363e31b.js", function () {
            var content = "<p>1、<strong>转接号2小时变更一次</strong>，请打电话前查看最新转接号。</p><p>2、<strong>经理人漏接电话短信提醒</strong>，未接到猎头电话后，会收到致电猎头的姓名，认证ID和联系电话。</p>";
            $help.alertTs({
                act: "hover",
                cssStyle: "yellow",
                css: {color: "#333"},
                aLoc: 20,
                width: 270,
                top: 5,
                left: -3,
                cache: !0,
                face: "bottom",
                content: content,
                position: !0
            })
        })
    }, Resume.prototype.recommend = function () {
        var names = null;
        $('[data-selector="recommend"]', page).click(function () {
            LT.Attention.recommend($CONFIG.userc_id, names, {windowRefresh: !0})
        })
    }, Resume.prototype.limit = function () {
        LT.File.Js.load("//concat.lietou-static.com/dev/h/pc/revs/v1/js/plugins/jquery.alertTs_1363e31b.js", function () {
            $('[data-selector="mark-tip"]', page).alertTs({
                width: 230,
                act: "hover",
                face: "top",
                position: !0,
                aLoc: "40px",
                cache: !1,
                content: "这位候选人今天已经被顾问推荐了好多机会了，候选人也需要正常的工作和生活，您可以给他发私信或者邮件哦~"
            })
        })
    }, Resume.prototype.attentionTip = function () {
        var _title = $("[data-title]");
        _title.length > 0 && LT.File.Js.load("//concat.lietou-static.com/dev/h/pc/revs/v1/js/plugins/jquery.alertTs_1363e31b.js", function () {
            _title.alertTs({act: "hover", face: "top", aLoc: "center", cssStyle: "yellow", position: !0})
        })
    }, Resume.prototype.sameRecommend = function () {
        $.ajax({
            url: "/resume/showsimilartalent",
            type: "POST",
            data: {res_id_encode: $CONFIG.res_id},
            cache: !1,
            dataType: "json",
            success: function (data) {
                1 === data.flag ? data.talents.length > 0 && NodeTpl.get("//concat.lietou-static.com/dev/h/pc/revs/v1/tpls/resume/sameCandidateRecommend_6fec9641.js", {
                    talents: data.talents,
                    resumeId: $CONFIG.res_id,
                    resName: $CONFIG.resName
                }, function (d) {
                    $('[data-selector="similar-talents"]').html(d), offsetTop = $side.offset().top, sideHeight = $side.height(), !LT.Browser.IE6 && $(window).bind("scroll", sideScroll)
                }) : (offsetTop = $side.offset().top, sideHeight = $side.height(), !LT.Browser.IE6 && $(window).bind("scroll", sideScroll), $.dialog.error(data.msg))
            }
        })
    }, Resume.prototype.addEliteTips = function () {
        $.ajax({
            url: "/resume/resumelabel",
            type: "get",
            dataType: "json",
            data: {res_id: LT.String.getQuery("res_id_encode")},
            cache: !1,
            success: function (data) {
                1 === data.flag ? (data.data.baselabel.length > 0 || data.data.intentionlabel.length > 0 || data.data.certificatelabel.length > 0) && NodeTpl.get("//concat.lietou-static.com/dev/h/pc/revs/v1/tpls/resume/showEliteTips_60055e18.js", $.extend(data.data, {
                    callback: function () {
                        offsetTop = $side.offset().top, sideHeight = $side.height(), $(window).trigger("scroll", sideScroll)
                    }
                }), function (d) {
                    $('[data-selector="elite-tips"]').html(d), offsetTop = $side.offset().top, sideHeight = $side.height(), $(window).bind("scroll", sideScroll)
                }) : $.dialog.error(data.msg)
            }
        })
    }, new Resume
});