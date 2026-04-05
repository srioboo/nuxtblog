<template>
  <header
    class="header flex justify-between justify-items-center flex-wrap p-3 text-gray-500 border-solid border-b border-gray-500"
  >
    <div class="header__logo font-bold">
      <a href="/" class="no-underline">Inicio</a>
    </div>

    <div id="navmenu" class="header__navmenu font-bold">
      <ul class="flex list-none">
        <li class="mr-6"><SectionsSearch /></li>
        <li class="mr-6">
          <a href="/year-archive">Posts</a>
        </li>
      </ul>
    </div>
  </header>
</template>


