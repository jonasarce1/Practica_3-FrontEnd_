import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Signal } from "@preact/signals";

const HiButton: FunctionComponent< { type?: string; children?: any; nombre: Signal<string>; apellido: Signal<string>; textuco: Signal<string>; }
> = (
  { type, children, nombre, apellido, textuco }
) => {
  const audio = IS_BROWSER ? new Audio("./hihihi.mp3") : null;
  return (
    <button
      class="trippyBackgroundAnimated"
      type={type}
      onClick={(e) => {
        e.preventDefault();
        if (audio && audio.paused) {
          audio.play();
        } else if (audio) {
          audio.pause();
        }
        textuco.value = `Hola ${nombre.value} ${apellido.value}!`;
      }}
    >
      {children}
    </button>
  );
};

export default HiButton;
