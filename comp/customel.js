class Toolbar extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML =
        '<a href="/index.html"><img src="/graph/home.gif" alt="Return to home" title="Return to home"></a>';
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
        this.innerHTML = '<img src="/graph/bup.gif">';
    }
}

customElements.define("bullet-comp", Bullet);
customElements.define("toolbar-comp", Toolbar);
