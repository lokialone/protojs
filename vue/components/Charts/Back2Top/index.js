/**
 * @Author: lokalone
 * @Date:   2017-04-19T15:40:14+08:00
 * @Last modified by:   lokalone
 * @Last modified time: 2017-04-20T12:48:26+08:00
 */
import './style.less';

let instance = '';
function create() {
    instance = document.createElement('div');
    instance.className = 'back-to-top';
    instance.innerHTML = `
    <i class="icon"></i>
    顶部
    `;
    document.body.appendChild(instance);
}

function smoothScroll() {
    let currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
}

function handlerClickBack() {
    instance.addEventListener('click', () => {
        smoothScroll();
    });
}

// function getDocumentHeight() {
//     let scrollTop = 0;
//     let bodyScrollTop = 0;
//     let documentScrollTop = 0;

//     if (document.body) {
//         bodyScrollTop = document.body.scrollTop;
//     }
//     if (document.documentElement) {
//         documentScrollTop = document.documentElement.scrollTop;
//     }
//     scrollTop = (bodyScrollTop - documentScrollTop > 0) ?
//         (bodyScrollTop) : documentScrollTop;
//     return scrollTop;
// }
//可视窗口高度(固定)
// function getWindowHeight() {
//     let windowHeight = 0;
//     if (document.compatMode === 'CSS1Compat') {
//         windowHeight = document.documentElement.clientHeight;
//     } else {
//         windowHeight = document.body.clientHeight;
//     }
//     return windowHeight;
// }
//滚动条高度
// function getScrollHeight() {
//     let scrollHeight = 0;
//     let bodyScrollHeight = 0;
//     let documentScrollHeight = 0;
//     if (document.body) {
//         bodyScrollHeight = document.body.scrollHeight;
//     }
//     if (document.documentElement) {
//         documentScrollHeight = document.documentElement.scrollHeight;
//     }
//     let compare = bodyScrollHeight - documentScrollHeight;
//     scrollHeight = (compare > 0) ? bodyScrollHeight : documentScrollHeight;
//     return scrollHeight;
// }

function whenShow() {
    instance.style.display = 'none';
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            instance.style.display = 'block';
        } else {
            instance.style.display = 'none';
        }
        // if (getScrollHeight() === getWindowHeight() + getDocumentHeight()) {
        //     instance.style.display = 'none';
        // }
    });
}

export function removeBacktop() {
    document.body.removeChild(instance);
}

export function backTop() {
    if (instance) return;
    create();
    handlerClickBack();
    whenShow();
}

export default {
    backTop
};
