{{#if isModule}}
import css from '@/styles.scss';

{{/if}}
export default class extends window.casthub.{{extend}} {
    constructor() {
        super();
        {{#if isModule}}

        // Set the Module HTML using the Template file.
        this.$container.appendChild(this.template());

        // Set the CSS from the external file.
        this.css = css;
        {{/if}}
    }

    public async mounted(): Promise<void> {
        await super.mounted();
    }
}
