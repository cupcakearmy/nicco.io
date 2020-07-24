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
    transform: translateY(5vh);
  }

  @media (max-width: 50em) {
    img {
      transform: translateY(15vh);
      height: 60vh;
      width: 69vw;
    }

    section.left {
      transform: translateY(-25vh);
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
  <img src="/images/decoration.jpg" alt="decoration" />
</section>
