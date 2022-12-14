<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-9
        .bloque-texto-b.bloque-texto-recuadro.p-4.mt-3.bloque-texto-width1
          .bloque-texto-b__texto
            p Estimado aprendiz, en este componente formativo desarrollará habilidades para identificar la utilidad de los planes de emergencia y contingencia, los cuales se deben evaluar para determinar su efectividad, y a partir de allí, establecer los planes de mejora, que, generalmente, se derivan de procesos de auditoría, revisión por la alta dirección o incumplimientos legales. En esta unidad formativa se identificará cuáles son los mecanismos con los que se puede determinar la efectividad de los planes de emergencia y contingencia. Por otra parte, comprenderá la importancia que tienen los procesos de evaluación para establecer los planes de mejora en la ejecución y control de las emergencias y contingencias.
      
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/introduccion/img1.png', alt='Texto que describa la imagen') 

    .row.mt-5
      p Le invitamos a que se introduzca en la temática con el siguiente video, para que pueda desarrollar las habilidades que se esperan en el transcurso de cada punto de este componente formativo. Éxitos en la culminación de su formación técnica y profesional.

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
