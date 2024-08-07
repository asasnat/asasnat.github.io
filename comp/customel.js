var theme;
if (document.head.dataset.theme != null) theme = '/graph/' + document.head.dataset.theme + '/';
else theme = '/graph/';
var goback = '../index.html';

class Toolbar extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML =
        '<a href="/index.html"><img src="' + theme + 'home.png" alt="Return to home" title="Return to home"></a>';
    }
}

class ToolbarBack extends HTMLElement
{
    constructor()
    {
        super();
    }	
    
    connectedCallback()
    {
        this.innerHTML =
        '<a href=' + goback + '><img src="' + theme + 'back.png" alt="Go back a page" title="Go back a page"></a><a href="/index.html"><img src="' + theme + 'home.png" alt="Return to home" title="Return to home"></a>';
    }
}

class Bullet extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML = '<img src="' + theme + 'bup.png">';
    }
}

customElements.define("bullet-comp", Bullet);
customElements.define("toolbar-comp", Toolbar);
customElements.define("toolbarback-comp", ToolbarBack);

