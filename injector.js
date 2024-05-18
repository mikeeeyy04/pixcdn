window.pf = window.pf || {};
window.pf.ui = window.pf.ui || {};

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

const uiSrc = "https://rawcdn.githack.com/shzdx1/pixels_cdn/main/public/ingameUI-dev.js?token=GHSAT0AAAAAACQHXBA5H7UTKQENWX22T5MYZSID3YA"


const forgeSrc = "https://cdn.pixelstools.info/PixelsForge-dev.js"

loadScript(uiSrc)
    .then(() => loadScript(forgeSrc))
    .then(() => {
        window.pf.ui.hi();
        window.pf.hi();
    })
    .catch(console.error);