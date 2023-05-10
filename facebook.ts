let html = `<div id="mega-alert">
                            <button class="button">close</button>
                            <p>Mới sáng sớm đã facebook,<br/> lên <span style="color: #ff4343;">habitica</span> mà xem phải làm gì.</p>
                        </div>`;
let now = new Date();
if (now.getHours() < 7) {
    let template = document.createElement("template");
    template.innerHTML = html;
    let megaAlert = template.content.firstElementChild!.cloneNode(true) as HTMLElement;
    document.querySelector("body")!.appendChild(megaAlert);
    megaAlert.querySelector("button.button")!.addEventListener("click", function () {
        megaAlert.remove();
    });
}
let elements = [
    'a[href^="/gaming"], a[href^="/watch"], a[href^="/marketplace"]',
    'a[href*="facebook.com/watch"], a[href*="facebook.com/marketplace"], a[href*="facebook.com/gaming"]'
];
let elementsAsString = elements.toString();
let count = 3;
let timer = setInterval(function () {
    let list = document.querySelectorAll(elementsAsString);
    if(list && list.length > 0){
        list.forEach(function(element){
            element.parentElement!.parentElement!.remove();
        });
       count--;
       if(count == 0) clearInterval(timer);
    }
}, 1000);