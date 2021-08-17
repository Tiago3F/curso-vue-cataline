<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat in cum
      quaerat vero iste nostrum repellat explicabo quos saepe veniam sequi
      necessitatibus recusandae eos nisi, accusantium corporis animi! Iste, hic!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quae
      culpa sed repellendus est, porro facilis unde id iste mollitia esse
      blanditiis amet eveniet illum tempora. Similique harum tenetur nisi?
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook">
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
    text-align: justify;
  }
  img {
    max-width: 100%;
  }
}
</style>