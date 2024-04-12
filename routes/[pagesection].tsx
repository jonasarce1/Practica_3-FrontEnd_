import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Fragment } from "preact/jsx-runtime";
import Axios from "npm:axios";
import Lover from "../components/Lover.tsx";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";

type LoverT = { //Hay que usar los mismos atributos que en la API
  _id: string;
  photo: string;
};

type PokemonT = { 
  _id: string;
  image: string;
};

type MondongoT = { //Con el de pokemon vale porque tiene los mismos atributos
  name: string;
  image: string;
  sound: string;
}

export const handler: Handlers = { //Esto en handler porque no se puede hacer en renderizado
  GET: async (
    _req: Request,
    ctx: FreshContext<unknown, { pageData: LoverT[] | PokemonT[] }>,
  ) => {
    const { pagesection } = ctx.params;
    if (pagesection === "lovers") {
      const getData = await Axios.get<LoverT[]>(
        `https://lovers.deno.dev/`,
      );
      return ctx.render({ pageData: getData.data });
    } else if (pagesection === "pokemons") {
      const getData = await Axios.get<PokemonT[]>(
        `https://lospoquimones.deno.dev/`,
      );
      return ctx.render({ pageData: getData.data });
    } else if (pagesection === "superheroes") {
      const getData = await Axios.get<PokemonT[]>(
        `https://supermondongo.deno.dev/`,
      );
      return ctx.render({ pageData: getData.data });
    } else {
      return ctx.render({ pageData: [] });
    }
  },
};

const LoversPage = (props: PageProps<{ pageData: LoverT[] | PokemonT[] }>) => {
  const lovers = props.data.pageData;
  const partLength = lovers.length / 3;
  const firstPart = lovers.slice(0, partLength);
  const secondPart = lovers.slice(partLength, partLength * 2);
  const thirdPart = lovers.slice(partLength * 2);

  return (
    <Fragment>
      <div class={`titleSection ${props.url.pathname.slice(1)}`}>
        {props.url.pathname.slice(1) === "lovers" &&
          <h1 class="modernist">{props.url.pathname.slice(1)}</h1>}
        {props.url.pathname.slice(1) === "pokemons" &&
          <h1 class="fifties">{props.url.pathname.slice(1)}</h1>}
        {props.url.pathname.slice(1) === "superheroes" &&
          <h1 class="ninetyfive">{props.url.pathname.slice(1)}</h1>}
      </div>
      <div class="columns">
        <div class="column column-reverse">
          {secondPart.map((lover, n) => (
            <Lover image={(lover as any).photo
              ? (lover as LoverT).photo
              : (lover as PokemonT).image} key={n}
            />
          ))}
        </div>
        <div class="column">
          {firstPart.map((lover, n) => (
            <Lover
              image={(lover as any).photo
                ? (lover as LoverT).photo
                : (lover as PokemonT).image}
              key={n}
            />
          ))}
        </div>
        <div class="column column-reverse">
          {thirdPart.map((lover, n) => (
            <Lover
              image={(lover as any).photo
                ? (lover as LoverT).photo
                : (lover as PokemonT).image}
              key={n}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

//lover as any. foto significa que si tiene el atributo foto, es un lover, si no, es un pokemon

export default LoversPage;
