/**
 * Sets up Justified Gallery.
 */
if (!!$.prototype.justifiedGallery) {
  var options = {
    rowHeight: 140,
    margins: 4,
    lastRow: "justify"
  };
  $(".article-gallery").justifiedGallery(options);
}


$(document).ready(function() {

  /**
   * Shows the responsive navigation menu on mobile.
   */
  $("#header > #nav > ul > .icon").click(function() {
    $("#header > #nav > ul").toggleClass("responsive");
  });


  /**
   * Controls the different versions of  the menu in blog post articles 
   * for Desktop, tablet and mobile.
   */
  if ($(".post").length) {
    var menu = $("#menu");
    var nav = $("#menu > #nav");
    var menuIcon = $("#menu-icon, #menu-icon-tablet");

    /**
     * Display the menu on hi-res laptops and desktops.
     */
    if ($(document).width() >= 1440) {
      menu.css("visibility", "visible");
      menuIcon.addClass("active");
    }

    /**
     * Display the menu if the menu icon is clicked.
     */
    menuIcon.click(function() {
      if (menu.css("visibility") === "hidden") {
        menu.css("visibility", "visible");
        menuIcon.addClass("active");
      } else {
        menu.css("visibility", "hidden");
        menuIcon.removeClass("active");
      }
      return false;
    });

    /**
     * Add a scroll listener to the menu to hide/show the navigation links.
     */
    if (menu.length) {
      $(window).on("scroll", function() {
        var topDistance = menu.offset().top;

        // hide only the navigation links on desktop
        if (!nav.is(":visible") && topDistance < 50) {
          nav.show();
        } else if (nav.is(":visible") && topDistance > 100) {
          nav.hide();
        }

        // on tablet, hide the navigation icon as well and show a "scroll to top
        // icon" instead
        if ( ! $( "#menu-icon" ).is(":visible") && topDistance < 50 ) {
          $("#menu-icon-tablet").show();
          $("#top-icon-tablet").hide();
        } else if (! $( "#menu-icon" ).is(":visible") && topDistance > 100) {
          $("#menu-icon-tablet").hide();
          $("#top-icon-tablet").show();
        }
      });
    }

    /**
     * Show mobile navigation menu after scrolling upwards,
     * hide it again after scrolling downwards.
     */
    if ($( "#footer-post").length) {
      var lastScrollTop = 0;
      $(window).on("scroll", function() {
        var topDistance = $(window).scrollTop();

        if (topDistance > lastScrollTop){
          // downscroll -> show menu
          $("#footer-post").hide();
        } else {
          // upscroll -> hide menu
          $("#footer-post").show();
        }
        lastScrollTop = topDistance;

        // close all submenu"s on scroll
        $("#nav-footer").hide();
        $("#toc-footer").hide();
        $("#share-footer").hide();

        // show a "navigation" icon when close to the top of the page, 
        // otherwise show a "scroll to the top" icon
        if (topDistance < 50) {
          $("#actions-footer > #top").hide();
        } else if (topDistance > 100) {
          $("#actions-footer > #top").show();
        }
      });
    }
  }
});

// Cookies
    ! function(o) {
        var e = !1;
        if ('function' == typeof define && define.amd && (define(o), e = !0), 'object' == typeof exports && (module.exports = o(), e = !0), !e) {
            var c = window.Cookies,
                i = window.Cookies = o();
            i.noConflict = function() {
                return window.Cookies = c, i
            }
        }
    }(function() {
        function o() {
            for (var o = 0, c = {}; o < arguments.length; o++) {
                var i = arguments[o];
                for (var e in i) c[e] = i[e]
            };
            return c
        };
        return function e(i) {
            function c(e, n, t) {
                var s;
                if ('undefined' != typeof document) {
                    if (1 < arguments.length) {
                        if ('number' == typeof(t = o({
                                path: '/'
                            }, c.defaults, t)).expires) {
                            var l = new Date;
                            l.setMilliseconds(l.getMilliseconds() + 864e5 * t.expires), t.expires = l
                        };
                        t.expires = t.expires ? t.expires.toUTCString() : '';
                        try {
                            s = JSON.stringify(n), /^[\{\[]/.test(s) && (n = s)
                        } catch (p) {};
                        n = i.write ? i.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var u = '';
                        for (var d in t) t[d] && (u += '; ' + d, !0 !== t[d] && (u += '=' + t[d]));
                        return document.cookie = e + '=' + n + u
                    };
                    e || (s = {});
                    for (var S = document.cookie ? document.cookie.split('; ') : [], h = /(%[0-9A-Z]{2})+/g, k = 0; k < S.length; k++) {
                        var f = S[k].split('='),
                            r = f.slice(1).join('=');
                        this.json || '"' !== r.charAt(0) || (r = r.slice(1, -1));
                        try {
                            var a = f[0].replace(h, decodeURIComponent);
                            if (r = i.read ? i.read(r, a) : i(r, a) || r.replace(h, decodeURIComponent), this.json) try {
                                r = JSON.parse(r)
                            } catch (p) {};
                            if (e === a) {
                                s = r;
                                break
                            };
                            e || (s[a] = r)
                        } catch (p) {}
                    };
                    return s
                }
            };
            return (c.set = c).get = function(o) {
                return c.call(c, o)
            }, c.getJSON = function() {
                return c.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, c.defaults = {}, c.remove = function(e, i) {
                c(e, '', o(i, {
                    expires: -1
                }))
            }, c.withConverter = e, c
        }(function() {})
    });
    var csCookies = Cookies.noConflict(),
        cookieScriptWindow = window.document,
        cookieScripts = document.getElementsByTagName('script'),
        cookieScriptSrc = cookieScripts[cookieScripts.length - 1].src,
        cookieQuery = null,
        cookieScriptPosition = 'bottom',
        cookieScriptDomain = '',
        cookieScriptReadMore = '/policy',
        cookieId = 'fec5e6b1c0eff052f84503576d24de11',
        cookieScriptDebug = 0,
        cookieScriptShowBadge = !0,
        cookieScriptCurrentUrl = window.location.href,
        cookieScriptTitle = '<h4 id="cookiescript_header">Ce blog utilise des cookies.</h4>',
        cookieScriptDesc = 'Ce site web utilise des cookies afin de faire fonctionner certaines de ses fonctionnalit\u00e9s telles que les commentaires. Voir la "Cookie Policy" pour plus d\'infos.<br \/>',
        cookieScriptAccept = 'D\'accord',
        cookieScriptMore = 'En savoir plus',
        cookieScriptCopyrights = 'D\'accord',
        cookieBackground = '#111';
    cookieScriptReject = '<div id="cookiescript_reject">Pas d\'accord</div>', cookieScriptLoadJavaScript = function(e, i) {
        var c = document.getElementsByTagName('head')[0],
            o = document.createElement('script');
        o.type = 'text/javascript', o.src = e, i != undefined && (o.onload = o.onreadystatechange = function() {
            (!o.readyState || /loaded|complete/.test(o.readyState)) && (o.onload = o.onreadystatechange = null, c && o.parentNode && c.removeChild(o), o = undefined, i())
        }), c.insertBefore(o, c.firstChild)
    }, InjectCookieScript = function() {
        cookieScriptDropfromFlag = 0;
        cookieScriptDroptoFlag = 0;
        if (window.location.protocol == 'https:') cookieScriptStatsDomain = '';
        else cookieScriptStatsDomain = '';
        cookieScriptCreateCookie = function(o, e, c) {
            if (window.location.protocol == 'https:') var n = ';secure';
            else var n = '';
            var r = '',
                i, t;
            c && (i = new Date, i.setTime(i.getTime() + c * 864e5), r = '; expires=' + i.toGMTString()), t = '', cookieScriptDomain != '' && (t = '; domain=' + cookieScriptDomain), document.cookie = o + '=' + e + r + t + '; path=/' + n
        }, cookieScriptReadCookie = function(o) {
            for (var c = o + '=', t = document.cookie.split(';'), e, i = 0; i < t.length; i++) {
                for (e = t[i]; e.charAt(0) == ' ';) e = e.substring(1, e.length);
                if (e.indexOf(c) == 0) return e.substring(c.length, e.length)
            };
            return null
        };
        cookieQuery(function() {
            cookieQuery('#cookiescript_injected', cookieScriptWindow).remove();
            cookieScriptAddBox = function() {
                cookieQuery('body', cookieScriptWindow).append('<div id="cookiescript_injected"><div id="cookiescript_wrapper">' + cookieScriptTitle + cookieScriptDesc + '<div id="cookiescript_buttons"><div id="cookiescript_accept">' + cookieScriptAccept + '</div>' + cookieScriptReject + '<div id="cookiescript_readmore">' + cookieScriptMore + '</div></div><a href="//' + cookieScriptSource + '" target="_blank" id="cookiescript_link" style="display:hidden !important"></a><div id="cookiescript_pixel"></div></div>');
                if (cookieScriptPosition == 'top') {
                    cookieQuery('#cookiescript_injected', cookieScriptWindow).css('top', 0)
                } else {
                    cookieQuery('#cookiescript_injected', cookieScriptWindow).css('bottom', 0)
                };
                cookieQuery('#cookiescript_injected', cookieScriptWindow).css({
                    'background-color': '#111111',
                    'z-index': '999999',
                    'opacity': '1',
                    'position': 'fixed',
                    'padding': '15px 0px 5px 0',
                    'width': '100%',
                    'left': '0',
                    'font-size': '13px',
                    'font-weight': 'normal',
                    'text-align': 'left',
                    'letter-spacing': 'normal',
                    'color': '#FFFFFF',
                    'font-family': 'Arial, sans-serif',
                    'display': 'none',
                    '-moz-box-shadow': '0px 0px 8px #000000',
                    '-webkit-box-shadow': '0px 0px 8px #000000',
                    'box-shadow': '0px 0px 8px #000000'
                });
                cookieQuery('#cookiescript_buttons', cookieScriptWindow).css({
                    'margin': '10px auto 5px auto',
                    'font-size': '13px',
                    'font-weight': 'normal',
                    'text-align': 'center',
                    'font-family': 'Arial, sans-serif'
                });
                cookieQuery('#cookiescript_wrapper', cookieScriptWindow).css({
                    'width': '100%',
                    'margin': '0 auto',
                    'font-size': '13px',
                    'font-weight': 'normal',
                    'text-align': 'center',
                    'color': '#FFFFFF',
                    'font-family': 'Arial, sans-serif',
                    'line-height': '18px',
                    'letter-spacing': 'normal',
                    'padding': '0 5px'
                });
                cookieQuery('#cookiescript_injected h4#cookiescript_header', cookieScriptWindow).css({
                    'background-color': '#111111',
                    'z-index': '999999',
                    'padding': '0 0 7px 0',
                    'text-align': 'center',
                    'color': '#FFFFFF',
                    'font-family': 'Arial, sans-serif',
                    'display': 'block',
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'margin': '0'
                });
                cookieQuery('#cookiescript_injected span', cookieScriptWindow).css({
                    'display': 'block',
                    'font-size': '100%',
                    'margin': '5px 0'
                });
                cookieQuery('#cookiescript_injected a', cookieScriptWindow).css({
                    'text-decoration': 'underline',
                    'color': '#FFFFFF'
                });
                cookieQuery('#cookiescript_injected a#cookiescript_link', cookieScriptWindow).css({
                    'text-decoration': 'none',
                    'color': '#FFFFFF',
                    'font-size': '85%',
                    'padding': '0px 10px 0 0',
                    'float': 'right'
                });
                cookieQuery('#cookiescript_injected div#cookiescript_accept,#cookiescript_injected div#cookiescript_readmore, #cookiescript_injected div#cookiescript_reject', cookieScriptWindow).css({
                    '-webkit-border-radius': '5px',
                    '-khtml-border-radius': '5px',
                    '-moz-border-radius': '5px',
                    'border-radius': '5px',
                    'border': '0',
                    'padding': '6px 10px',
                    'font-weight': 'bold',
                    'font-size': '13px',
                    'cursor': 'pointer',
                    'margin': '0 15px 0 0',
                    '-webkit-transition': '0.25s',
                    '-moz-transition': '0.25s',
                    'transition': '0.25s',
                    'text-shadow': 'rgb(0, 0, 0) 0px 0px 2px',
                    'display': 'inline-block'
                });
                cookieQuery('#cookiescript_injected div#cookiescript_readmore', cookieScriptWindow).css({
                    'background-color': '#697677',
                    'color': '#FFFFFF'
                });
                cookieQuery('#cookiescript_injected div#cookiescript_reject', cookieScriptWindow).css({
                    'background-color': '#B75B5B',
                    'color': '#FFFFFF'
                });
                cookieQuery('#cookiescript_injected div#cookiescript_accept', cookieScriptWindow).css({
                    'background-color': '#5BB75B',
                    'color': '#FFFFFF'
                });
                cookieQuery('#cookiescript_injected div#cookiescript_pixel', cookieScriptWindow).css({
                    'width': '1px',
                    'height': '1px',
                    'float': 'left'
                });
                cookieQuery('#cookiescript_injected', cookieScriptWindow).fadeIn(1000);
                cookieQuery('#cookiescript_injected div#cookiescript_accept', cookieScriptWindow).click(function() {
                    e()
                });
                cookieQuery('#cookiescript_injected div#cookiescript_reject', cookieScriptWindow).click(function() {
                    r()
                });
                cookieQuery('#cookiescript_injected div#cookiescript_readmore', cookieScriptWindow).click(function() {
                    window.open(cookieScriptReadMore, '_self');
                    return !1
                })
            };
            cookieScriptCurrentValue = i('action');
            if (cookieScriptCurrentValue == 'accept') t();
            if (cookieScriptCurrentValue == 'accept' || cookieScriptCurrentValue == 'reject') {
                c();
                return !1
            };
            var n = i('firstpage');
            if (n != null && n != cookieScriptCurrentUrl) {
                o('action', 'accept');
                t();
                return !1
            } else {
                o('firstpage', cookieScriptCurrentUrl)
            };
            cookieScriptAddBox();
            p()
        });

        function p() {
            cookieQuery('iframe[data-cookiescript="accepted"]').not(':has([src])').each(function() {
                var o = this;
                o = (o.contentWindow) ? o.contentWindow : (o.contentDocument.document) ? o.contentDocument.document : o.contentDocument;
                o.document.open();
                o.document.write(cookieQuery(this).attr('alt'));
                o.document.close()
            })
        };

        function e() {
            if (typeof cookieScriptScrollfired !== 'undefined') return !1;
            cookieQuery('#cookiescript_injected', cookieScriptWindow).fadeOut(200);
            o('action', 'accept');
            t();
            cookieQuery('#csconsentcheckbox').prop('checked', !0);
            if (typeof cookieScriptShowBadge === 'undefined') cookieScriptShowBadge = !0;
            if (!cookieScriptShowBadge) return !1;
            c()
        };

        function r() {
            o('action', 'reject');
            d();
            cookieQuery('#cookiescript_injected', cookieScriptWindow).fadeOut(200);
            cookieQuery('#csconsentcheckbox').prop('checked', !1);
            if (typeof cookieScriptShowBadge === 'undefined') cookieScriptShowBadge = !0;
            if (!cookieScriptShowBadge) return !1;
            c()
        };

        function o(o, i) {
            var t = 'CookieScriptConsent';
            try {
                var c = JSON.parse(cookieScriptReadCookie(t))
            } catch (e) {
                console.log(e);
                return !1
            };
            if (c == null) {
                var c = {};
                c[o] = i
            } else {
                c[o] = i
            };
            try {
                var r = JSON.stringify(c)
            } catch (e) {
                console.log(e);
                return !1
            };
            cookieScriptCreateCookie(t, r, 30)
        };

        function i(o) {
            var c = 'CookieScriptConsent';
            try {
                var i = JSON.parse(cookieScriptReadCookie(c))
            } catch (e) {
                console.log(e);
                return null
            };
            if (i == null) {
                return null
            } else {
                return i[o]
            }
        };

        function c() {
            if (cookieQuery('#cookiescript_badge').length) {
                cookieQuery('#cookiescript_badge', cookieScriptWindow).fadeIn(500)
            } else {
                cookieQuery('body', cookieScriptWindow).append('<div id="cookiescript_badge">Cookies</div>');
                cookieQuery('#cookiescript_badge', cookieScriptWindow).css({
                    'position': 'fixed',
                    'font': '13px Arial',
                    'line-height': '20px',
                    'color': '#FFFFFF',
                    'display': 'none',
                    'cursor': 'pointer',
                    'z-index': '999',
                    'background': '#111111',
                    'padding': '6px 11px 2px',
                    '-moz-box-shadow': '0px 0px 3px #000000',
                    '-webkit-box-shadow': '0px 0px 3px #000000',
                    'box-shadow': '0px 0px 3px #000000',
                    'left': '10px',
                    'bottom': '0px',
                    '-webkit-border-top-left-radius': '5px',
                    '-webkit-border-top-right-radius': '5px',
                    '-moz-border-radius-topleft': '5px',
                    '-moz-border-radius-topright': '5px',
                    'border-top-left-radius': '5px',
                    'border-top-right-radius': '5px'
                });
                cookieQuery('#cookiescript_badgeimage', cookieScriptWindow).css({
                    'width': '100%',
                    'height': '100%'
                });
                cookieQuery('#cookiescript_badge', cookieScriptWindow).fadeIn(500);
                cookieQuery('#cookiescript_badge').click(n)
            }
        };

        function n() {
            if (cookieQuery('#cookiescript_badge').length) {
                cookieQuery('#cookiescript_badge', cookieScriptWindow).fadeOut(200)
            };
            if (cookieQuery('#cookiescript_injected').length) {
                cookieQuery('#cookiescript_injected', cookieScriptWindow).fadeIn(200)
            } else {
                cookieScriptAddBox()
            }
        };

        function s(o) {
            if (s) console.log(o)
        };

        function a() {
            if (i('action') == 'accept') {
                cookieQuery('#csconsentcheckbox').prop('checked', !0)
            };
            cookieQuery('#csconsentcheckbox').change(function() {
                if (this.checked) {
                    e()
                } else {
                    r()
                }
            });
            cookieQuery('#csconsentlink').click(function() {
                n()
            })
        };
        a();

        function d() {
            var r = csCookies.get();
            for (var o in r) {
                if (o == 'CookieScriptConsent') {
                    continue
                };
                if (!csCookies.remove(o)) {
                    cookiePossibleHosts = [window.location.host, '.' + window.location.host];
                    var c = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$'),
                        t = c.exec(window.location.host),
                        i = window.location.host.replace(t[0], '').slice(0, -1);
                    if (i != '') cookiePossibleHosts.push(window.location.host.substr(i.length));
                    for (var e in cookiePossibleHosts) {
                        if (csCookies.remove(o, {
                                path: '/',
                                domain: cookiePossibleHosts[e]
                            }) && s) console.log('deleting cookie:' + o + '| domain:' + cookiePossibleHosts[e])
                    }
                }
            }
        };

        function t() {
            cookieQuery('img[data-cookiescript="accepted"]').each(function() {
                cookieQuery(this).attr('src', cookieQuery(this).attr('data-src'))
            });
            cookieQuery('script[type="text/plain"][data-cookiescript="accepted"]').each(function() {
                if (cookieQuery(this).attr('src')) {
                    cookieQuery(this).after('<script type="text/javascript" src="' + cookieQuery(this).attr('src') + '"><\/script>')
                } else {
                    cookieQuery(this).after('<script type="text/javascript">' + cookieQuery(this).html() + '<\/script>')
                };
                cookieQuery(this).empty()
            });
            cookieQuery('iframe[data-cookiescript="accepted"]').each(function() {
                cookieQuery(this).attr('src', cookieQuery(this).attr('data-src'))
            });
            cookieQuery('embed[data-cookiescript="accepted"]').each(function() {
                cookieQuery(this).replaceWith(cookieQuery(this).attr('src', cookieQuery(this).attr('data-src'))[0].outerHTML)
            });
            cookieQuery('object[data-cookiescript="accepted"]').each(function() {
                cookieQuery(this).replaceWith(cookieQuery(this).attr('data', cookieQuery(this).attr('data-data'))[0].outerHTML)
            });
            cookieQuery('link[data-cookiescript="accepted"]').each(function() {
                cookieQuery(this).attr('href', cookieQuery(this).attr('data-href'))
            })
        };
        cookieQuery(window).scroll(function() {
            e();
            cookieScriptScrollfired = !0
        })
    };
    window.jQuery && jQuery.fn && /^(1\.[8-9]|2\.[0-9]|1\.1[0-2]|3\.[0-9])/.test(jQuery.fn.jquery) ? (cookieScriptDebug && window.console && console.log('Using existing jQuery version ' + jQuery.fn.jquery), cookieQuery = window.jQuery, InjectCookieScript()) : (cookieScriptDebug && window.console && console.log('Loading jQuery 1.8.1 from ajax.googleapis.com'), cookieScriptLoadJavaScript(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js', function() {
        cookieQuery = jQuery.noConflict(!0), InjectCookieScript()
    }));
