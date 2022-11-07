<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="
      w-full
      md:h-24
      flex
      items-center
      h-20
      bg-primary
      z-[999]
      backdrop-blur
      fixed
    "
  >
    <div class="w-full">
      <div class="flex justify-between relative">
        <div >
          <img src="../assets/logoipn.jpg" alt="" class="w-20 h-full" />
        </div>
        <div class="md:flex my-auto gap-5 hidden">
          <router-link to="/polivirtual" class="text-white">
            Polivirtual
          </router-link>
          <router-link to="/polivirtual" class="text-white">
            Admisión
          </router-link>
          <router-link to="/polivirtual" class="text-white">
            Oferta Educativa
          </router-link>
          <router-link to="/polivirtual" class="text-white">
            CVDR Oaxaca
          </router-link>
          <router-link to="/polivirtual" class="text-white">
            Contacto
          </router-link>
        </div>
        <div class="md:flex gap-5 my-auto mr-5 hidden">
          <div>
            <button @click="openLink('https://www.facebook.com/IPNCVDROaxaca/')">
              <img class="w-5 relative " src="../assets/facebook.svg" alt="" />
            </button>
          </div>
          <div>
            <button @click="openLink('https://www.instagram.com/ipncvdroaxaca/')">
              <img class="w-5" src="../assets/instagram.svg" alt="" href="" />
            </button>
          </div>
        </div>

        <div class="w-56 text-right py-52 md:hidden">
          <Menu as="div" class="relative inline-block text-center">
            <div>
              <MenuButton
                class="
                  inline-flex
                  w-full
                  justify-center
                  rounded-md
                  bg-black bg-opacity-20
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  hover:bg-opacity-30
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-opacity-75
                  md:hidden
                "
              >
                Menú
                <ChevronDownIcon
                  class="
                    ml-2
                    -mr-1
                    h-5
                    w-5
                    text-violet-200
                    hover:text-violet-100
                  "
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="
                  absolute
                  right-1
                  mt-2
                  w-56
                  origin-top-right
                  divide-y divide-gray-100
                  rounded-md
                  bg-white
                  shadow-lg
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <div class="px-1 py-1 items-center">
                  <MenuItem v-slot="{ active }">
                    <button
                     @click="scrollTo('NOSOTROS')"
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center text-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <EditIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400 text-center"
                        aria-hidden="true"
                      />
                      Polivirtual
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                     @click="scrollTo('BOLETOS')"
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <DuplicateIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Admisión
                    </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                     @click="scrollTo('GALERIA')"
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <ArchiveIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Oferta Educativa
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                     @click="scrollTo('CONTACTO')"
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <MoveIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      CVDR Oaxaca
                    </button>
                  </MenuItem>
                   <MenuItem v-slot="{ active }">
                    <button
                     @click="scrollTo('')"
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <MoveIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      Contacto
                    </button>
                  </MenuItem>
                </div>

                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <DeleteIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      <div class="flex gap-5 my-auto mr-5">
                        <div>
                          <button
                            @click="
                              openLink('https://www.facebook.com/VIMMEFest')
                            "
                          >
                            <img
                              class="w-5 relative"
                              src="../assets/facebook.svg"
                              alt=""
                            />
                          </button>
                        </div>
                        <div>
                          <button
                            @click="
                              openLink('https://www.instagram.com/vimmemx/')
                            "
                          >
                            <img
                              class="w-5"
                              src="../assets/instagram.svg"
                              alt=""
                              href=""
                            />
                          </button>
                        </div>
                      </div>
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

function scrollTo(elementId) {
  var element = document.getElementById(elementId);
  console.log("ID: ", element);
  element.scrollIntoView({ behavior: "smooth" });
}

function openLink(link, index) {
  window.open(
    link,
    "vimme",
    "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=900,height=600,left=0,top=0"
  );
}

const elements = [
  {
    link: "https://www.instagram.com/vimmemx/",
  },

  {
    link: "https://www.facebook.com/VIMMEFest",
  },
];

function getImage(name) {
  return new URL(
    `../assets/galeria/fotos_vimme2022_/boletos/${name}`,
    import.meta.url
  ).href;
}
</script>