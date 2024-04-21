class Toolbar extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML =
        '<a href="https://asasnat.github.io/index.html"><img src="https://asasnat.github.io/graph/home.gif" alt="Return to home" title="Return to home"></a>';
    }
}

customElements.define("toolbar-component", Toolbar);
