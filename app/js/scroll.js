import $ from 'jquery';
export default function () {
    let $content = $('.content');

    $('a[href^="#"]').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        if( target.length ) {
            $content.stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    let $scrollUp = $('#scroll-up');
    $scrollUp.on('click', function (e) {
        e.preventDefault();
        $content.stop().animate({
            scrollTop: 0
        }, 1000);
    });

    $content.on('scroll', function() {
        if ($content.scrollTop() > 500) {
            $scrollUp.css('display', 'flex')
        } else {
            $scrollUp.css('display', 'none')
        }
    });
}