class Toolbar extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML =
        '<a href="asasnat.github.io/index.html"><img src="asasnat.github.io/graph/home.gif" alt="Return to home" title="Return to home"></a>';
    }
}

customElements.define("toolbar-component", Toolbar);
