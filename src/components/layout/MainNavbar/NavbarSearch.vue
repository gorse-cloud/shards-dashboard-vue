<template>
  <d-form class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <d-input-group class="ml-3" seamless>
      <template #prepend>
        <d-input-group-text>
          <i class="material-icons">search</i>
        </d-input-group-text>
      </template>
      <d-input class="navbar-search" placeholder="Search for something..." />
    </d-input-group>
  </d-form>
</template>
