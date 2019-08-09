export interface IFocusTrap {
    inactive: boolean;
    readonly focused: boolean;
    focusFirstElement: () => void;
    focusLastElement: () => void;
    getFocusableElements: () => HTMLElement[];
}
/**
 * Focus trap web component.
 * @slot - Default content.
 */
export declare class FocusTrap extends HTMLElement implements IFocusTrap {
    static readonly observedAttributes: string[];
    /**
     * Determines whether the focus trap is active or not.
     * @attr
     */
    inactive: boolean;
    private $backup;
    private debounceId;
    private $start;
    private $end;
    private _focused;
    /**
     * Returns whether the element currently has focus.
     */
    readonly focused: boolean;
    /**
     * Attaches the shadow root.
     */
    constructor();
    /**
     * Hooks up the element.
     */
    connectedCallback(): void;
    /**
     * Tears down the element.
     */
    disconnectedCallback(): void;
    /**
     * When the attributes changes we need to re-render the template.
     */
    attributeChangedCallback(): void;
    /**
     * Focuses the first focusable element in the focus trap.
     */
    focusFirstElement(): void;
    /**
     * Focuses the last focusable element in the focus trap.
     */
    focusLastElement(): void;
    /**
     * Returns a list of the focusable children found within the element.
     */
    getFocusableElements(): HTMLElement[];
    /**
     * Focuses on either the last or first focusable element.
     * @param {boolean} trapToEnd
     */
    protected trapFocus(trapToEnd?: boolean): void;
    /**
     * When the element gains focus this function is called.
     */
    private onFocusIn;
    /**
     * When the element looses its focus this function is called.
     */
    private onFocusOut;
    /**
     * Updates the focused property and updates the view.
     * The update is debounced because the focusin and focusout out
     * might fire multiple times in a row. We only want to render
     * the element once, therefore waiting until the focus is "stable".
     * @param value
     */
    private updateFocused;
    /**
     * Updates the template.
     */
    protected render(): void;
}
