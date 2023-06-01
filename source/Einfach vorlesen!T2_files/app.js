$(function () {
    $('.menu_mobile').click(function () {
        $('.stroke').toggleClass('active');
        $('.menu_flex').toggleClass('active');
        $('.toggle_nav').toggleClass('move');
        $('body').toggleClass('scroll');
    });
    $('.toggle_nav ul li a').click(function () {
        $('.stroke').toggleClass('active');
        $('.menu_flex').toggleClass('active');
        $('.toggle_nav').toggleClass('move');
        $('body').toggleClass('scroll');
    });

    $('.alter').click(function () {
        $('.alter_active').removeClass('alter_active');
        $('.alter_active').addClass('alter');
        $(this).addClass('alter_active');
    });

    function checkBodyScroll() {
        if ($('.overlay_tools.info').hasClass('show') || $('.overlay_tools.font').hasClass('show')) {
            $('body').addClass('scroll');
        }
        else {
            $('body').removeClass('scroll');
        }

    }

    $('.infobutton').click(function () {
        $('.overlay_tools.info').toggleClass('show');
        $('.overlay_tools.font').removeClass('show');
        $('.infobutton').toggleClass('color_active');
        $('.fontbutton').removeClass('color_active');
        checkBodyScroll();

    });

    $('.fontbutton').click(function () {
        $('.overlay_tools.font').toggleClass('show');
        $('.overlay_tools.info').removeClass('show');
        $('.fontbutton').toggleClass('color_active');
        $('.infobutton').removeClass('color_active');
        checkBodyScroll();
    });

    $('.geschichte_bg').click(function () {
        $('.overlay_tools.font').removeClass('show');
        $('.overlay_tools.info').removeClass('show');
        $('.infobutton').removeClass('color_active');
        $('.fontbutton').removeClass('color_active');
        $('body').removeClass('scroll');
    });

    $('.color_circle').click(function () {
        $('.color_circle').removeClass('color_circle_active');
        $(this).addClass('color_circle_active');
    });

    $('.lesen_bg .color1').click(function () {
        $('.geschichte_bg').removeClass('color2');
        $('.geschichte_bg').removeClass('color3');
        $('.geschichte_bg').removeClass('color4');
        $('.geschichte_bg').removeClass('color5');
        $('.geschichte_bg').addClass('color1');
    });
    $('.lesen_bg .color2').click(function () {
        $('.geschichte_bg').removeClass('color1');
        $('.geschichte_bg').removeClass('color3');
        $('.geschichte_bg').removeClass('color4');
        $('.geschichte_bg').removeClass('color5');
        $('.geschichte_bg').addClass('color2');
    });
    $('.lesen_bg .color3').click(function () {
        $('.geschichte_bg').removeClass('color2');
        $('.geschichte_bg').removeClass('color1');
        $('.geschichte_bg').removeClass('color4');
        $('.geschichte_bg').removeClass('color5');
        $('.geschichte_bg').addClass('color3');
    });
    $('.lesen_bg .color4').click(function () {
        $('.geschichte_bg').removeClass('color2');
        $('.geschichte_bg').removeClass('color3');
        $('.geschichte_bg').removeClass('color1');
        $('.geschichte_bg').removeClass('color5');
        $('.geschichte_bg').addClass('color4');
    });
    $('.lesen_bg .color5').click(function () {
        $('.geschichte_bg').removeClass('color2');
        $('.geschichte_bg').removeClass('color3');
        $('.geschichte_bg').removeClass('color4');
        $('.geschichte_bg').removeClass('color1');
        $('.geschichte_bg').addClass('color5');
    });
    var classesfont = ['font1', 'font2', 'font3', 'font4', 'font5'];
    var fontIndex = 0;
    var classessize = ['fontsize1', 'fontsize2', 'fontsize3', 'fontsize4', 'fontsize5'];
    var sizeIndex = 0;

    function setStyles() {
        $('.geschichte p, .geschichte h1').each(function () {
            if ($(this).hasClass('headline')) {
                // console.log('headline');

                this.className = 'headline ' + classessize[sizeIndex] + ' ' + classesfont[fontIndex];
            }
            else {
                this.className = classessize[sizeIndex] + ' ' + classesfont[fontIndex];
            }
        });
    }

    $('.font_size').click(function () {
        sizeIndex++;
        if (sizeIndex >= classessize.length) {
            sizeIndex = 0;
        }

        setStyles();

    });
    $('.font_family').click(function () {
        fontIndex++;
        if (fontIndex >= classesfont.length) {
            fontIndex = 0;
        }

        setStyles();

    });


});
(function ($) {

    $.fn.loading = function (action) {
        var elem = $('.neuheiten-partial', this);

        if (action === 'start') {
            // console.log('loading list START');
            //elem.fadeTo(350, 0);
        }

        if (action === 'end') {
            //elem.fadeTo(150, 1);
            // console.log('loading list END');
        }

    };

}(jQuery));


// custom popup plugin used in social
(function ($) {

    $.fn.myPopup = function (action) {
        // var container = $('.popup-container', this.parent());
        var self = this;

        if (action === 'open') {
            // console.log('show')
            $(self).fadeTo(200, 1);
            // $(container).addClass('blurred').addClass('disabled');

            $('.close', self).click(function () {
                $(self).myPopup('close');
                return false;
            });

            // click in empty space of self also closes popup
            // but not clicks inside popup-content
            $(self).click(function (e) {
                // console.log(e);
                // if (e.target.id == $(self).attr('id')) {
                $(self).myPopup('close');
                return false;
                // }
            });

            return false;
        }

        if (action === 'close') {
            // Close popup code.
            $(this).hide();
            // $(container).removeClass('blurred').removeClass('disabled');
            return false;
        }
    };
}(jQuery));


$(function () {
    var container = $('div.loading_container');
    // console.log('ran container', container);
    if (window.sessionStorage) {
        if (window.sessionStorage.hasLoaded) {
            // advertisement already seen, hide loader immediately
            $(container).css('display', 'none');
            return;
        } else {
            // show advertisement
            // fadein inner
            // $('body').css('overflow', 'hidden');
            $('.inner', container).fadeTo(500, 1);

            window.setTimeout(function () {
                // hide loader
                $(container).fadeTo(1000, 0, function () {
                    $('body').css('overflow', 'auto');
                    $(container).css('display', 'none');
                    // remember: advertisement already seen,
                    window.sessionStorage.hasLoaded = true;
                });

            }, 2000);

        }
    }
    else {
        $(container).css('display', 'none');
    }
});

$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 105
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

/** Bookmarking
 **************************************************
 */
var bookmarkMode = false;
var storySlug = undefined;

$(document).ready(function () {
    storySlug = $('h1.story').data('slug');
    if (storySlug) {
        $('.bookmarkable').on('click', function (event) {
            if (!bookmarkMode) {
                return
            }
            setBookmark($(this).data('index'));
        });

        gotoBookmark();
    }

    // click handler on geschichte wrapper closes bookmark notification
    $('.geschichte_bg').on('click', function (event) {
        $('.bookmark-notification').myPopup('close');
    });

});

function toggleBookmarkMode() {

    bookmarkMode = !bookmarkMode;

    if (!bookmarkMode) {
        unsetBookmark();
        return;
    }

    var scrollTop = $(window).scrollTop() + 60 // toolbar height;
    var windowHeight = $(window).height();
    var found = false;
    $('.bookmarkable').each(function () {
        $(this).addClass('selectable')
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && found == false) {
            setBookmark($(this).data('index'));
            found = true;
            return;
        }
    });
}


function unsetBookmark() {
    $('.bookmarkable').each(function () {
        $(this).removeClass('selectable');
        $(this).removeClass('bookmarked');
    });
    // window.localStorage.removeItem(storySlug);
    $.request('onUnsetBookmark', {
        data: {
            storySlug: storySlug
        },
        success: function (data) {
            // console.log('Deleted!');
        }
    })
}


function setBookmark(index) {
    $('.bookmarkable').each(function () {
        $(this).removeClass('bookmarked');
    });
    $('.p-' + index).addClass('bookmarked');

    // window.localStorage.setItem(storySlug, index);
    $.request('onSetBookmark', {
        data: {
            storySlug: storySlug,
            index: index
        },
        success: function (data) {
            // console.log('Finished!', data);
        }
    })
}

function gotoBookmark() {

    $.request('onGetBookmark', {
        data: {
            storySlug: storySlug
        },
        success: function (data) {
            // console.log('Finished!', data);
            const index = data.result
            if (index) {
                $('.p-' + index).addClass('bookmarked');
                $('html, body').animate({
                    scrollTop: $('.p-' + index).offset().top - 60  // toolbar height
                }, 500, 'linear');
            }
        }
    })

    // var index = window.localStorage.getItem(storySlug);
    // if (index) {
    //     $('.p-' + index).addClass('bookmarked');
    //     $('html, body').animate({
    //         scrollTop: $('.p-' + index).offset().top - 60  // toolbar height
    //     }, 500, 'linear');
    // }
}
