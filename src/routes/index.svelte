<script>
  import SpacedLetters from '../components/SpacedLetters.svelte'
</script>

<style>
  p {
    font-size: 4vw;
  }

  section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.left {
    align-items: flex-start;
    padding-left: 1em;
  }

  section.right {
    align-items: flex-end;
  }

  img {
    object-fit: contain;
    height: 65vh;
    width: 33vw;
    /* margin-top: 16vh; */
    transform: translateY(16vh);
  }

  @media (max-width: 30em) {
    img {
      transform: translateY(6em);
      height: 69vh;
      width: 69vw;
    }

    section.left {
      transform: translateY(-11em);
    }
  }
</style>

<svelte:head>
  <title>Niccolo Borgioli</title>
</svelte:head>

<section class="left" style="z-index: 3;">
  <h1>
    <SpacedLetters letters="Niccolò" />
    <SpacedLetters letters="Borgioli" />
  </h1>

  <p>Design & Development</p>
</section>

<section class="right" style="z-index: 2;">
  <img src="/images/decoration.jpg" />
</section>
