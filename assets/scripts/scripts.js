$(function () {
/*
    $(window).on('ajaxError', function(event, c,message,d,e) {
        UIkit.notification({
            message: message,
            status: 'warning',
            pos: 'top-center',
            timeout: 5000
        });
    });
*/
    $(window).on('ajaxConfirmMessage', function(event, message) {
        event.preventDefault();
        UIkit.modal.confirm(message, {labels: {ok: 'JA', cancel: 'NEIN'}}).then(() => {
            event.promise.resolve();
        }, () => {event.promise.reject()});
        return true;
    });
    $(document).on('ajaxSetup', function (event, context) {
        context.options.handleErrorMessage = function (message) {
            UIkit.notification({
                message: message,
                status: 'warning',
                pos: 'top-center',
                timeout: 5000
            });
        }
        context.options.handleFlashMessage = function (message, type) {
            UIkit.notification({
                message: message,
                pos: 'top-center',
                timeout: 5000
            });
        }
    })
});

var Smooth = {
    init: function(el) {
        if (!el.hasAttribute('data-height')) {
            el.style.display = el.hasAttribute('data-flex') ? 'flex' : 'block';
            el.dataset.height = el.offsetHeight+"px";
            el.classList.add('smooth');
            el.style.height = 0;
        }
        return el;
    },
    expand: function(element) {
        var div = Smooth.init(element);
        setTimeout(function() { div.style.height = div.dataset.height; }, 20);
    },
    collapse: function(element) {
        var div = Smooth.init(element);
        div.style.height = 0;
    }
}

function toggleContent(element) {
    element.closest('.toggle-content').classList.toggle('expanded')
    if (element.closest('.toggle-content').classList.contains('expanded')) {
        Smooth.expand(element.closest('.toggle-content').querySelector('.hidden-content'))
    } else {
        Smooth.collapse(element.closest('.toggle-content').querySelector('.hidden-content'))
    }
}

function initNavigationScroll() {
    let lastScrollTop = 0;
    const wrapper = document.querySelector(".autohide");
    const navHeight = wrapper.clientHeight;
    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;
        const safeArea = scrollTop < navHeight;
        if (safeArea || scrollTop < lastScrollTop) {
            wrapper.classList.remove("scrolled-down");
            wrapper.classList.add("scrolled-up");
        } else {
            wrapper.classList.remove("scrolled-up");
            wrapper.classList.remove("expanded");
            wrapper.classList.add("scrolled-down");
            Smooth.collapse(wrapper.closest('.toggle-content').querySelector('.hidden-content'))
        }
        lastScrollTop = scrollTop;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initNavigationScroll();
});
