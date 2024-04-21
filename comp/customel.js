var theme;
if (document.head.theme != null) theme = '/graph/' + document.currentScript.theme + '/';
else theme = '/graph/';

class Toolbar extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML =
        '<a href="/index.html"><img src="' + theme + 'home.gif" alt="Return to home" title="Return to home"></a>';
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
        this.innerHTML = '<img src="' + theme + 'bup.gif">';
    }
}

customElements.define("bullet-comp", Bullet);
customElements.define("toolbar-comp", Toolbar);
