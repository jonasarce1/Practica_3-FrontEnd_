import { useState } from "preact/hooks";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import HiButton from "../islands/HiButton.tsx";
import Shower from "../components/Shower.tsx";
import { useSignal } from "@preact/signals";

const HoHoHo: FunctionComponent = () => {
    const name = useSignal(""); 
    const lastName = useSignal("");
    const textuco = useSignal("");

    return (
        <div class="formBody">
          <form class="formBox" method="get" target="/hihihi">
            <h3>Say hi hi hi</h3>
            <input type="text" name="nombre" placeholder={"Name"} value = {name}
            onInput={(e) => name.value = e.currentTarget.value}
            />
            <br />
            <input type="text" name="apellido" placeholder={"Last name"} value = {lastName}
            onInput={(e) => lastName.value = e.currentTarget.value}
            />
            <br />
            <HiButton nombre={name} apellido={lastName} textuco={textuco}>
              Hi!
            </HiButton>
          </form>
          <Shower
            text={textuco}
          />
        </div>
      );
}

export default HoHoHo;