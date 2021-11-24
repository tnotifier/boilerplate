{{#if isModule}}
import css from '@/styles.scss';

{{/if}}
export default class extends window.tnotifier.{{extend}} {
    constructor() {
        super();
        {{#if isModule}}

        // Set the Module HTML using the Template file.
        this.$container.appendChild(this.template());

        // Set the CSS from the external file.
        this.css = css;
        {{/if}}
    }

    async mounted() {
        await super.mounted();
    }
{{#if notTrigger}}

    async run(input) {
        //
    }
{{/if}}
}
