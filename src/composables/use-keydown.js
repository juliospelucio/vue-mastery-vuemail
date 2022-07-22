import { onBeforeUnmount } from 'vue';

let useKeyDown = (keyCombo) => {
    let onKeyDown = (event) => {
        let kc = keyCombo.find(kc => kc.key == event.key)
        if (kc)
            kc.fn()
    }
    window.addEventListener('keydown', onKeyDown);

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', onKeyDown);
    })
}

export default useKeyDown