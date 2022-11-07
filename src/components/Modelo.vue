<template>
  <div class="w-full relative">
    <div class="bottom-0">
      <div class="pt-10 md:px-5 w-full h-[15rem] md:h-[30rem]">
        <img
          src="../assets/ipnportada.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div class="md:p-10 py-5">
        <div
          class="
            text-center text-3xl md:text-4xl
            font-bold font-roboto
            uppercase
            text-primary
          "
        >
          IPN
        </div>
        <div
          class="
            justify-center
            text-center
            font-roboto
            px-5
            md:px-10
            xl:px-40
            p-8
            text-sm
            md:text-base
          "
        >
          Somos un sistema educativo con mas de 10 años de experiencia en el
          ambito estudiantil y deportivo, destacando por contar con las
          instalaciones necesarias para brindar una experiencia de calidad a
          toda nuestra comunidad Euroamericano.
        </div>
      </div>
      <div class="w-full justify-center bg-gray-200 py-5 px-5 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold font-roboto text-primary">
              MISIÓN
            </div>
            <div class="font-roboto text-sm md:text-base">
              Ser un instituto que ofrezca educación de calidad, comprometidos
              con el aprendizaje y el desarrollo de los estudiantes
            </div>
          </div>

          <div class="text-center mt-5">
            <div class="text-3xl md:text-4xl font-bold text-primary">VISIÓN</div>
            <div class="font-roboto text-center text-sm md:text-base">
              Ser lideres en el sistema educativo, innovadores en el uso de la
              tecnologia, integros por nuestros valores y reconocido por el
              nivel academico de competencia deportiva y cultural de sus
              alumnos.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-[20rem] overflow-hidden relative">
      <img
        src="../assets/ipnportada.jpg"
        class="w-full h-full object-cover"
        alt="slider_back"
      />
      <div
        class="absolute w-full h-full top-0 right-0 bg-black opacity-70"
      ></div>
      <div
        class="
          w-full
          z-100
          h-full
          justify-center
          items-center
          flex
          bottom-0
          absolute
        "
      >
        <div class="w-full">
          <div>
            <div
              class="
              text-4xl
                md:text-5xl
                text-black
                pb-10
                animate__animated animate__slideInLeft
                text-center
                uppercase
                font-roboto font-bold
                tracking-widest
              "
            >
              Valores
            </div>
            <div
              class="
                uppercase
                tracking-wide
                px-10
                font-bebas
                text-white
                bg-primary
                text-center
                grid
                gap-10
                grid-cols-3
                md:grid-cols-6
                py-3
                w-full
              "
            >
              <div>Respeto</div>
              <div>esfuerzo</div>
              <div>tolerancia</div>
              <div>honestidad</div>
              <div class="">Responzabilidad</div>
              <div>aprendizaje</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-10 justify-center">
      <div class="px-5 md:px-10 grid md:grid-cols-2">
        <div
          class="
            w-full
            h-full
            md:flex
            justify-center
            items-center
            relative
            hidden
          "
        >
          <div class="w-full h-full absolute top-0">
            <div class="w-full h-full flex justify-center items-center">
              <div class="w-36 h-36 md:w-[25rem] md:h-[25rem] rounded-full border-4 md:border-8 border-secondary"></div>
            </div>
          </div>
          <img
            class="w-[35rem] relative"
            src="../assets/ipnportada.jpg"
            alt=""
          />
        </div>
        <div
          class="
            w-full
            h-full
            rounded-full
            flex
            justify-center
            items-center
          "
        >
          <div class="w-full h-full relative md:p-20">
            <img
              class=""
              src="../assets/ipnportada.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="p-10 justify-center">
        <div class="text-center text-3xl text-primary font-bold uppercase">
          calendario escolar ciclo 2022-2023
        </div>
        <div class="p-5 text-center">
          <button
            class="
              bg-primary
              rounded-full
              text-white
              px-5
              py-2
              uppercase
              text-sm
            "
          >
            Click aqui
          </button>
        </div>
      </div>
    </div>

    <!-- exitos -->
    <div class="bg-gray-200 py-10">
      <div
        data-aos-easing="ease-in-out"
        class="text-primary text-4xl font-roboto text-center"
      >
        Nuestros Éxitos
      </div>
      <div
        data-aos="fade"
        data-aos-easing="ease-in-out"
        class="w-full flex justify-center mt-10 mb-10"
      >
        <div class="w-2/3">
          <div class="grid grid-cols-2 xl:grid-cols-4 gap-5">
            <div
              class="flex justify-center"
              v-for="(item, index) in info"
              :key="index"
            >
              <img
                :src="getImage(item.img)"
                class="w-10 h-10 sm:w-16 sm:h-16"
                alt=""
              />
              <div class="pl-1">
                <h1
                  class="text-2xl sm:text-4xl text-primary font-black counter"
                >
                  {{ item.number }}
                </h1>
                <h1 class="text-gray-500 text-xs sm:text-sm">
                  {{ item.title }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

var info = ref([
  { img: 1, number: 1674, title: "ESTUDIANTES" },
  { img: 2, number: 846, title: "GRADUADOS" },
  { img: 3, number: 65, title: "DOCENTES" },
  { img: 4, number: 256, title: "CURSOS" },
]);

function getImage(number) {
  return new URL(
    `../assets/icon${number}.webp`,
    import.meta.url
  ).href;
}
</script>